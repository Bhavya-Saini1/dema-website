import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EventCountdown from "@/components/home/EventCountdown";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { learnToNetwork } from "@/lib/next-event";

export const metadata: Metadata = {
  title: learnToNetwork.name,
  description:
    "Learn to Network with DEMA and the UTM Career Centre, facilitated by Lucille Yi. Wednesday 14 October, 6:00 to 7:30 PM in DV 3140. Open to all UTM students. Seats are limited.",
};

export default function LearnToNetworkPage() {
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
                DEMA x UTM Career Centre
              </p>
              <h1 className="mt-4 font-sans text-4xl font-bold leading-[0.95] tracking-tight text-navy md:text-6xl">
                {learnToNetwork.name}
              </h1>
              <p className="mt-6 text-lg font-light leading-relaxed text-neutral-600">
                Your network starts with a conversation. Learn to Network is
                back: an interactive session with Lucille Yi from the UTM
                Career Centre on how to start professional conversations and
                keep them going. Wednesday 14 October, 6:00 to 7:30 PM in DV
                3140. Open to all UTM students. Seats are limited, so register
                first.
              </p>
              <a
                href={learnToNetwork.rsvpHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-none border border-red bg-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
              >
                Register
              </a>
            </div>

            <div className="border border-navy bg-neutral-50 p-6 lg:col-span-5">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-red">
                Until start
              </p>
              <div className="mt-3">
                <EventCountdown
                  startsAt={learnToNetwork.startsAt}
                  dateLabel={learnToNetwork.dateLabel}
                  timeLabel={learnToNetwork.timeLabel}
                />
              </div>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    When
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {learnToNetwork.weekdayLabel} {learnToNetwork.dateLabel}
                    <br />
                    {learnToNetwork.timeLabel}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Where
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {learnToNetwork.place}
                    <br />
                    {learnToNetwork.roomHint}
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
                  src={learnToNetwork.image}
                  alt={learnToNetwork.imageAlt}
                  width={1024}
                  height={664}
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
              For students getting ready to meet employers, heading to their
              first networking event, or who want to get better at talking to
              people in their field. You get a networking strategy that works,
              then put it into practice in the room. Come ready to talk.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              Details
            </h2>
            <ul className="mt-4 space-y-3 text-base font-light text-navy">
              <li className="border-l-2 border-red pl-4">
                Wednesday 14 October · 6:00 to 7:30 PM
              </li>
              <li className="border-l-2 border-navy pl-4">
                DV 3140 · University of Toronto Mississauga
              </li>
              <li className="border-l-2 border-navy pl-4">
                Open to all UTM students
              </li>
              <li className="border-l-2 border-navy pl-4">
                Limited seats · register in advance
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              Meet the facilitator
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-navy">
              Lucille Yi is an Employment Strategist – International at the
              UTM Career Centre. She draws on past work in government,
              non-profit, and recruiting to help international and domestic
              students find jobs in Canada and abroad. She has worked in China,
              Türkiye, and Canada.
            </p>
          </div>
          <div className="relative pb-2 pr-2 lg:col-span-6 lg:col-start-7">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 bg-navy"
            />
            <Image
              src="/events/learn-to-network/facilitator-speaking.jpg"
              alt="Lucille Yi speaking at the podium during Learn to Network"
              width={1024}
              height={682}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="relative aspect-[3/2] h-auto w-full rounded-none border border-navy object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
            From last year
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
            <Image
              src="/events/learn-to-network/group.jpg"
              alt="Students and the DEMA team after last year's Learn to Network session"
              width={1024}
              height={654}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="aspect-[4/3] h-auto w-full rounded-none border border-navy object-cover md:col-span-8"
            />
            <Image
              src="/events/learn-to-network/title-slide.jpg"
              alt="Learn to Network title slide on the projector screen"
              width={768}
              height={1024}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[3/4] h-auto w-full rounded-none border border-navy object-cover md:col-span-4 md:aspect-auto md:h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
