import { AdultLeader, YouthPosition } from "@/lib/types";

/**
 * Adult leaders — these are public-facing (Scoutmasters typically are),
 * so use real names once you have them. Replace every [Name] placeholder
 * and swap the placehold.co photo for a real headshot.
 */
export const adultLeaders: AdultLeader[] = [
  {
    name: "[Scoutmaster Name]",
    role: "Scoutmaster",
    bio: "TODO: 1-2 sentence bio — years with the troop, background, why they volunteer.",
    photo: {
      src: "https://placehold.co/480x480/610081/faf6ef.png?text=Photo",
      alt: "TODO: replace with a headshot of the Scoutmaster",
    },
  },
  {
    name: "[Committee Chair Name]",
    role: "Committee Chair",
    bio: "TODO: 1-2 sentence bio.",
    photo: {
      src: "https://placehold.co/480x480/610081/faf6ef.png?text=Photo",
      alt: "TODO: replace with a headshot of the Committee Chair",
    },
  },
  {
    name: "[Assistant Scoutmaster Name]",
    role: "Assistant Scoutmaster, Outdoor Program",
    bio: "TODO: 1-2 sentence bio.",
    photo: {
      src: "https://placehold.co/480x480/610081/faf6ef.png?text=Photo",
      alt: "TODO: replace with a headshot of the Assistant Scoutmaster",
    },
  },
];

/**
 * Youth leadership structure — described by role, not name. Positions
 * rotate every 6 months (SPL/PLC) or per patrol, so listing names here
 * would go stale fast and isn't necessary to show real structure.
 */
export const youthPositions: YouthPosition[] = [
  {
    title: "Senior Patrol Leader (SPL)",
    reportsTo: "Scoutmaster",
    description:
      "Elected by the whole troop every six months. Runs troop meetings, sets the agenda, and represents the Scouts to the adult leadership.",
  },
  {
    title: "Assistant Senior Patrol Leader (ASPL)",
    reportsTo: "Senior Patrol Leader",
    description:
      "Steps in for the SPL, oversees Patrol Leaders, and usually runs the training program for younger Scouts.",
  },
  {
    title: "Patrol Leaders' Council (PLC)",
    reportsTo: "Senior Patrol Leader",
    description:
      "The troop's actual decision-making body — SPL, ASPL, Patrol Leaders, and senior youth positions. Plans every campout, activity, and program element. Adults advise; they don't vote.",
  },
  {
    title: "Patrol Leader",
    reportsTo: "PLC",
    description:
      "Elected by each patrol (6-8 Scouts). Runs patrol meetings, represents the patrol in PLC, and is the first line of leadership every Scout experiences.",
  },
  {
    title: "Troop Guide, Quartermaster, Scribe & other roles",
    reportsTo: "Senior Patrol Leader",
    description:
      "Rotating youth positions covering new-Scout mentorship, gear, records, and more — every Scout holds a leadership position on the way to First Class and beyond.",
  },
];
