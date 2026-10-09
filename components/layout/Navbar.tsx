"use client";

import Image from "next/image";
import { social } from "@/lib/social";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { PiListBold } from "react-icons/pi";

const NAV_ITEMS = [
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#articles", label: "Articles" },
  { href: "/team", label: "Team" },
  { href: "/#join", label: "Join" },
  { label: "Instagram", href: social.instagram },
  { label: "Linked In", href: social.linkedin },
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
    <header className="sticky top-0 z-50">
      {Nav()}
    </header>
  );
}


function Nav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const activeLabel = pathname.startsWith("/team")
    ? "Team"
    : pathname.startsWith("/events")
      ? "Events"
      : pathname.startsWith("/articles")
        ? "Articles"
        : pathname === "/"
          ? NAV_ITEMS.find((item) => item.href === `/${hash}`)?.label ?? "About"
          : null;

  return (
    <nav className="group fixed left-4 top-4 z-50">
      <div
        className="
          relative 
          h-14 w-32
          overflow-hidden
          rounded-3xl
          bg-red
          transition-all
          duration-200 ease-in-out
          group-hover:h-96
          group-hover:w-72
        "
      >

        <div className="mt-3 ml-3 flex items-center gap-2">
          <div
            className="
              flex items-center justify-center
              text-neutral-50
              relative left-1
              opacity-100
              transition-all duration-200 ease-in-out
              group-hover:opacity-0
              group-hover:scale-75
            "
          >
            <Image src="/dema-logo-white.svg" alt="DEMA" width={32} height={32} />
          </div>

          <div
            className="
              flex size-8
              items-center justify-center
              text-white
              opacity-100
              transition-all duration-200 ease-in-out
              group-hover:opacity-0
              group-hover:scale-75
            "
          >
            <PiListBold
              className="
                relative left-6 size-full
                transition-transform duration-200 ease-in-out
                group-hover:rotate-90
              "
              color="white"
            />
          </div>
        </div>

        {/* Navigation links */}
        <div
          className="
            ml-5
            flex flex-col gap-2.5
            opacity-0 
            transition-opacity duration-200 ease-in-out
            group-hover:opacity-100
          "
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.label === activeLabel ? "page" : undefined}
              className={[
                "inline-flex items-center gap-2 whitespace-nowrap",
                "font-sans font-bold",
                "text-3xl font-normal leading-[1]",
                "text-neutral-50 no-underline",
                "transition-transform duration-200 ease-in-out",
                "hover:translate-x-1",
                item.label === "Join" ? "py-3" : "",
              ].join(" ")}
            >
              {item.label}
              {item.label === activeLabel ? (
                <Image
                  src="/header-cross.svg"
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
