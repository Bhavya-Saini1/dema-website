import Link from "next/link";
import { social } from "@/lib/social";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FOOTER_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/#events", label: "Events" },
  { href: "/#articles", label: "Articles" },
  { href: "/#join", label: "Join" },
] as const;

const SOCIAL_LINKS = [
  { href: social.instagram, label: "Instagram", icon: <FaInstagram size={30} /> },
  { href: social.linkedin, label: "LinkedIn", icon: <FaLinkedinIn size={30} /> },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const nextYearShort = String(currentYear + 1).slice(-2);
  return (
    <footer className="bg-transparent text-neutral-50">
      <div className="mx-4 my-4 rounded-[12px] bg-red lg:rounded-[24px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pt-10 pb-1 md:px-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-2 lg:px-16 lg:py-20">
          
          {/* Row 1, Col 1-6: Brand Title & Copyright Metadata */}
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <div className="flex items-baseline gap-x-3 gap-y-1 flex-wrap">
              <p className="font-sans text-5xl font-semibold tracking-tight">
                DEMA
              </p>
              <p className="font-sans text-lg font-semibold text-neutral-100">
                X {currentYear}-{nextYearShort}
              </p>
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-200">
                © {currentYear} DEMA UTM
              </p>
            </div>
          </div>

          {/* Row 2, Col 1-6: Description */}
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:-mt-12"> 
            <p className="max-w-sm text-sm font-bold leading-relaxed text-neutral-200">
              Digital Enterprise Management Association. University of Toronto Mississauga.
            </p>
          </div>

          {/* Row 1 & 2, Col 7-10: Site Map Links */}
          <nav
            className=" hidden lg:block lg:col-span-4 lg:col-start-7 lg:row-span-2 lg:row-start-1"
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
                    className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Row 1 & 2, Col 11-12: Social Media Icons */}
          <div className="lg:col-span-2 lg:col-start-11 lg:row-span-2 pb-5 lg:row-start-1">
            <p className="hidden font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-neutral-400 lg:block">
              Socials
            </p>
            <ul className="mt-2 flex gap-5 lg:mt-4 lg:flex-col lg:gap-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex items-center justify-center p-1 text-neutral-50 transition-colors duration-150 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
