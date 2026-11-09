import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { bakeSale } from "@/lib/next-event";

export const metadata: Metadata = {
  title: `${bakeSale.name} recap`,
  description:
    "Recap of DEMA Sweet Connections bake sale outside the UTMSU, October 19–21 2026. Krispy Kreme doughnuts and meeting the DEMA community.",
};

export default function BakeSalePage() {
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
                Recap · Bake sale
              </p>
              <h1 className="mt-4 font-sans text-4xl font-bold leading-[0.95] tracking-tight text-navy md:text-6xl">
                {bakeSale.name}
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-bold leading-snug text-navy md:text-3xl">
                Make some sweet connections with DEMA.
              </p>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-neutral-600">
                Thank you to everyone who stopped by for our Sweet Connections
                bake sale. It was a pleasure meeting you and growing the DEMA
                community. Stay tuned for more events, conversations, and ways
                to get involved.
              </p>
            </div>

            <div className="border border-navy bg-neutral-50 p-6 lg:col-span-5">
              <dl className="space-y-5">
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    When
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {bakeSale.weekdayLabel} {bakeSale.dateLabel}
                    <br />
                    {bakeSale.timeLabel}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Where
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {bakeSale.place}
                    <br />
                    {bakeSale.roomHint}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Treats
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    Krispy Kreme doughnuts · $3
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
                  src={bakeSale.image}
                  alt={bakeSale.imageAlt}
                  width={1024}
                  height={773}
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
              Students grabbed a Krispy Kreme doughnut, met the exec team, and
              learned what DEMA is building this year. Funds from the sale
              support programming, professional development, and community
              events.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
              Details
            </h2>
            <ul className="mt-4 space-y-3 text-base font-light text-navy">
              <li className="border-l-2 border-red pl-4">
                19–21 October · 11:00 AM to 4:00 PM
              </li>
              <li className="border-l-2 border-navy pl-4">
                Outside the UTMSU
              </li>
              <li className="border-l-2 border-navy pl-4">
                Krispy Kreme doughnut · $3
              </li>
              <li className="border-l-2 border-navy pl-4">
                Open to all UTM students · no registration
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-navy">
            From the week
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
            <Image
              src="/events/bake-sale/group.jpg"
              alt="DEMA team posing at the Sweet Connections bake sale table"
              width={1024}
              height={773}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="aspect-[4/3] h-auto w-full rounded-none border border-navy object-cover md:col-span-8"
            />
            <Image
              src="/events/bake-sale/table.jpg"
              alt="DEMA member showing a box of Krispy Kreme doughnuts at the bake sale"
              width={1024}
              height={767}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[3/4] h-auto w-full rounded-none border border-navy object-cover md:col-span-4 md:aspect-auto md:h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
