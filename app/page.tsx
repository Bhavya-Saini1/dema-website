import ArticlesPreview from "@/components/home/ArticlesPreview";
import EventsPreview from "@/components/home/EventsPreview";
import JoinSection from "@/components/home/JoinSection";
import NextEvent from "@/components/home/NextEvent";
import { social } from "@/lib/social";

const MARQUEE_PHRASE = "BUSINESS • TECHNOLOGY • DESIGN • INNOVATION •";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  );
}

function WordmarkDivider() {
  return (
    <div className="flex w-full flex-col gap-[2px]" aria-hidden="true">
      <span className="block h-px w-full bg-navy" />
      <span className="block h-px w-full bg-navy" />
      <span className="block h-px w-full bg-navy" />
    </div>
  );
}

function MarqueeCopy() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: 8 }, (_, index) => (
        <span
          key={index}
          className="px-8 font-mono text-sm font-bold tracking-[0.28em] text-navy"
        >
          {MARQUEE_PHRASE}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-8">
          <header className="lg:col-span-7">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
              University of Toronto Mississauga
            </p>
            <h1 className="mt-6 font-sans text-[clamp(4.5rem,14vw,9rem)] font-light leading-[0.85] tracking-tight text-navy">
              DEMA
            </h1>
            <p className="mt-10 max-w-xl text-2xl font-bold leading-snug text-navy md:text-3xl">
              The student club for Digital Enterprise Management at UTM.
            </p>
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-neutral-600">
              Digital Enterprise Management Association is the student club for
              Digital Enterprise Management at UTM. In 2024, DEMA received the
              2023-2024 Club Excellence Award.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#join"
                className="rounded-none border border-red bg-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
              >
                Join the club
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="DEMA on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-navy bg-transparent text-navy transition-colors duration-150 hover:bg-navy hover:text-neutral-50"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="DEMA on LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-navy bg-transparent text-navy transition-colors duration-150 hover:bg-navy hover:text-neutral-50"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </header>

          <NextEvent />
        </div>
      </section>

      <WordmarkDivider />

      <div
        className="overflow-hidden py-6"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <MarqueeCopy />
          <MarqueeCopy />
        </div>
      </div>

      <section id="about" className="px-6 py-24 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <h2 className="font-sans text-5xl font-light leading-[0.9] tracking-tight text-navy md:text-6xl lg:col-span-5 lg:text-7xl">
            About the club
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base font-light leading-relaxed text-navy md:text-lg">
              DEMA bridges the gap between talented students and industry by
              providing opportunities across business, technology, design, and
              innovation. Members attend recruiting events, technical workshops,
              design reviews, and case competitions that put coursework next to
              professional practice at the University of Toronto Mississauga.
            </p>
            <a
              href="/team"
              className="mt-10 inline-block rounded-none border border-red bg-red px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:border-red-dark hover:bg-red-dark"
            >
              MEET THE TEAM
            </a>
          </div>
        </div>
      </section>

      <EventsPreview />

      <ArticlesPreview />

      <JoinSection />
    </main>
  );
}
