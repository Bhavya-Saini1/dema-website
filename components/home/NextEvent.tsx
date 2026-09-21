import Image from "next/image";
import Link from "next/link";
import EventCountdown from "@/components/home/EventCountdown";
import ParallaxMedia from "@/components/ui/ParallaxMedia";
import { nextEvent } from "@/lib/next-event";

export default function NextEvent() {
  return (
    <aside className="lg:col-span-5 lg:col-start-8 lg:-ml-4">
      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-red">
        Next event
      </p>

      <div className="relative mt-3">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-2 translate-y-2 rounded-none bg-red"
        />
        <ParallaxMedia className="clip-chevron-tr relative rounded-none border border-navy">
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

      <div className="relative z-10 -mt-6 mr-4 border border-navy bg-neutral-50 p-4 md:mr-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <time
            dateTime={nextEvent.startsAt}
            className="font-mono text-xs font-bold tracking-widest text-navy"
          >
            {nextEvent.dateLabel}
          </time>
          <EventCountdown
            startsAt={nextEvent.startsAt}
            dateLabel={nextEvent.dateLabel}
            timeLabel={nextEvent.timeLabel}
            compact
          />
        </div>
        <h2 className="mt-3 font-sans text-xl font-bold leading-tight tracking-tight text-navy md:text-2xl">
          {nextEvent.name}
        </h2>
        <p className="mt-1 text-sm font-light text-navy">
          {nextEvent.place} · {nextEvent.timeLabel}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={nextEvent.rsvpHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-none border border-red bg-red px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
          >
            RSVP
          </a>
          <Link
            href={nextEvent.href}
            className="inline-block rounded-none border border-navy px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:border-red hover:text-red"
          >
            Details
          </Link>
        </div>
      </div>
    </aside>
  );
}
