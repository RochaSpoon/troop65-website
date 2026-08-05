import { AdultLeader, YouthPosition } from "@/lib/types";

/**
 * Adult leaders — t65.org gates these behind a Google Doc link rather than
 * publishing them on the page itself, so names below are still placeholders.
 * Replace with real names/roles/photos once you have them.
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
  {
    // Real name, from t65.org's Troop Officers page (Aug 2026).
    name: "David Mariaca",
    role: "Recruitment Advisor",
    bio: "Leads outreach to prospective families and Webelos-age Scouts — the person behind this website. TODO: expand bio.",
    photo: {
      src: "https://placehold.co/480x480/610081/faf6ef.png?text=Photo",
      alt: "TODO: replace with a headshot of the Recruitment Advisor",
    },
  },
];

/**
 * Youth leadership — real names and titles, sourced from t65.org's Troop
 * Officers page as of Aug 2026. These rotate roughly every 6 months
 * (SPL/ASPL) or at patrol elections — update here when they change.
 */
export const youthPositions: YouthPosition[] = [
  {
    title: "Senior Patrol Leader",
    name: "Maxwell Worley",
    reportsTo: "Scoutmaster",
    description:
      "Elected by the whole troop. Runs troop meetings, sets the agenda, and represents the Scouts to the adult leadership.",
  },
  {
    title: "Assistant Senior Patrol Leader",
    name: "Mason Worley",
    reportsTo: "Senior Patrol Leader",
    description: "Steps in for the SPL and oversees the troop's Patrol Leaders.",
  },
  {
    title: "Patrol Leaders' Council",
    reportsTo: "Senior Patrol Leader",
    description:
      "The troop's actual decision-making body — SPL, ASPL, and every Patrol Leader below. Plans every campout, activity, and program element. Adults advise; they don't vote.",
  },
  {
    title: "Quartermaster",
    name: "Neil Truitt",
    reportsTo: "Senior Patrol Leader",
    description: "Keeps troop gear organized and ready for every outing.",
  },
  {
    title: "Scribe",
    name: "Tobias Yi",
    reportsTo: "Senior Patrol Leader",
    description: "Keeps meeting and troop records.",
  },
  {
    title: "Troop Instructors",
    name: "Luke Price & Jacob Arnoult",
    reportsTo: "Senior Patrol Leader",
    description: "Teach Scout skills to younger Scouts working toward rank advancement.",
  },
  {
    title: "Webmaster",
    name: "Elijah Donaldson",
    reportsTo: "Senior Patrol Leader",
    description: "Maintains the troop's digital presence and communications.",
  },
  {
    title: "Historian",
    name: "Thomas Truitt",
    reportsTo: "Senior Patrol Leader",
    description: "Keeps the troop's records and the Eagle Lair archive current.",
  },
  {
    title: "Librarian",
    name: "Samuel Gonzalez",
    reportsTo: "Senior Patrol Leader",
    description: "Manages the troop's merit badge and reference library.",
  },
  {
    title: "Chaplain Aid",
    name: "Jack Hackert",
    reportsTo: "Senior Patrol Leader",
    description: "Supports the troop's spiritual life and Scout Sunday observances.",
  },
];
