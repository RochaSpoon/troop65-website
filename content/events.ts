import { TroopEvent } from "@/lib/types";

/**
 * Upcoming and recent troop events. This is the file your webmaster
 * updates most often — add a new object to the array for each event.
 *
 * - Set `isPast: false` for anything upcoming (shows on Activities page + homepage).
 * - Flip to `isPast: true` once it happens and it becomes a recap card.
 * - `image.src` points at a placehold.co stand-in — swap for a real photo
 *   in /public/images/activities/ and update the path.
 */
export const events: TroopEvent[] = [
  {
    slug: "fall-kickoff-joshua-tree",
    title: "Fall Kickoff Campout — Joshua Tree",
    date: "2026-09-11",
    endDate: "2026-09-13",
    category: "campout",
    location: "Joshua Tree National Park, CA",
    summary:
      "First campout of the new program year. New Scouts learn the ropes (literally) alongside older patrols on a beginner-friendly weekend of hiking, knot review, and stargazing.",
    isPast: false,
    image: {
      src: "https://placehold.co/1600x1000/2b0b3d/e8cc84.png?text=Photo%3A+Joshua+Tree+campout",
      alt: "TODO: replace with a real photo of Scouts at the Joshua Tree campout",
    },
  },
  {
    slug: "shoreline-cleanup",
    title: "Long Beach Shoreline Cleanup",
    date: "2026-08-22",
    category: "service",
    location: "Long Beach Shoreline, Long Beach, CA",
    summary:
      "A half-day service project along our own coastline. Open to any Scout, sibling, or parent who wants to see what Troop 65 service days look like before joining.",
    isPast: false,
    image: {
      src: "https://placehold.co/1600x1000/2b0b3d/e8cc84.png?text=Photo%3A+Beach+cleanup+service+project",
      alt: "TODO: replace with a real photo of Scouts doing the shoreline cleanup",
    },
  },
  {
    slug: "fall-court-of-honor",
    title: "Fall Court of Honor",
    date: "2026-10-06",
    category: "ceremony",
    location: "Regular meeting location",
    summary:
      "Rank advancements, merit badges, and leadership recognition in front of the whole troop and families. Open house for prospective families — come see what a real troop meeting feels like.",
    isPast: false,
    image: {
      src: "https://placehold.co/1600x1000/2b0b3d/e8cc84.png?text=Photo%3A+Court+of+Honor",
      alt: "TODO: replace with a real photo from a Court of Honor ceremony",
    },
  },
  {
    slug: "catalina-sea-trek",
    title: "High Adventure: Catalina Sea Trek",
    date: "2026-11-14",
    endDate: "2026-11-16",
    category: "high-adventure",
    location: "Catalina Island, CA",
    summary:
      "Older Scouts (Star rank and up) kayak and camp along Catalina's backcountry coastline — one of the higher-adventure trips patrols vote for each year.",
    isPast: false,
    image: {
      src: "https://placehold.co/1600x1000/2b0b3d/e8cc84.png?text=Photo%3A+Catalina+Island+kayaking",
      alt: "TODO: replace with a real photo from the Catalina high-adventure trip",
    },
  },
  {
    slug: "summer-camp-2026",
    title: "Summer Camp Week",
    date: "2026-06-21",
    endDate: "2026-06-27",
    category: "campout",
    location: "Council Summer Camp",
    summary:
      "A full week away — merit badges, swim tests, the infamous polar bear swim, and the closest thing to a rite of passage this troop has. Scouts came home with 60+ merit badges earned between them.",
    isPast: true,
    image: {
      src: "https://placehold.co/1600x1000/610081/faf6ef.png?text=Photo%3A+Summer+camp+recap",
      alt: "TODO: replace with a real recap photo from summer camp 2026",
    },
  },
  {
    slug: "angeles-forest-trek",
    title: "Angeles National Forest Backpacking Trek",
    date: "2026-05-02",
    endDate: "2026-05-03",
    category: "high-adventure",
    location: "Angeles National Forest, CA",
    summary:
      "A 12-mile backpacking loop planned and led entirely by the Venture patrol — adults came along to observe, not to run it. That's what boy-led actually looks like on the trail.",
    isPast: true,
    image: {
      src: "https://placehold.co/1600x1000/610081/faf6ef.png?text=Photo%3A+Backpacking+trek+recap",
      alt: "TODO: replace with a real recap photo from the Angeles National Forest trek",
    },
  },
  {
    slug: "eagle-project-park-restoration",
    title: "Eagle Project: Park Trail Restoration",
    date: "2026-04-18",
    category: "service",
    location: "Long Beach, CA",
    summary:
      "A troop turnout to support a Scout's Eagle project — rebuilding an eroded trail section at a local park. Over 90 combined volunteer hours logged in a single Saturday.",
    isPast: true,
    image: {
      src: "https://placehold.co/1600x1000/610081/faf6ef.png?text=Photo%3A+Eagle+project+recap",
      alt: "TODO: replace with a real recap photo from the Eagle service project",
    },
  },
];

export const upcomingEvents = events.filter((event) => !event.isPast);
export const pastEvents = events.filter((event) => event.isPast);
