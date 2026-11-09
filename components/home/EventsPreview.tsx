import Image from "next/image";
import Link from "next/link";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { bakeSale, demSoiree, learnToNetwork } from "@/lib/next-event";

export default function EventsPreview() {
  return (
    <section id="events" className="px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:items-stretch">
        <h2 className="font-sans text-5xl font-bold leading-[0.9] tracking-tight text-navy md:text-6xl lg:col-span-12 lg:text-7xl">
          Recent Events
        </h2>

        <article className="relative min-h-[28rem] overflow-hidden rounded-none border border-navy lg:col-span-7 lg:min-h-[36rem]">
          <ParallaxMedia className="absolute inset-0" cover>
            <Image
              src={demSoiree.image}
              alt={demSoiree.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="rounded-none object-cover"
            />
          </ParallaxMedia>
          <div className="absolute inset-x-0 bottom-0 z-10 rounded-none bg-[#1A3A5C]/80 p-8 md:p-10">
            <time
              dateTime="2026-09-30"
              className="inline-block rounded-none border border-neutral-50 px-3 py-1 font-mono text-xs font-bold tracking-widest text-neutral-50"
            >
              {demSoiree.dateLabel}
            </time>
            <h3 className="mt-6 font-sans text-3xl font-bold leading-tight tracking-tight text-neutral-50 md:text-4xl">
              {demSoiree.name}
            </h3>
            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-neutral-50">
              {demSoiree.blurb}
            </p>
            <Link
              href={demSoiree.href}
              className="mt-6 inline-block rounded-none border border-neutral-50 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red hover:bg-red"
            >
              Recap
            </Link>
          </div>
        </article>

        <div className="flex flex-col gap-8 lg:col-span-5 lg:h-full">
          <article className="relative flex flex-1 flex-col overflow-hidden rounded-none border border-navy bg-[#1A3A5C] text-neutral-50">
            <div className="relative h-40 shrink-0">
              <Image
                src={learnToNetwork.image}
                alt={learnToNetwork.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <time
                dateTime="2026-10-14"
                className="font-mono text-xs font-bold tracking-widest text-neutral-50"
              >
                {learnToNetwork.dateLabel}
              </time>
              <h3 className="mt-5 font-sans text-2xl font-bold leading-snug tracking-tight">
                {learnToNetwork.name}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed">
                {learnToNetwork.blurb}
              </p>
              <Link
                href={learnToNetwork.href}
                className="mt-6 inline-block self-start rounded-none border border-neutral-50 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red hover:bg-red"
              >
                Recap
              </Link>
            </div>
          </article>

          <article className="relative flex flex-1 flex-col overflow-hidden rounded-none border border-navy bg-neutral-100">
            <div className="h-[4px] w-full bg-red" />
            <div className="relative h-40 shrink-0">
              <Image
                src={bakeSale.image}
                alt={bakeSale.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <time
                dateTime="2026-10-19"
                className="font-mono text-xs font-bold tracking-widest text-red"
              >
                {bakeSale.dateLabel}
              </time>
              <h3 className="mt-5 font-sans text-2xl font-bold leading-snug tracking-tight text-navy">
                {bakeSale.name}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-navy">
                {bakeSale.blurb}
              </p>
              <Link
                href={bakeSale.href}
                className="mt-6 inline-block self-start rounded-none border border-navy px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:border-red hover:text-red"
              >
                Recap
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
