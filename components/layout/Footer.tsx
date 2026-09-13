import Link from "next/link";
import { social } from "@/lib/social";

const FOOTER_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/#events", label: "Events" },
  { href: "/#articles", label: "Articles" },
  { href: "/#join", label: "Join" },
] as const;

const SOCIAL_LINKS = [
  { href: social.instagram, label: "Instagram" },
  { href: social.linkedin, label: "LinkedIn" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-navy bg-navy text-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-12 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-sans text-3xl font-light tracking-tight md:text-4xl">
            DEMA
          </p>
          <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-neutral-300">
            Digital Enterprise Management Association. University of Toronto
            Mississauga.
          </p>
        </div>

        <nav
          className="lg:col-span-4 lg:col-start-7"
          aria-label="Footer"
        >
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-neutral-400">
            Site
          </p>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:text-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2 lg:col-start-11">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-neutral-400">
            Social
          </p>
          <ul className="mt-4 space-y-3">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:text-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-50/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-400">
            © {new Date().getFullYear()} DEMA
          </p>
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-400">
            UTM
          </p>
        </div>
      </div>
    </footer>
  );
}
