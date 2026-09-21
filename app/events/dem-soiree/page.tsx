import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EventCountdown from "@/components/home/EventCountdown";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { nextEvent } from "@/lib/next-event";

export const metadata: Metadata = {
  title: nextEvent.name,
  description:
    "DEMA Soirée 2026 at The Blind Duck. Free admission, food, and networking with students and industry. Doors 6:40 PM, Wednesday 30 September. Open to all UTM students.",
};

export default function DemSoireePage() {
  return (
    <main>
      <section className="px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#events"
            className="font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:text-red"
          >
            All events
          </Link>

          <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <h1 className="font-sans text-4xl font-bold leading-[0.95] tracking-tight text-navy md:text-6xl">
                {nextEvent.name}
              </h1>
              <p className="mt-6 text-lg font-light leading-relaxed text-neutral-600">
                Start the year with networking, free food, and a look at what
                DEMA has planned for 2026–2027. Open to every UTM student, any
                program. Bring friends. Wednesday 30 September. Doors at 6:40 PM
                at The Blind Duck. Free admission. Space may be limited, so RSVP
                first.
              </p>
              <a
                href={nextEvent.rsvpHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-none border border-red bg-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
              >
                RSVP
              </a>
            </div>

            <div className="border border-navy bg-neutral-50 p-6 lg:col-span-5">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-red">
                Until start
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
            </div>

            <div className="relative pb-3 pr-3 lg:col-span-12">
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
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              What to expect
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-navy">
              Meet the DEMA team and other UTM students. Hear from guests, then
              network with industry people from companies including Microsoft,
              Amazon, and EY. Get a preview of TechTrack and the Youth
              Entrepreneurship Conference, and how to get involved this year.
              Food and refreshments provided.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              Details
            </h2>
            <ul className="mt-4 space-y-3 text-base font-light text-navy">
              <li className="border-l-2 border-red pl-4">
                Wednesday 30 September · doors 6:40 PM
              </li>
              <li className="border-l-2 border-navy pl-4">
                The Blind Duck · UTM Student Centre
              </li>
              <li className="border-l-2 border-navy pl-4">
                Free admission · food and refreshments
              </li>
              <li className="border-l-2 border-navy pl-4">
                Open to all UTM students, any program
              </li>
              <li className="border-l-2 border-navy pl-4">
                Space may be limited · RSVP in advance
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
