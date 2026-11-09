import { social } from "@/lib/social";

export type UpcomingEvent = {
  slug: string;
  href: string;
  name: string;
  startsAt: string;
  dateLabel: string;
  weekdayLabel: string;
  timeLabel: string;
  place: string;
  roomHint: string;
  image: string;
  imageAlt: string;
  blurb: string;
  rsvpHref: string;
};

export const demSoiree = {
  slug: "dem-soiree",
  href: "/events/dem-soiree",
  name: "DEM Soirée",
  startsAt: "2026-09-30T19:00:00-04:00",
  dateLabel: "30 SEP 2026",
  weekdayLabel: "Wednesday",
  timeLabel: "7:00 PM",
  place: "The Blind Duck",
  roomHint: "UTM Student Centre",
  image: "/events/dem-soiree/crowd.jpg",
  imageAlt:
    "Students and guests networking at The Blind Duck under the 2026 Annual DEMA Soirée projection",
  blurb:
    "More than 120 students, alumni, and industry guests opened DEMA's 2026–2027 year at The Blind Duck.",
  surveyHref: "https://forms.gle/iNW7PdPXzqwYFpAd8",
  partnerHref: "https://cmpus.ai/",
} as const;

export const learnToNetwork = {
  slug: "learn-to-network",
  href: "/events/learn-to-network",
  name: "Learn to Network",
  startsAt: "2026-10-14T18:00:00-04:00",
  dateLabel: "14 OCT 2026",
  weekdayLabel: "Wednesday",
  timeLabel: "6:00 PM – 7:30 PM",
  place: "DV 3140",
  roomHint: "William G. Davis Building, UTM",
  image: "/events/learn-to-network/group.jpg",
  imageAlt:
    "Students and the DEMA team after Learn to Network with the UTM Career Centre",
  blurb:
    "A little networking goes a long way. DEMA x UTM Career Centre with Lucille Yi.",
} as const;

export const bakeSale = {
  slug: "bake-sale",
  href: "/events/bake-sale",
  name: "Sweet Connections",
  startsAt: "2026-10-19T11:00:00-04:00",
  endsAt: "2026-10-21T16:00:00-04:00",
  dateLabel: "19–21 OCT 2026",
  weekdayLabel: "Monday–Wednesday",
  timeLabel: "11:00 AM – 4:00 PM",
  place: "Outside the UTMSU",
  roomHint: "UTM Student Centre",
  image: "/events/bake-sale/group.jpg",
  imageAlt:
    "DEMA team at the Sweet Connections bake sale table outside the UTMSU",
  blurb:
    "We made some sweet connections. Krispy Kreme outside the UTMSU, October 19–21.",
} as const;

export const redBullWingsClub = {
  slug: "red-bull-wings-club",
  href: "/events/red-bull-wings-club",
  name: "DEMA x Red Bull x EA Sports",
  startsAt: "2026-11-10T16:30:00-05:00",
  dateLabel: "10 NOV 2026",
  weekdayLabel: "Tuesday",
  timeLabel: "4:30 PM – 9:00 PM",
  place: "Presentation Room",
  roomHint: "UTM Student Centre",
  image: "/events/red-bull-wings-club/poster.jpg",
  imageAlt:
    "Red Bull Wings Cup promotional poster for DEMA x EA Sports FC 27 at UTM",
  blurb:
    "Red Bull Wings Club comes to UTM. Compete in EA SPORTS FC 27 for a shot at the Canadian Finals. Music by Nick Souza.",
  rsvpHref:
    "https://redbull.com/ca-en/events/red-bull-wings-cup-canada-2026/red-bull-wings-cup-university-league?checkin=01a146b9-4240-760a-99f6-dd66f8d2e96a",
} as const satisfies UpcomingEvent;

export const yecWorkshop = {
  slug: "yec-workshop",
  href: "/events/yec-workshop",
  name: "YEC Workshop: From Problems to Products",
  startsAt: "2026-11-12T18:30:00-05:00",
  dateLabel: "12 NOV 2026",
  weekdayLabel: "Thursday",
  timeLabel: "6:30 PM – 9:00 PM",
  place: "MN 1210",
  roomHint: "University of Toronto Mississauga",
  image: "/events/yec-workshop/poster.jpg",
  imageAlt:
    "YEC Workshop I From Problems to Products promotional poster",
  blurb:
    "Workshop 01 with industry guests from CIBC, Tangerine, and more. Fintech insights, customer needs, and turning ideas into products.",
  rsvpHref: social.instagram,
} as const satisfies UpcomingEvent;

export const cmlCaseCompetition = {
  slug: "cml-case-competition",
  href: "/events/cml-case-competition",
  name: "DEMA x CML Case Competition",
  startsAt: "2026-11-18T17:00:00-05:00",
  dateLabel: "18 NOV 2026",
  weekdayLabel: "Tuesday",
  timeLabel: "5:00 PM – 7:00 PM",
  place: "CC 2150",
  roomHint: "University of Toronto Mississauga",
  image: "/events/cml-case-competition/poster.jpg",
  imageAlt:
    "DEMA x CML Case Competition promotional poster with city skyline",
  blurb:
    "Marketing case competition with the Canadian Marketing League. Cash prize and a coffee chat with industry connections for first place.",
  rsvpHref: social.instagram,
} as const satisfies UpcomingEvent;

export const upcomingEvents: readonly UpcomingEvent[] = [
  redBullWingsClub,
  yecWorkshop,
  cmlCaseCompetition,
];

export function getNextEvent(now = Date.now()): UpcomingEvent | null {
  return (
    upcomingEvents.find((event) => new Date(event.startsAt).getTime() > now) ??
    null
  );
}
