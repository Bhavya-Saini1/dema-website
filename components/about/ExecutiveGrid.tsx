import MemberCard from "@/components/about/MemberCard";
import { departments } from "@/lib/about";
import { getDirectorTeam, getFeaturedTeam, teamYear } from "@/lib/team";

export default function ExecutiveGrid() {
  const [president, ...vps] = getFeaturedTeam();
  const directors = getDirectorTeam();
  const orderedDirectors = departments.flatMap((department) =>
    directors.filter((member) => member.department === department.id),
  );

  return (
    <section id="team" className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-sans text-5xl font-light leading-[0.9] tracking-tight text-navy md:text-6xl lg:text-7xl">
          The {teamYear} executive
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {president ? (
            <div className="sm:col-span-2 lg:col-span-5">
              <MemberCard member={president} large priority />
            </div>
          ) : null}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:col-span-2 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:mt-32">
            {vps.map((member) => (
              <MemberCard key={member.id} member={member} large />
            ))}
          </div>
        </div>

        <h3 className="mt-24 border-t border-navy/20 pt-10 text-2xl font-bold text-navy">
          Directors
        </h3>
        <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {orderedDirectors.map((member) => (
            <li key={member.id}>
              <MemberCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
