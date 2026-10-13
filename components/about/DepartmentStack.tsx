"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { departments, getDepartmentLeads, type Department } from "@/lib/about";
import { displayName, initials, type DepartmentId } from "@/lib/team";

function DepartmentCard({ department }: { department: Department }) {
  const leads = getDepartmentLeads(department.id);
  const associates = department.associates ?? 0;

  return (
    <article className="flex min-h-[22rem] flex-col border border-navy bg-neutral-50 p-6 md:p-8">
      <div className="flex items-start justify-between gap-6">
        <h3 className="font-sans text-3xl font-bold leading-none tracking-tight text-navy md:text-4xl">
          {department.name}
        </h3>
        <p className="shrink-0 text-right">
          <span className="block font-mono text-4xl font-bold leading-none text-red">
            {leads.length + associates}
          </span>
          <span className="mt-1 block text-sm text-navy">
            {leads.length} {leads.length === 1 ? "lead" : "leads"}
            {department.associates === 0
              ? null
              : `, ${department.associates ?? "TBA"} ${
                  department.associates === 1 ? "associate" : "associates"
                }`}
          </span>
        </p>
      </div>

      <p className="mt-4 max-w-prose text-base font-light leading-relaxed text-navy">
        {department.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1" aria-hidden="true">
        {leads.map((member) => (
          <span key={member.id} className="block size-3 bg-red" />
        ))}
        {Array.from({ length: associates }, (_, index) => (
          <span key={index} className="block size-3 bg-navy" />
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-4">
          {leads.map((member) => (
            <li key={member.id} className="flex items-center gap-3">
              <span className="relative block size-12 shrink-0 overflow-hidden border border-navy/20 bg-neutral-100">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition ?? "center 20%" }}
                    sizes="48px"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center text-base font-light text-navy/40">
                    {initials(member)}
                  </span>
                )}
              </span>
              <span>
                <span className="block text-base font-bold leading-tight text-navy">
                  {displayName(member)}
                </span>
                <span className="mt-1 block font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-red">
                  {member.role}
                </span>
              </span>
            </li>
          ))}
        </ul>
        {department.hiring ? (
          <a
            href="/#join"
            className="border border-red bg-red px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            See open roles
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function DepartmentStack({
  onActiveChange,
}: {
  onActiveChange: (id: DepartmentId | null) => void;
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    let lastActive: DepartmentId | null = null;

    const update = () => {
      frame = 0;
      const list = listRef.current;
      if (!list) return;
      let active: DepartmentId | null = null;
      if (list.getBoundingClientRect().bottom > 0) {
        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const stickyTop = parseFloat(getComputedStyle(card).top) || 0;
          if (card.getBoundingClientRect().top <= stickyTop + 4) {
            active = departments[index].id;
          }
        });
      }
      if (active !== lastActive) {
        lastActive = active;
        onActiveChange(active);
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [onActiveChange]);

  return (
    <ol ref={listRef} className="flex flex-col gap-24 pb-[20vh]">
      {departments.map((department, index) => (
        <li
          key={department.id}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
          className="sticky top-[calc(5rem_+_var(--stack-index)_*_0.5rem)] lg:top-[calc(6rem_+_var(--stack-index)_*_0.5rem)]"
          style={{ "--stack-index": index } as CSSProperties}
        >
          <DepartmentCard department={department} />
        </li>
      ))}
    </ol>
  );
}
