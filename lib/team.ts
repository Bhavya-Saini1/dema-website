export type TeamMember = {
  id: string;
  role: string;
  name: string | null;
  image: string | null;
  linkedin: string | null;
  featured?: boolean;
  note?: string;
};

export const teamYear = "2026-2027";

/** Names and LinkedIn URLs from linkedin.com/company/demassociation key executives and public profiles. Roles not listed there stay TBA. */
export const team: TeamMember[] = [
  {
    id: "president",
    role: "President",
    name: "Vaibhav Kaushal",
    image: null,
    linkedin: "https://www.linkedin.com/in/vaibhavkaushal24",
    featured: true,
  },
  {
    id: "vp-internal",
    role: "Vice President Internal",
    name: "Brayden Messier",
    image: null,
    linkedin: "https://www.linkedin.com/in/braydenmessier",
    featured: true,
  },
  {
    id: "vp-external",
    role: "Vice President External",
    name: "Allina Malik",
    image: null,
    linkedin: "https://www.linkedin.com/in/allina-malik-6318bb316",
    featured: true,
  },
  {
    id: "internal-events",
    role: "Internal Events Director",
    name: "Justin Prijadi",
    image: null,
    linkedin: "https://www.linkedin.com/in/justinprijadi",
  },
  {
    id: "external-events",
    role: "External Events Director",
    name: "Maryam Majid",
    image: null,
    linkedin: "https://www.linkedin.com/in/maryam-majid24",
  },
  {
    id: "finance-logistics",
    role: "Finance and Logistics Director",
    name: "Rama Aleikish",
    image: null,
    linkedin: "https://www.linkedin.com/in/ramaaleikish",
  },
  {
    id: "marketing",
    role: "Head of Marketing",
    name: "Avery Gaipo",
    image: null,
    linkedin: "https://www.linkedin.com/in/avery-gaipo-154628386/",
  },
  {
    id: "graphic-design",
    role: "Graphic Design Director",
    name: "Ray Hajj-kasem",
    image: null,
    linkedin: "https://www.linkedin.com/in/ray-hajj-kasem-53a8083b6",
  },
  {
    id: "pr-outreach",
    role: "PR and Outreach Director",
    name: "Betsy Ng",
    image: null,
    linkedin: "https://www.linkedin.com/in/ng-betsy",
  },
  {
    id: "research-innovation",
    role: "Research and Innovation Director",
    name: "Masooma Jaffry",
    image: null,
    linkedin: "https://www.linkedin.com/in/masooma-jaffry-4a56b7238",
  },
  {
    id: "web-development",
    role: "Web Development Director",
    name: "Bhavya Saini",
    image: null,
    linkedin: "https://www.linkedin.com/in/saini-bhavya",
  },
  {
    id: "human-resources",
    role: "Human Resources Director",
    name: "Paris Wood",
    image: null,
    linkedin: "https://www.linkedin.com/in/paris-wood-584a28289",
  },
  {
    id: "yec-co-chair-aamna",
    role: "YEC Co-Chair",
    name: "Aamna Saqib",
    image: null,
    linkedin: "https://www.linkedin.com/in/aamna-saqib",
  },
  {
    id: "yec-co-chair-jennifer",
    role: "YEC Co-Chair",
    name: "Jennifer Nguyen",
    image: null,
    linkedin: "https://www.linkedin.com/in/nguyenjennifer06",
  },
];

export function displayName(member: TeamMember) {
  return member.name ?? "Name TBA";
}

export function getFeaturedTeam() {
  return team.filter((member) => member.featured);
}

export function getDirectorTeam() {
  return team.filter((member) => !member.featured);
}
