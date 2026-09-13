"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#articles", label: "Articles" },
  { href: "/#join", label: "Join" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-red-dark bg-red">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 md:px-12 lg:px-16"
        aria-label="Primary"
      >
        <Link
          href="/#top"
          className="flex h-full shrink-0 items-center text-neutral-50 transition-colors duration-150 hover:text-navy"
          onClick={() => setOpen(false)}
        >
          <Logo invert />
        </Link>

        <ul className="hidden items-center gap-x-8 sm:flex">
          {NAV_LINKS.map((link) => (
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

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-neutral-50 transition-colors duration-150 hover:text-navy sm:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex h-3.5 w-5 flex-col justify-between" aria-hidden="true">
            <span
              className={`block h-0.5 w-full bg-current transition-transform duration-150 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-150 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-transform duration-150 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div id={menuId} className="border-t border-red-dark sm:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-50 transition-colors duration-150 hover:text-navy"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
