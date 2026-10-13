"use client";

import { useEffect, useRef, useState } from "react";
import {
  clubStats,
  departments,
  getAssociateCount,
  getTotalMembers,
} from "@/lib/about";
import { team, type DepartmentId } from "@/lib/team";

/** Hollow squares drawn while the general member count is unknown. */
const PLACEHOLDER_GENERAL = 120;
const MAX_FILL_DELAY_MS = 900;

type Square = {
  kind: "lead" | "associate" | "general";
  department: DepartmentId | null;
  known: boolean;
};

function buildSquares(): Square[] {
  const squares: Square[] = [];
  for (const department of departments) {
    for (const member of team) {
      if (member.department === department.id) {
        squares.push({ kind: "lead", department: department.id, known: true });
      }
    }
  }
  for (const department of departments) {
    for (let i = 0; i < (department.associates ?? 0); i += 1) {
      squares.push({
        kind: "associate",
        department: department.id,
        known: true,
      });
    }
  }
  const general = clubStats.generalMembers;
  const generalCount = general ?? PLACEHOLDER_GENERAL;
  for (let i = 0; i < generalCount; i += 1) {
    squares.push({ kind: "general", department: null, known: general !== null });
  }
  return squares;
}

const squares = buildSquares();

function squareClass(square: Square) {
  if (square.kind === "lead") return "bg-red";
  if (square.kind === "associate") return "bg-navy";
  return square.known
    ? "bg-neutral-400"
    : "border border-dashed border-neutral-400";
}

function formatCount(count: number | null) {
  return count === null ? "TBA" : count.toLocaleString("en-CA");
}

export function MemberScaleLegend() {
  const associates = getAssociateCount();
  const rows = [
    { label: "Executives", value: formatCount(team.length), swatch: "bg-red" },
    { label: "Associates", value: formatCount(associates), swatch: "bg-navy" },
    {
      label: "General members",
      value: formatCount(clubStats.generalMembers),
      swatch:
        clubStats.generalMembers === null
          ? "border border-dashed border-neutral-400"
          : "bg-neutral-400",
    },
  ];

  return (
    <dl className="border-t border-navy/20">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-6 border-b border-navy/20 py-3"
        >
          <dt className="flex items-center gap-3 text-base text-navy">
            <span className={`block size-3 ${row.swatch}`} aria-hidden="true" />
            {row.label}
          </dt>
          <dd className="font-mono text-xl font-bold text-navy">{row.value}</dd>
        </div>
      ))}
      <div className="flex items-center justify-between gap-6 border-b border-navy/20 py-3">
        <dt className="text-base font-bold text-navy">Total members</dt>
        <dd className="font-mono text-xl font-bold text-red">
          {formatCount(getTotalMembers())}
        </dd>
      </div>
    </dl>
  );
}

export default function MemberScale({
  activeDepartment,
}: {
  activeDepartment: DepartmentId | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      setSettled(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shown || settled) return;
    const timer = window.setTimeout(
      () => setSettled(true),
      MAX_FILL_DELAY_MS + 200,
    );
    return () => window.clearTimeout(timer);
  }, [shown, settled]);

  const stepMs = MAX_FILL_DELAY_MS / squares.length;
  const associates = getAssociateCount();

  return (
    <div
      ref={ref}
      className="grid gap-1.5 [grid-template-columns:repeat(auto-fill,minmax(20px,1fr))] md:gap-2 md:[grid-template-columns:repeat(auto-fill,minmax(26px,1fr))] lg:gap-1.5 lg:[grid-template-columns:repeat(auto-fill,minmax(20px,1fr))]"
      role="img"
      aria-label={`Club size: ${team.length} executives, ${formatCount(associates)} associates, ${formatCount(clubStats.generalMembers)} general members.`}
    >
      {squares.map((square, index) => {
        const dimmed =
          activeDepartment !== null && square.department !== activeDepartment;
        return (
          <span
            key={index}
            className={`block aspect-square transition-opacity duration-150 motion-reduce:transition-none ${squareClass(square)} ${
              !shown ? "opacity-0" : dimmed ? "opacity-30" : "opacity-100"
            }`}
            style={
              settled
                ? undefined
                : { transitionDelay: `${Math.round(index * stepMs)}ms` }
            }
          />
        );
      })}
    </div>
  );
}
