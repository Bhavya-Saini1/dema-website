
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { learnToNetwork } from "@/lib/next-event";

export default function EventsPage() {
  const featuredEvent = learnToNetwork;

  return (
    <main>
      {/* Events heading */}
      <section className="bg-navy px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">    
          <h1
          className="font-sans text-4xl font-bold md:text-6xl"
          style={{ color: "#FFFFFF" }}
          >
            Events
          </h1>
        </div>
      </section>

      {/* Featured Event */}
      <section className="px-6 py-12 md:px-12 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-8 font-sans text-2xl font-bold text-navy md:text-3xl">
            Featured Event
          </h2>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">

            {/* Event image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-navy">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
            />
            </div>

            {/* Event information */}
            <div className="flex flex-col items-start">

              <h3 className="font-sans text-3xl font-bold text-navy md:text-4xl">
                {featuredEvent.name}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Join DEMA for professional development,
                networking, and opportunities to connect
                with the UTM community.
              </p>

              {/* Date, time and location */}
              <div className="mt-6 flex flex-col gap-3 text-navy">

                <div className="flex items-center gap-3">
                  <CalendarDays size={20} />
                  <span>{featuredEvent.dateLabel}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={20} />
                  <span>{featuredEvent.timeLabel}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>{featuredEvent.place}</span>
                </div>

              </div>

              {/* Event details */}
              <Link
                href={featuredEvent.href}
                className="mt-8 inline-block rounded-full bg-navy px-7 py-3 font-mono text-sm font-bold transition-colors hover:bg-red"
                style={{ color: "#FFFFFF" }}
              >
                View event →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
