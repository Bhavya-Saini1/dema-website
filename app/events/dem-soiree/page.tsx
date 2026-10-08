import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { demSoiree } from "@/lib/next-event";

export const metadata: Metadata = {
  title: `${demSoiree.name} 2026`,
  description:
    "DEM Soirée 2026 recap. More than 120 students, alumni, and industry guests opened DEMA's 2026–2027 year at The Blind Duck with dinner, networking, and the DEM Horizons Panel.",
};

const panelists = [
  {
    name: "Adnan Bashir",
    role: "Global Communications and Corporate Affairs Executive",
  },
  {
    name: "Virginie Pontruché",
    role: "Strategic Customer Executive, Microsoft, SheSays, and Cloud Seeders",
  },
  { name: "Tabrez Jeshani", role: "Resource Manager, Microsoft" },
  { name: "Abdul Khawaja", role: "Cloud Solution Architect, Microsoft" },
  { name: "Kensho Ando Heng", role: "CEO, CMPUS.AI" },
];

const pillars = [
  {
    word: "Impact",
    text: "Programming that makes a real difference for students.",
  },
  {
    word: "Change",
    text: "Keep bringing positive change to DEMA.",
  },
  {
    word: "Growth",
    text: "More opportunities and a bigger community for members.",
  },
];

const buttonRed =
  "inline-block rounded-none border border-red bg-red px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark";

const buttonNavy =
  "inline-block rounded-none border border-navy px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:border-red hover:text-red";

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
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
                Recap
              </p>
              <h1 className="mt-4 font-sans text-4xl font-bold leading-[0.95] tracking-tight text-navy md:text-6xl">
                {demSoiree.name} 2026
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-neutral-600">
                DEMA opened the 2026–2027 year at The Blind Duck. More than 120
                students, alumni, industry professionals, and UTM community
                members came out for dinner, a guest panel, and an evening of
                meeting new people.
              </p>
            </div>

            <div className="border border-navy bg-neutral-50 p-6 lg:col-span-5">
              <dl className="space-y-5">
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    When
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {demSoiree.weekdayLabel} {demSoiree.dateLabel}
                    <br />
                    Doors at {demSoiree.timeLabel}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Where
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    {demSoiree.place}
                    <br />
                    {demSoiree.roomHint}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Who
                  </dt>
                  <dd className="mt-1 text-base font-light text-navy">
                    120+ students, alumni, and guests
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
                  src={demSoiree.image}
                  alt={demSoiree.imageAlt}
                  width={1024}
                  height={768}
                  className="aspect-[16/10] h-auto w-full object-cover object-center"
                  priority
                />
              </ParallaxMedia>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="relative pb-2 pr-2 lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 bg-navy"
            />
            <Image
              src="/events/dem-soiree/panel.jpg"
              alt="The DEM Horizons Panel on stage at The Blind Duck"
              width={1024}
              height={576}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="relative aspect-[16/9] h-auto w-full rounded-none border border-navy object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy md:text-3xl">
              DEM Horizons Panel
            </h2>
            <p className="mt-2 text-base font-light text-neutral-600">
              Insights and advice for tomorrow&apos;s leaders. Five guests took
              the stage to talk about their careers and share advice with
              students.
            </p>
            <ul className="mt-6 divide-y divide-navy/20 border-y border-navy/20">
              {panelists.map((panelist) => (
                <li key={panelist.name} className="py-3">
                  <p className="text-base font-bold text-navy">
                    {panelist.name}
                  </p>
                  <p className="text-sm font-light text-neutral-600">
                    {panelist.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-24 text-neutral-50 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-sans text-2xl font-bold tracking-tight md:text-3xl">
              The year ahead
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed">
              On the night, DEMA President Vaibhav Kaushal shared the three
              pillars guiding this year&apos;s team. The Soirée was only the
              beginning. More events, professional development, and industry
              connections are on the way, open to students from every program.
            </p>
          </div>
          <dl className="lg:col-span-7 lg:col-start-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.word}
                className="grid grid-cols-1 items-baseline gap-2 border-t border-neutral-50/30 py-6 md:grid-cols-12 md:gap-6"
              >
                <dt className="font-sans text-6xl font-light leading-none tracking-tight md:col-span-7 md:text-8xl">
                  {pillar.word}
                </dt>
                <dd className="text-base font-light leading-relaxed md:col-span-5">
                  {pillar.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-navy md:text-3xl">
            On the night
          </h2>
          <div className="mt-6 flex flex-col gap-6 md:flex-row">
            <figure className="md:flex-[20_1_0%]">
              <Image
                src="/events/dem-soiree/team.jpg"
                alt="The DEMA 2026–2027 team on stage at The Blind Duck"
                width={1024}
                height={576}
                sizes="(min-width: 768px) 66vw, 100vw"
                className="aspect-[16/9] h-auto w-full rounded-none border border-navy object-cover"
              />
              <figcaption className="mt-2 text-sm font-light text-neutral-600">
                The 2026–2027 DEMA team.
              </figcaption>
            </figure>
            <figure className="md:flex-[9_1_0%]">
              <Image
                src="/events/dem-soiree/food.jpg"
                alt="Guests lining up for pizza at the Soirée"
                width={576}
                height={1024}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/5] h-auto w-full rounded-none border border-navy object-cover"
              />
              <figcaption className="mt-2 text-sm font-light text-neutral-600">
                Dinner was on us.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy md:text-3xl">
              With CampusAI
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-navy">
              CampusAI, the AI campus for university students, joined us at the
              Soirée. The platform is built for students who want to use AI to
              support their studies and get more out of university. This is the
              start of a new partnership, and we plan to find more ways to work
              together this year.
            </p>
            <a
              href={demSoiree.partnerHref}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 ${buttonNavy}`}
            >
              Visit CampusAI
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Stay involved
            </h2>
            <div className="mt-6 space-y-8">
              <div className="border-l-2 border-red pl-5">
                <h3 className="text-lg font-bold text-navy">
                  Tell us how it went
                </h3>
                <p className="mt-1 text-base font-light leading-relaxed text-navy">
                  The post-event survey is anonymous. Your answers shape the
                  next DEMA events.
                </p>
                <a
                  href={demSoiree.surveyHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-4 ${buttonRed}`}
                >
                  Take the survey
                </a>
              </div>
              <div className="border-l-2 border-navy pl-5">
                <h3 className="text-lg font-bold text-navy">Join the team</h3>
                <p className="mt-1 text-base font-light leading-relaxed text-navy">
                  Round 2 hiring is coming up, with roles across several
                  departments.
                </p>
                <a
                  href={demSoiree.hiringHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-4 ${buttonNavy}`}
                >
                  Apply for Round 2
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
