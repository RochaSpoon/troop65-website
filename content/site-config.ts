/**
 * Core troop facts used across the site — meeting time, contact info,
 * chartering details. This is the first file to edit before launch.
 * Every `TODO` below is a real fact only someone in the troop can confirm.
 */
export const siteConfig = {
  troopName: "Troop 65",
  fullName: "Boy Scout Troop 65",
  nickname: "The Purple Plague",
  city: "Long Beach",
  state: "CA",
  foundedYear: 1937,

  // TODO: confirm current chartering council (e.g. Greater Los Angeles Area Council)
  council: "Greater Los Angeles Area Council",
  // TODO: confirm chartering organization
  charterOrg: "[Chartering Organization Name]",

  meeting: {
    day: "Tuesday",
    time: "7:00 – 8:30 PM",
    // TODO: confirm meeting location name + address
    locationName: "[Meeting Location Name]",
    address: "[Street Address], Long Beach, CA 90802",
    // TODO: replace with real embeddable Google Maps link (Share > Embed a map)
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.0!2d-118.2!3d33.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
  },

  contact: {
    // TODO: replace with a real troop inbox
    email: "info@troop65longbeach.org",
    // TODO: replace with a real contact number
    phone: "(562) 555-0165",
  },

  social: {
    // TODO: add real links, or remove unused entries in components/layout/Footer.tsx
    facebook: "",
    instagram: "",
  },
} as const;
