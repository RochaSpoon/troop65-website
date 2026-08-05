import { TroopEvent } from "@/lib/types";

/**
 * Upcoming and recent troop events. Add a new object for each event; set
 * `isPast: false` for anything upcoming, flip to `true` once it happens.
 *
 * As of Aug 2026, sourced from t65.org + troop leadership. A few dates
 * below are inferred/approximate (marked TODO) — t65.org doesn't publish
 * exact dates for everything. Camp Baker dates are inferred from photo
 * timestamps (Pixel photos from Jul 3–5, 2026).
 */
export const events: TroopEvent[] = [
  {
    slug: "fall-court-of-honor",
    title: "Fall Court of Honor",
    // TODO: t65.org lists this as "September, undetermined time" — confirm exact date
    date: "2026-09-15",
    category: "ceremony",
    location: "Lakewood Village Community Church",
    summary:
      "Rank advancements and merit badge awards recognized in front of the whole troop and families. Open house for prospective families.",
    isPast: false,
    image: {
      src: "https://placehold.co/1600x1000/2b0b3d/e8cc84.png?text=Photo%3A+Court+of+Honor",
      alt: "TODO: replace with a real photo from a Court of Honor ceremony",
    },
  },
  {
    slug: "summer-camp-baker-2026",
    title: "Summer Camp — Camp Baker, Oregon",
    // Inferred from photo timestamps (Pixel photos dated Jul 3 & Jul 5, 2026) — confirm exact dates
    date: "2026-06-29",
    endDate: "2026-07-05",
    category: "campout",
    location: "BSA Camp Baker, Oregon",
    summary:
      "A full week at Camp Baker — archery, a campfire every night, and a side trip to the Oregon Dunes that ended with the troop flag planted on top of one. Scouts traveled up by Amtrak.",
    isPast: true,
    image: {
      src: "/images/activities/camp-baker-2026/camp-baker-01.jpg",
      alt: "A Troop 65 Scout receiving an award at the flag ceremony under the Camp Baker sign",
    },
  },
  {
    slug: "chino-hills-pre-summer-camp",
    title: "Pre-Summer Camp — Chino Hills State Park",
    // TODO: t65.org doesn't give an exact date — confirm (occurred before Camp Baker, so likely June 2026)
    date: "2026-06-06",
    category: "campout",
    location: "Chino Hills State Park, CA",
    summary:
      "A warm-up campout ahead of summer camp — Three-Flags-Up, baseball, and hiking to get new Scouts ready for a full week away.",
    isPast: true,
    image: {
      src: "https://placehold.co/1600x1000/610081/faf6ef.png?text=Photo%3A+Chino+Hills+pre-summer+camp",
      alt: "TODO: replace with a real photo from the Chino Hills pre-summer camp",
    },
  },
  {
    slug: "firestone-camporee-2026",
    title: "Firestone Scout Reservation Camporee",
    // TODO: t65.org doesn't give an exact date — confirm (district camporees are typically spring)
    date: "2026-04-25",
    category: "campout",
    location: "Firestone Scout Reservation",
    summary:
      "The annual Iron Star District camporee — friendly inter-troop competition, with a strong showing from our newest Scouts.",
    isPast: true,
    image: {
      src: "https://placehold.co/1600x1000/610081/faf6ef.png?text=Photo%3A+Firestone+Camporee",
      alt: "TODO: replace with a real photo from the Firestone Scout Reservation camporee",
    },
  },
];

export const upcomingEvents = events.filter((event) => !event.isPast);
export const pastEvents = events.filter((event) => event.isPast);
