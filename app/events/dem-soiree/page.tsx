import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EventCountdown from "@/components/home/EventCountdown";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { nextEvent } from "@/lib/next-event";
import { social } from "@/lib/social";

export const metadata: Metadata = {
  title: nextEvent.name,
  description:
    "Opening event of the year for Digital Enterprise Management at UTM. Students, faculty, and alumni.",
};

export default function DemSoireePage() {
  return (
    <main>
      <section className="px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Link
              href="/#events"
              className="font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:text-red"
            >
              All events
            </Link>
            <h1 className="mt-6 font-sans text-4xl font-bold leading-[0.95] tracking-tight text-navy md:text-6xl">
              {nextEvent.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-neutral-600">
              First official event of the year. Digital Enterprise Management
              students, faculty, and alumni. Networking and a meal. Wednesday 30
              September at 6:00 PM at The Blind Duck. No TCard required.
            </p>
          </div>

          <div className="border border-navy bg-neutral-50 p-6 lg:col-span-4 lg:col-start-9 lg:mt-16">
            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-red">
              Until doors
            </p>
            <div className="mt-3">
              <EventCountdown
                startsAt={nextEvent.startsAt}
                dateLabel={nextEvent.dateLabel}
                timeLabel={nextEvent.timeLabel}
              />
            </div>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  When
                </dt>
                <dd className="mt-1 text-base font-light text-navy">
                  {nextEvent.weekdayLabel} {nextEvent.dateLabel}
                  <br />
                  {nextEvent.timeLabel}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Where
                </dt>
                <dd className="mt-1 text-base font-light text-navy">
                  {nextEvent.place}
                  <br />
                  {nextEvent.roomHint}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={nextEvent.rsvpHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-none border border-red bg-red px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
              >
                {nextEvent.rsvpLabel}
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-none border border-navy bg-transparent px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:bg-navy hover:text-neutral-50"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 bg-red"
            />
            <ParallaxMedia className="relative rounded-none border border-navy">
              <Image
                src={nextEvent.image}
                alt={nextEvent.imageAlt}
                width={1600}
                height={1000}
                className="aspect-[16/10] h-auto w-full object-cover object-center"
                priority
              />
            </ParallaxMedia>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              What to expect
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-navy">
              DEM Soiree opens the year for Digital Enterprise Management.
              Faculty, students, and alumni share one evening of conversation
              over a meal. It is the first official DEMA event of the academic
              year.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              Details
            </h2>
            <ul className="mt-4 space-y-3 text-base font-light text-navy">
              <li className="border-l-2 border-red pl-4">
                Wednesday 30 September · 6:00 PM
              </li>
              <li className="border-l-2 border-navy pl-4">
                The Blind Duck · UTM Student Centre
              </li>
              <li className="border-l-2 border-navy pl-4">No TCard needed</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
