import { team, type DepartmentId } from "@/lib/team";

export const mission = {
  headline: "Students and industry, in the same room.",
  body: "DEMA bridges the gap between talented students and industry by providing opportunities across business, technology, design, and innovation. Members attend recruiting events, technical workshops, design reviews, and case competitions that put coursework next to professional practice at the University of Toronto Mississauga.",
  award: "Recipient of the 2023-2024 Club Excellence Award.",
};

/** Counts that are not known yet stay null and render as "TBA". */
export const clubStats: {
  generalMembers: number | null;
} = {
  // TODO: placeholder, replace with the real count from HR
  generalMembers: 50,
};

export type Department = {
  id: DepartmentId;
  name: string;
  description: string;
  /** Associate members on this team, not counting directors. */
  associates: number | null;
  /** Whether this team is taking associate applications. */
  hiring: boolean;
};

export const departments: Department[] = [
  {
    id: "presidential",
    name: "Presidential",
    description:
      "The President's office. Sets the yearly plan, runs executive meetings, and represents DEMA to UTM and partner clubs.",
    associates: 5,
    hiring: true,
  },
  {
    id: "vp-internal",
    name: "VP Internal",
    description:
      "Oversees the internal teams and keeps member-facing work on schedule.",
    associates: 1,
    hiring: true,
  },
  {
    id: "vp-external",
    name: "VP External",
    description:
      "Oversees the outward-facing teams and relationships with partners and sponsors.",
    associates: 0,
    hiring: true,
  },
  {
    id: "internal-events",
    name: "Internal Events",
    description:
      "Workshops, socials, and case competitions for DEMA members.",
    associates: 3,
    hiring: true,
  },
  {
    id: "external-events",
    name: "External Events",
    description:
      "Industry nights, panels, and events run with outside partners.",
    associates: 0,
    hiring: true,
  },
  {
    id: "finance-logistics",
    name: "Finance and Logistics",
    description:
      "Budgets, sponsorship funds, room bookings, and supplies for every event the club runs.",
    associates: 6,
    hiring: true,
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Instagram, LinkedIn, and campus promotion. Plans what goes out and when for every event and article.",
    associates: 9,
    hiring: true,
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description:
      "Posters, social graphics, and event visuals. Keeps the DEMA visual identity consistent across everything the club publishes.",
    associates: 2,
    hiring: true,
  },
  {
    id: "pr-outreach",
    name: "PR and Outreach",
    description:
      "Contacts with companies, alumni, and other clubs. Finds speakers, sponsors, and collaboration partners.",
    associates: 1,
    hiring: true,
  },
  {
    id: "research-innovation",
    name: "Research and Innovation",
    description:
      "Writes and edits the DEMAlogue newsletter and articles on business and technology topics.",
    associates: 4,
    hiring: true,
  },
  {
    id: "web-development",
    name: "Web Development",
    description:
      "Builds and maintains this website, including event pages, articles, and membership sign-up.",
    associates: 4,
    hiring: true,
  },
  {
    id: "human-resources",
    name: "Human Resources",
    description:
      "Associate hiring, onboarding, and member records. Keeps track of who is on each team.",
    associates: 1,
    hiring: true,
  },
  {
    id: "yec",
    name: "YEC",
    // TODO: confirm YEC description with the co-chairs
    description: "Led by two co-chairs. Description coming soon.",
    // Not in the associate roster
    associates: 0,
    hiring: false,
  },
];

export function getDepartmentLeads(id: DepartmentId) {
  return team.filter((member) => member.department === id);
}

export function getTotalMembers(): number | null {
  const associates = getAssociateCount();
  if (associates === null || clubStats.generalMembers === null) return null;
  return team.length + associates + clubStats.generalMembers;
}

export function getAssociateCount(): number | null {
  const counts = departments.map((department) => department.associates);
  if (counts.some((count) => count === null)) return null;
  return counts.reduce<number>((sum, count) => sum + (count ?? 0), 0);
}
