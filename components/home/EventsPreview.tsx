import Image from "next/image";
import ParallaxMedia from "@/components/ui/ParallaxMedia";

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
              src="/events/deerfield-lecture.jpg"
              alt="TechTrack lecture in Deerfield Hall"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="rounded-none object-cover"
            />
          </ParallaxMedia>
          <div className="absolute inset-x-0 bottom-0 z-10 rounded-none bg-[#1A3A5C]/80 p-8 md:p-10">
            <time
              dateTime="2026-02-04"
              className="inline-block rounded-none border border-neutral-50 px-3 py-1 font-mono text-xs font-bold tracking-widest text-neutral-50"
            >
              04 FEB 2026
            </time>
            <h3 className="mt-6 font-sans text-3xl font-bold leading-tight tracking-tight text-neutral-50 md:text-4xl">
              TechTrack 2026
            </h3>
            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-neutral-50">
              Hosted by DEMA with ISACA Toronto Chapter, Seneca Polytechnic,
              Toronto Metropolitan University, and York University. Cybersecurity,
              cloud, analytics, and governance, with industry speakers and
              networking.
            </p>
          </div>
        </article>

        <div className="flex flex-col gap-8 lg:col-span-5 lg:h-full">
          <article className="flex flex-1 flex-col rounded-none border border-navy bg-[#1A3A5C] p-8 text-neutral-50">
            <time
              dateTime="2026-03-28"
              className="font-mono text-xs font-bold tracking-widest text-neutral-50"
            >
              28 MAR 2026
            </time>
            <h3 className="mt-5 font-sans text-2xl font-bold leading-snug tracking-tight">
              McMaster Marketing Summit
            </h3>
            <p className="mt-3 text-base font-light leading-relaxed">
              With the DeGroote Marketing Association. TED-style keynotes,
              workshops, and industry networking at McMaster&apos;s Peter George
              Centre, 9:00 AM to 3:00 PM. Merch, breakfast, and lunch included.
              Guided bussing from UTM. Registration closed 25 Mar.
            </p>
          </article>

          <article className="flex flex-1 flex-col rounded-none border border-navy bg-neutral-100">
            <div className="h-[4px] w-full bg-red" />
            <div className="flex flex-1 flex-col p-8">
              <time
                dateTime="2026-04-08"
                className="font-mono text-xs font-bold tracking-widest text-red"
              >
                08 APR 2026
              </time>
              <h3 className="mt-5 font-sans text-2xl font-bold leading-snug tracking-tight text-navy">
                DEM Case Competition
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-navy">
                CCT 2150, 10:00 AM to 4:00 PM. DEM students competed in teams of
                2 to 4. UTM community members attended as general audience.
                ICCIT students volunteered on logistics. Sign-up deadline was 25
                Mar.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
