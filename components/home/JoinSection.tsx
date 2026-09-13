import { membership } from "@/lib/membership";
import { social } from "@/lib/social";

export default function JoinSection() {
  return (
    <section id="join" className="px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-x-8">
        <h2 className="font-sans text-5xl font-light leading-[0.9] tracking-tight text-navy md:text-6xl lg:col-span-12 lg:text-7xl">
          Join
        </h2>
        <p className="max-w-xl text-lg font-light leading-relaxed text-navy lg:col-span-8">
          Students in any program. Two forms.
        </p>

        <div className="border-t border-navy/20 pt-8 lg:col-span-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-red">
                Open
              </p>
              <h3 className="mt-3 font-sans text-3xl font-bold leading-snug text-navy md:text-4xl">
                General membership
              </h3>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-navy">
                No selection process. Fill the form and you are on the list for
                events, workshops, and Industry Night.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end lg:pb-1">
              <a
                href={membership.generalHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-none border border-red bg-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
              >
                Application
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy/20 pt-8 lg:col-span-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-neutral-500">
                Closed
              </p>
              <h3 className="mt-3 font-sans text-3xl font-bold leading-snug text-navy md:text-4xl">
                Associate
              </h3>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-navy">
                Hiring for the 2026-2027 team. This form is closed. Watch{" "}
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-navy underline decoration-navy/30 underline-offset-2 transition-colors duration-150 hover:text-red hover:decoration-red"
                >
                  Instagram
                </a>{" "}
                and{" "}
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-navy underline decoration-navy/30 underline-offset-2 transition-colors duration-150 hover:text-red hover:decoration-red"
                >
                  LinkedIn
                </a>{" "}
                for the next round.
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end lg:pb-1">
              <span
                aria-disabled="true"
                className="inline-block rounded-none border border-navy/30 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-500"
              >
                Applications closed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
