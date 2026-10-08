import { membership } from "@/lib/membership";

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
  hiringHref: membership.associateHref,
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
  image: "/events/learn-to-network/session.jpg",
  imageAlt: "Lucille Yi presenting Learn to Network to a room of UTM students",
  blurb:
    "DEMA x UTM Career Centre. An interactive networking session with Lucille Yi. Open to all UTM students. Seats are limited.",
  rsvpHref:
    "https://docs.google.com/forms/d/e/1FAIpQLSeMqeUNKkVBgy2li2cmwHRNop-u3LAtpTzwUpgtEiMvEoRveA/viewform",
} as const;

export const nextEvent = learnToNetwork;
