"use client";

import { useState } from "react";
import DepartmentStack from "@/components/about/DepartmentStack";
import MemberScale, { MemberScaleLegend } from "@/components/about/MemberScale";
import { departments } from "@/lib/about";
import type { DepartmentId } from "@/lib/team";

export default function ClubStructure() {
  const [active, setActive] = useState<DepartmentId | null>(null);
  const activeName = departments.find((department) => department.id === active)?.name;

  return (
    <section className="border-y border-navy/20 bg-neutral-100 px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <header>
                <h2 className="font-sans text-5xl font-light leading-[0.9] tracking-tight text-navy md:text-6xl">
                  Everyone in the club
                </h2>
                <p className="mt-6 max-w-md text-base font-light leading-relaxed text-navy">
                  Each square is one member. Scroll through our{" "}
                  {departments.length} departments to see who runs each one and
                  how many people work on it.
                </p>
              </header>
              <div className="mt-10">
                <MemberScale activeDepartment={active} />
              </div>
              <p
                className="mt-4 h-6 font-mono text-sm font-bold text-red"
                aria-live="polite"
              >
                {activeName ?? ""}
              </p>
              <div className="mt-6">
                <MemberScaleLegend />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <DepartmentStack onActiveChange={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
}
