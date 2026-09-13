"use client";

import { useEffect, useRef } from "react";

type ParallaxMediaProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  /** When true, the moving layer fills the frame (for fill images). */
  cover?: boolean;
};

export default function ParallaxMedia({
  children,
  className = "",
  strength = 18,
  cover = false,
}: ParallaxMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      return;
    }

    let frameId = 0;

    const update = () => {
      const rect = frame.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
      const offset = Math.max(-1, Math.min(1, progress)) * strength;
      media.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={frameRef} className={`overflow-hidden ${className}`}>
      <div
        ref={mediaRef}
        className={
          cover
            ? "absolute inset-0 will-change-transform"
            : "h-full w-full will-change-transform"
        }
        style={{ transform: "translate3d(0, 0, 0) scale(1.08)" }}
      >
        {children}
      </div>
    </div>
  );
}
