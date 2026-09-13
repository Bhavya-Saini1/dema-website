import type { Metadata } from "next";
import Link from "next/link";
import {
  displayName,
  getDirectorTeam,
  getFeaturedTeam,
  teamYear,
  type TeamMember,
} from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: `${teamYear} executive. Thirteen offices.`,
};

function MemberRow({
  member,
  large = false,
}: {
  member: TeamMember;
  large?: boolean;
}) {
  const name = displayName(member);
  const nameClass = large
    ? "font-sans text-2xl font-bold leading-none tracking-tight text-navy md:text-3xl"
    : "font-sans text-xl font-bold leading-none tracking-tight text-navy";

  const content = (
    <>
      <p className="font-mono text-[0.65rem] font-bold uppercase leading-none tracking-[0.14em] text-red lg:col-span-4">
        {member.role}
        {member.note ? ` · ${member.note}` : ""}
      </p>
      <p className={`lg:col-span-6 ${nameClass}`}>{name}</p>
      <div className="lg:col-span-2 lg:flex lg:justify-end">
        {member.linkedin ? (
          <span className="font-mono text-[0.65rem] font-bold uppercase leading-none tracking-[0.14em] text-navy transition-colors duration-150 group-hover:text-red">
            LinkedIn
          </span>
        ) : (
          <span className="font-mono text-[0.65rem] font-bold uppercase leading-none tracking-[0.14em] text-neutral-400">
            TBA
          </span>
        )}
      </div>
    </>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group grid grid-cols-1 gap-3 py-6 lg:grid-cols-12 lg:items-center lg:gap-8"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 py-6 lg:grid-cols-12 lg:items-center lg:gap-8">
      {content}
    </div>
  );
}

export default function TeamPage() {
  const featured = getFeaturedTeam();
  const directors = getDirectorTeam();

  return (
    <main>
      <section className="px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-12">
            <Link
              href="/#about"
              className="font-mono text-xs font-bold uppercase tracking-widest text-navy transition-colors duration-150 hover:text-red"
            >
              About
            </Link>
            <h1 className="mt-6 font-sans text-5xl font-light leading-[0.9] tracking-tight text-navy md:text-6xl lg:text-7xl">
              Meet the team
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-navy">
              {teamYear} executive. Thirteen offices.
            </p>
          </div>

          <ol className="lg:col-span-12">
            {featured.map((member) => (
              <li key={member.id} className="border-t border-navy/20">
                <MemberRow member={member} large />
              </li>
            ))}
            {directors.map((member) => (
              <li key={member.id} className="border-t border-navy/20">
                <MemberRow member={member} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
