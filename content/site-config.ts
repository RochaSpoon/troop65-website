/**
 * Core troop facts used across the site — meeting time, contact info,
 * chartering details. Sourced from t65.org (the troop's current site) as
 * of Aug 2026. Remaining `TODO`s are facts t65.org doesn't publish.
 */
export const siteConfig = {
  troopName: "Troop 65",
  fullName: "Boy Scout Troop 65",
  nickname: "The Purple Plague",
  city: "Long Beach",
  state: "CA",
  foundedYear: 1937,

  council: "Long Beach Area Council",
  district: "Iron Star District",
  // Implied by t65.org (troop meets there); confirm this is the actual charter org.
  charterOrg: "Lakewood Village Community Church",

  meeting: {
    // Troop meetings: 1st & 3rd Tuesdays, 7:30 PM (per t65.org)
    day: "1st & 3rd Tuesdays",
    time: "7:30 PM",
    locationName: "Lakewood Village Community Church",
    // TODO: t65.org doesn't publish a street address — confirm and add
    address: "Long Beach, CA",
    // TODO: replace with real embeddable Google Maps link (Share > Embed a map)
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.0!2d-118.2!3d33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
  },

  // Additional recurring meetings, shown on the members calendar page.
  otherMeetings: [
    { label: "Patrol Meetings", schedule: "1st & 3rd Tuesdays, 6:30 PM" },
    { label: "Troop Committee Meeting", schedule: "1st Tuesday, 6:30 PM" },
    { label: "Patrol Leaders' Council", schedule: "4th Tuesday, 7:00 PM" },
    { label: "Board of Review", schedule: "4th Tuesday, 6:30 PM" },
  ],

  contact: {
    // Real inbox, from t65.org's calendar sharing settings.
    email: "bsatroop65longbeach@t65.org",
    webmasterEmail: "scoutwebmaster@t65.org",
    // TODO: t65.org doesn't publish a troop phone number — confirm and add
    phone: "" as string,
  },

  social: {
    // TODO: add real links, or remove unused entries in components/layout/Footer.tsx
    facebook: "",
    instagram: "",
  },
} as const;
