import Image from "next/image";
import { mission } from "@/lib/about";
import { teamYear } from "@/lib/team";

export default function MissionHero() {
  return (
    <section className="px-6 pb-16 pt-28 md:px-12 lg:px-16 lg:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
        <header className="lg:col-span-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
            About DEMA, {teamYear}
          </p>
          <h1 className="mt-6 font-sans text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.9] tracking-tight text-navy">
            {mission.headline}
          </h1>
          <p className="mt-10 max-w-xl text-lg font-light leading-relaxed text-navy">
            {mission.body}
          </p>
          <p className="mt-6 text-lg font-bold text-navy">{mission.award}</p>
        </header>

        <figure className="relative lg:col-span-6 lg:translate-y-12">
          <div
            className="absolute -left-4 -top-4 hidden h-full w-full border border-red lg:block"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-navy/20 bg-neutral-100">
            <Image
              src="/team/group-photo.jpg"
              alt="The DEMA executive team"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-500">
            The {teamYear} executive team
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
