import Image from "next/image";
import { displayName, initials, type TeamMember } from "@/lib/team";

export default function MemberCard({
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
        {member.note ? `, ${member.note}` : ""}
      </p>
      <p className={nameClass}>{name}</p>
      {member.linkedin ? (
        <span className="mt-3 inline-block font-mono text-[0.65rem] font-bold uppercase leading-none tracking-[0.14em] text-navy transition-colors duration-150 group-hover:text-red">
          LinkedIn
        </span>
      ) : null}
    </>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}
