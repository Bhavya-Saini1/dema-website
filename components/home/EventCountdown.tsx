"use client";

import { useEffect, useState } from "react";

type EventCountdownProps = {
  startsAt: string | null;
  dateLabel: string;
  timeLabel: string;
  compact?: boolean;
};

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function splitRemaining(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function EventCountdown({
  startsAt,
  dateLabel,
  timeLabel,
  compact = false,
}: EventCountdownProps) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    if (!startsAt) {
      return;
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const tick = () => setNow(Date.now());
    tick();
    if (media.matches) {
      return;
    }
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [startsAt]);

  const typeClass = compact
    ? "font-mono text-xs font-bold tabular-nums tracking-widest text-navy"
    : "font-mono text-sm font-bold tabular-nums tracking-widest text-navy";

  if (!startsAt) {
    return <p className={typeClass}>Date TBA</p>;
  }

  if (now === null) {
    return (
      <p className={typeClass}>
        {compact ? timeLabel : `${dateLabel} · ${timeLabel}`}
      </p>
    );
  }

  const remaining = new Date(startsAt).getTime() - now;

  if (remaining <= 0) {
    return <p className={typeClass}>Doors are open</p>;
  }

  const { days, hours, minutes, seconds } = splitRemaining(remaining);

  return (
    <p className={typeClass}>
      <span>{days}D</span>
      <span className="mx-2 text-red">/</span>
      <span>
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
    </p>
  );
}
