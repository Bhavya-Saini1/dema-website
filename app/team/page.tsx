import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  displayName,
  getDirectorTeam,
  getFeaturedTeam,
  initials,
  teamYear,
  type TeamMember,
} from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: `${teamYear} executive. Thirteen offices.`,
};

function MemberCard({
  member,
  large = false,
  priority = false,
}: {
  member: TeamMember;
  large?: boolean;
  priority?: boolean;
}) {
  const name = displayName(member);
  const nameClass = large
    ? "mt-3 font-sans text-2xl font-bold leading-none tracking-tight text-navy md:text-3xl"
    : "mt-3 font-sans text-xl font-bold leading-none tracking-tight text-navy";

  const content = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-navy/20 bg-neutral-100">
        {member.image ? (
          <Image
            src={member.image}
            alt=""
            fill
            priority={priority}
            className="object-cover"
            style={{ objectPosition: member.imagePosition ?? "center 20%" }}
            sizes={
              large
                ? "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                : "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
            }
          />
        ) : (
          <span className="flex h-full items-center justify-center font-sans text-4xl font-light text-navy/30">
            {initials(member)}
          </span>
        )}
      </div>
      <p className="mt-4 font-mono text-[0.65rem] font-bold uppercase leading-none tracking-[0.14em] text-red">
        {member.role}
        {member.note ? ` · ${member.note}` : ""}
      </p>
      <p className={nameClass}>{name}</p>
      {member.linkedin ? (
        <span className="mt-3 inline-block font-mono text-[0.65rem] font-bold uppercase leading-none tracking-[0.14em] text-navy transition-colors duration-150 group-hover:text-red">
          LinkedIn
        </span>
      ) : (
        <span className="mt-3 inline-block font-mono text-[0.65rem] font-bold uppercase leading-none tracking-[0.14em] text-neutral-400">
          TBA
        </span>
      )}
    </>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}

export default function TeamPage() {
  const featured = getFeaturedTeam();
  const directors = getDirectorTeam();

  return (
    <main>
      <section className="px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
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

          <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((member, index) => (
              <li key={member.id}>
                <MemberCard member={member} large priority={index < 3} />
              </li>
            ))}
          </ul>

          <ul className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-12">
            {directors.map((member) => (
              <li
                key={member.id}
                className="w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-6rem)/4)]"
              >
                <MemberCard member={member} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
