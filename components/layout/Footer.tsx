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

function mainTitle() {
  const currentYear = new Date().getFullYear();
  const nextYearShort = String(currentYear + 1).slice(-2);
  return (
    <div className="flex flex-col lg:ml-2 lg:justify-center lg:items-center lg:text-center lg:items-start lg:text-left w-full h-full">
      <div className="flex flex-wrap items-baseline  lg:justify-start gap-x-3 gap-y-1">
        <p className="font-sans text-5xl font-semibold tracking-tight">
          DEMA
        </p>
        <p className="font-sans text-lg font-semibold text-neutral-100">
          X {currentYear}-{nextYearShort}
        </p>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-200">
          © {currentYear} DEMA UTM
        </p>
      </div>
      <div className="flex flex-wrap items-baseline mt-2 w-full "> 
        <p className="w-full text-sm text-left font-bold text-neutral-150 ">
          Digital Enterprise Management Association. University of Toronto Mississauga.
        </p>
      </div>
    </div>
  );
}

function siteMapLinks() {
  return (
    <nav
      className=" hidden lg:block lg:col-start-3   "
      aria-label="Footer"
    >
      <p className=" font-bold text-xl text-neutral-50">
        Site 
      </p>
      <ul className="mt-3 grid grid-cols-2  gap-y-4">
        {FOOTER_LINKS.map((link) => (
          <li key={link.href} className="flex">
            <Link
              href={link.href}
              className="inline-flex items-center text-center text-sm font-bold tracking-widest text-neutral-50 transition-transform duration-200 hover:-translate-y-1"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function socialMediaLinks() {
  return (
    <div className="pb-5 lg:ml-5 items-end lg:-ml-3">
      <p className="hidden font-bold text-xl uppercasetext-neutral-50 lg:block">
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
              className="inline-flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
            >
              {link.icon}
              <span className="hidden mt-1 font-bold text-neutral-100 lg:inline">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-transparent font-footer text-neutral-50">
      <div className="mx-4 my-4 rounded-[12px] bg-red lg:rounded-[24px]">
        <div className="mx-auto align-items:center grid max-w-7xl grid-cols-1 gap-6 px-6 pt-10 md:px-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-2 lg:px-16 lg:py-10">
          
          {mainTitle()}

          {siteMapLinks()}
  
          {socialMediaLinks()}

        </div>
      </div>
    </footer>
  );
}
