import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { learnToNetwork } from "@/lib/next-event";

export const metadata: Metadata = {
  title: `${learnToNetwork.name} recap`,
  description:
    "Recap of Learn to Network with DEMA and the UTM Career Centre. Wednesday 14 October 2026 in DV 3140 with Lucille Yi.",
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
                Recap · DEMA x UTM Career Centre
              </p>
              <h1 className="mt-4 font-sans text-4xl font-bold leading-[0.95] tracking-tight text-navy md:text-6xl">
                {learnToNetwork.name}
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-bold leading-snug text-navy md:text-3xl">
                A little networking goes a long way.
              </p>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-neutral-600">
                Thank you to everyone who joined us for our Learn to Network
                collab with the Career Centre. From building confidence to
                making real connections, we loved seeing people step out of
                their comfort zones and grow their professional skills.
              </p>
            </div>

            <div className="border border-navy bg-neutral-50 p-6 lg:col-span-5">
              <dl className="space-y-5">
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
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    With
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    Lucille Yi · UTM Career Centre
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
                  height={736}
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
              Looking back
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-navy">
              Students practiced how to start professional conversations and
              keep them going. A big thank you to Lucille and the Career Centre
              for bringing this event to DEMA.
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
                Facilitated by Lucille Yi, UTM Career Centre
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
              Lucille Yi is an Employment Strategist – International at the UTM
              Career Centre. She draws on past work in government, non-profit,
              and recruiting to help international and domestic students find
              jobs in Canada and abroad. She has worked in China, Türkiye, and
              Canada.
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
              height={778}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="relative aspect-[3/2] h-auto w-full rounded-none border border-navy object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
            From the night
          </h2>
          <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-navy">
            A look back at the connections, conversations, and memories we made.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
            <Image
              src="/events/learn-to-network/group.jpg"
              alt="Students and the DEMA team after Learn to Network"
              width={1024}
              height={736}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="aspect-[4/3] h-auto w-full rounded-none border border-navy object-cover md:col-span-8"
            />
            <Image
              src="/events/learn-to-network/facilitator-speaking.jpg"
              alt="Lucille Yi presenting Where Can You Network at Learn to Network"
              width={1024}
              height={778}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[3/4] h-auto w-full rounded-none border border-navy object-cover object-top md:col-span-4 md:aspect-auto md:h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
