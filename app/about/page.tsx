import type { Metadata } from "next";
import ClubStructure from "@/components/about/ClubStructure";
import ExecutiveGrid from "@/components/about/ExecutiveGrid";
import MissionHero from "@/components/about/MissionHero";
import { mission } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description: `${mission.body.split(". ")[0]}. Meet the executive team and departments.`,
};

export default function AboutPage() {
  return (
    <main>
      <MissionHero />
      <ClubStructure />
      <ExecutiveGrid />

      <section className="px-6 pb-24 md:px-12 lg:px-16 lg:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-t border-navy pt-12 md:flex-row md:items-end">
          <p className="max-w-2xl font-sans text-4xl font-light leading-[0.95] tracking-tight text-navy md:text-5xl">
            Membership is open to every UTM student.
          </p>
          <a
            href="/#join"
            className="shrink-0 border border-red bg-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Join DEMA
          </a>
        </div>
      </section>
    </main>
  );
}
