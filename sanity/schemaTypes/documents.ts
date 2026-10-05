import { defineArrayMember, defineField, defineType } from "sanity";

const heading = defineField({ name: "heading", title: "Page heading", type: "string", validation: (r) => r.required() });
const intro = defineField({ name: "intro", title: "Intro paragraph", type: "text", rows: 4 });
const heroImage = defineField({ name: "heroImage", title: "Top photo", type: "photo" });
const sections = defineField({
  name: "sections",
  title: "Sections",
  description: "Drag sections to change their order.",
  type: "array",
  of: [defineArrayMember({ type: "textSection" })],
});

export const settings = defineType({
  name: "settings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "visitFormUrl", title: "Visit a meeting form", description: "The Google Form the yellow button opens.", type: "url", validation: (r) => r.required() }),
    defineField({ name: "meetingDays", title: "Meeting days", type: "string", validation: (r) => r.required() }),
    defineField({ name: "meetingTime", title: "Meeting time", type: "string", validation: (r) => r.required() }),
    defineField({ name: "meetingPlace", title: "Where we meet", type: "string", validation: (r) => r.required() }),
    defineField({ name: "meetingAddress", title: "Street address", type: "string", validation: (r) => r.required() }),
    defineField({ name: "emailListUrl", title: "Email list sign-up link", type: "url" }),
    defineField({ name: "beAScoutUrl", title: "BeAScout link", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  groups: [
    { name: "top", title: "Top", default: true },
    { name: "numbers", title: "Numbers" },
    { name: "tuesday", title: "Tuesday night" },
    { name: "outdoors", title: "Outdoors" },
    { name: "lair", title: "Eagle Lair" },
    { name: "space", title: "Our space" },
    { name: "join", title: "Visit" },
  ],
  fields: [
    defineField({ name: "heroKicker", title: "Small line above the heading", type: "string", group: "top" }),
    defineField({ name: "heroHeading", title: "Big heading", type: "string", group: "top", validation: (r) => r.required() }),
    defineField({ name: "heroText", title: "Text under the heading", type: "text", rows: 3, group: "top" }),
    defineField({
      name: "boardLines",
      title: "Letter board",
      description: "The lines on the purple letter board at the top. One short line per box, about 22 letters max. Start a line with * to make it gold.",
      type: "array",
      of: [defineArrayMember({ type: "string", validation: (r) => r.max(28) })],
      group: "top",
      validation: (r) => r.max(7),
    }),
    defineField({ name: "heroImage", title: "Big top photo", description: "A wide group photo works best.", type: "photo", group: "top", validation: (r) => r.required() }),
    defineField({ name: "facts", title: "Numbers", type: "array", of: [defineArrayMember({ type: "fact" })], group: "numbers", validation: (r) => r.max(4) }),
    defineField({ name: "tuesdayHeading", title: "Heading", type: "string", group: "tuesday" }),
    defineField({ name: "tuesdayText", title: "Text", type: "text", rows: 3, group: "tuesday" }),
    defineField({ name: "tuesdayImage", title: "Photo", type: "photo", group: "tuesday" }),
    defineField({ name: "schedule", title: "Schedule", type: "array", of: [defineArrayMember({ type: "scheduleItem" })], group: "tuesday" }),
    defineField({ name: "tuesdayNote", title: "Line under the schedule", type: "string", group: "tuesday" }),
    defineField({ name: "outdoorsHeading", title: "Heading", type: "string", group: "outdoors" }),
    defineField({ name: "outdoorsText", title: "Text", type: "text", rows: 3, group: "outdoors" }),
    defineField({ name: "trips", title: "Trips", description: "The first trip gets the big photo. Three trips fit best.", type: "array", of: [defineArrayMember({ type: "trip" })], group: "outdoors", validation: (r) => r.max(3) }),
    defineField({ name: "lairKicker", title: "Small line above the heading", type: "string", group: "lair" }),
    defineField({ name: "lairHeading", title: "Heading", type: "string", group: "lair" }),
    defineField({ name: "lairText", title: "Text", type: "text", rows: 4, group: "lair" }),
    defineField({ name: "lairImage", title: "Photo", type: "photo", group: "lair" }),
    defineField({ name: "spaceHeading", title: "Heading", type: "string", group: "space" }),
    defineField({ name: "spaceImage", title: "Photo", type: "photo", group: "space" }),
    defineField({ name: "joinHeading", title: "Heading", type: "string", group: "join" }),
    defineField({ name: "joinText", title: "Text", type: "text", rows: 3, group: "join" }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [heading, intro, heroImage, sections],
  preview: { prepare: () => ({ title: "About page" }) },
});

export const whatWeDoPage = defineType({
  name: "whatWeDoPage",
  title: "What we do page",
  type: "document",
  fields: [heading, intro, heroImage, sections],
  preview: { prepare: () => ({ title: "What we do page" }) },
});

export const ourSpacePage = defineType({
  name: "ourSpacePage",
  title: "Our space page",
  type: "document",
  fields: [
    heading,
    intro,
    heroImage,
    defineField({ name: "size", title: "Big number", type: "string", description: 'Like "2,500".' }),
    defineField({ name: "sizeLabel", title: "Under the big number", type: "string" }),
    defineField({ name: "rooms", title: "Rooms", description: "Drag rooms to change their order.", type: "array", of: [defineArrayMember({ type: "room" })] }),
  ],
  preview: { prepare: () => ({ title: "Our space page" }) },
});

export const leadershipPage = defineType({
  name: "leadershipPage",
  title: "Leadership page",
  type: "document",
  fields: [
    heading,
    intro,
    defineField({
      name: "officers",
      title: "Troop officers",
      description: "Add, remove, or drag officers into the order you want them shown.",
      type: "array",
      of: [defineArrayMember({ type: "officer" })],
    }),
  ],
  preview: { prepare: () => ({ title: "Leadership page" }) },
});

export const joinPage = defineType({
  name: "joinPage",
  title: "Join page",
  type: "document",
  fields: [
    heading,
    intro,
    heroImage,
    defineField({ name: "steps", title: "Your first visit, step by step", type: "array", of: [defineArrayMember({ type: "step" })] }),
    defineField({ name: "whoCanJoin", title: "Who can join", type: "text", rows: 3 }),
    defineField({ name: "whatToBring", title: "What to wear and bring", type: "text", rows: 3 }),
    defineField({ name: "cost", title: "Cost", type: "text", rows: 3 }),
    defineField({ name: "signUpText", title: "How to sign up", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Join page" }) },
});

export const troopPage = defineType({
  name: "troopPage",
  title: "Troop page",
  type: "document",
  fields: [
    heading,
    intro,
    defineField({
      name: "calendarEmbedUrl",
      title: "Google Calendar embed link",
      description: "From Google Calendar: Settings, pick the calendar, Integrate calendar, copy the Embed code link (the part in quotes after src=).",
      type: "url",
    }),
    defineField({ name: "linkGroups", title: "Links", description: "Groups of links. Drag to reorder.", type: "array", of: [defineArrayMember({ type: "linkGroup" })] }),
    defineField({ name: "documents", title: "Forms and documents", type: "array", of: [defineArrayMember({ type: "docLink" })] }),
  ],
  preview: { prepare: () => ({ title: "Troop page" }) },
});

export const announcement = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Headline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date posted", type: "date", initialValue: () => new Date().toISOString().slice(0, 10) }),
    defineField({ name: "body", title: "Message", type: "text", rows: 5, validation: (r) => r.required() }),
    defineField({ name: "linkLabel", title: "Button text (optional)", type: "string" }),
    defineField({ name: "linkUrl", title: "Button link (optional)", type: "url" }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date" } },
});
