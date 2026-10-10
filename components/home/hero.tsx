"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_HOLD_MS = 200;
const SWAP_MS = 300;

export default function Hero() {
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSwapped(true), INTRO_HOLD_MS);
    return () => clearTimeout(t);
  }, []);

  const swapDuration = { transitionDuration: `${SWAP_MS}ms` };

  return (
    <section className="relative h-screen w-full overflow-hidden from-opacity-0 to-opacity-100 bg-navy">
      <Image
        src="/UTMCampus.avif"
        alt="UTM campus"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* base scrim: always on, keeps the intro text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-700/60 via-neutral-700/20 to-neutral-700/60" />

      {/* darkening layer: fades in over the swap */}
      <div
        aria-hidden="true"
        style={swapDuration}
        className={`absolute inset-0 bg-neutral-900 transition-opacity ease-in motion-reduce:transition-none ${
          swapped ? "opacity-30" : "opacity-0"
        }`}
      />

      {/* INTRO: big DEMA above, small text below. Fades + slides left. */}
      <div
        aria-hidden={swapped}
        style={swapDuration}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 transition-all ease-out motion-reduce:transition-none ${
          swapped ? "-translate-x-24 opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <h1 className="font-sans text-[clamp(6rem,24vw,18rem)] font-light leading-[0.8] tracking-tight text-neutral-50 ">
          DEMA
        </h1>
        <p className="font-mono text-lg font-bold uppercase tracking-[0.3em] text-neutral-50">
          University of Toronto
        </p>
      </div>

      {/* LOGO: stacked DEMA letters with x, left edge, pops in */}
      <div
        aria-hidden={!swapped}
        className={`absolute left-4 top-1/2 flex h-60 w-20 -translate-y-1/2 flex-col items-center justify-center gap-1 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none md:left-8 ${
          swapped ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-0.5 text-neutral-50">
          {['D', 'E', 'M', 'A', 'x'].map((letter) => (
            <span
              key={letter}
              className="font-mono text-[1.1rem] font-bold uppercase tracking-[0.18em]"
            >
              {letter}
            </span>
          ))}
        </div>
        <Image
          src="/UofTlogo.svg"
          alt="Uoft logo"
          width={96}
          height={96}
          className="relative -left-0.5 -top-5 h-28 w-28 shrink-0"
        />
      </div>

      {/* DESCRIPTION: right-aligned, big heading + body */}
      <div
        aria-hidden={!swapped}
        style={swapDuration}
        className={`absolute left-24 right-6 top-1/2 max-w-xl -translate-y-1/2 text-right transition-all ease-out motion-reduce:transition-none md:left-auto md:right-12 lg:right-16 ${
          swapped ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
        }`}
      >
        <h2 className="font-sans font-bold text-3xl font-light leading-[0.95] tracking-tight text-neutral-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Digital Enterprise Management at UTM
        </h2>
        <p className="mt-6 ml-auto max-w-md text-lg font-light leading-relaxed text-neutral-100">
          DEMA is the student club for Digital Enterprise Management at UTM.
          In 2024, DEMA received the 2023-2024 Club Excellence Award.
        </p>
      </div>
    </section>
  );
}