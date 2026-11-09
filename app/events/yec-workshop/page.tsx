import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EventCountdown from "@/components/home/EventCountdown";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { yecWorkshop } from "@/lib/next-event";

export const metadata: Metadata = {
  title: yecWorkshop.name,
  description:
    "YEC Workshop 01: From Problems to Products. Thursday 12 November, 6:30 to 9:00 PM in MN 1210. Industry guests from CIBC, Tangerine, and more.",
};

export default function YecWorkshopPage() {
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
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
                YEC Workshop 01
              </p>
              <h1 className="mt-4 font-sans text-4xl font-bold leading-[0.95] tracking-tight text-navy md:text-6xl">
                {yecWorkshop.name}
              </h1>
              <p className="mt-6 text-lg font-light leading-relaxed text-neutral-600">
                Hear from professionals in fintech and financial services,
                including guests from CIBC, Tangerine, and more. Explore
                customer needs, marketing, and business development, and learn
                what it takes to turn ideas into products.
              </p>
              <a
                href={yecWorkshop.rsvpHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-none border border-red bg-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
              >
                Register on Instagram
              </a>
            </div>

            <div className="border border-navy bg-neutral-50 p-6 lg:col-span-5">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-red">
                Until start
              </p>
              <div className="mt-3">
                <EventCountdown
                  startsAt={yecWorkshop.startsAt}
                  dateLabel={yecWorkshop.dateLabel}
                  timeLabel={yecWorkshop.timeLabel}
                />
              </div>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    When
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {yecWorkshop.weekdayLabel} {yecWorkshop.dateLabel}
                    <br />
                    {yecWorkshop.timeLabel}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Where
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {yecWorkshop.place}
                    <br />
                    {yecWorkshop.roomHint}
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
                  src={yecWorkshop.image}
                  alt={yecWorkshop.imageAlt}
                  width={824}
                  height={1024}
                  className="aspect-[16/10] h-auto w-full object-cover object-top"
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
              An interactive look at the fintech landscape with industry
              speakers. Build skills ahead of the case competition, meet peers,
              and hear how professionals move from problems to products.
              Registration is through Instagram until a form link is posted.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              Details
            </h2>
            <ul className="mt-4 space-y-3 text-base font-light text-navy">
              <li className="border-l-2 border-red pl-4">
                Thursday 12 November · 6:30 to 9:00 PM
              </li>
              <li className="border-l-2 border-navy pl-4">
                MN 1210 · University of Toronto Mississauga
              </li>
              <li className="border-l-2 border-navy pl-4">
                Industry guests from CIBC, Tangerine, and more
              </li>
              <li className="border-l-2 border-navy pl-4">
                Register through Instagram
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
