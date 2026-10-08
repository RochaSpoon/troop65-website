import { defineArrayMember, defineField, defineType } from "sanity";

/** Every photo on the site. The description is required so screen readers can read it. */
export const photo = defineType({
  name: "photo",
  title: "Photo",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Describe the photo",
      description: 'Say what is in the picture, for people who can\'t see it. Example: "Scouts carrying a canoe down to the lake."',
      type: "string",
      validation: (r) => r.required().error("Please describe the photo."),
    }),
  ],
});

export const fact = defineType({
  name: "fact",
  title: "Number",
  type: "object",
  fields: [
    defineField({ name: "number", title: "Big number", type: "string", description: 'Short, like "1937" or "200+".', validation: (r) => r.required().max(6) }),
    defineField({ name: "label", title: "What it means", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "number", subtitle: "label" } },
});

export const scheduleItem = defineType({
  name: "scheduleItem",
  title: "Time slot",
  type: "object",
  fields: [
    defineField({ name: "time", title: "Time", type: "string", description: 'Like "6:30".', validation: (r) => r.required() }),
    defineField({ name: "title", title: "What happens", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", title: "One more sentence", type: "string" }),
  ],
  preview: { select: { title: "time", subtitle: "title" } },
});

export const trip = defineType({
  name: "trip",
  title: "Trip",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Place or event", type: "string", validation: (r) => r.required() }),
    defineField({ name: "year", title: "Year", type: "string", validation: (r) => r.required() }),
    defineField({ name: "note", title: "Short label", type: "string", description: 'Like "Summer camp".' }),
    defineField({ name: "image", title: "Photo", type: "photo", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "name", subtitle: "year", media: "image" } },
});

export const textSection = defineType({
  name: "textSection",
  title: "Section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 8,
      description: "Leave an empty line between paragraphs.",
    }),
    defineField({
      name: "images",
      title: "Photos",
      description: "Add as many as you like. Drag to change the order.",
      type: "array",
      of: [defineArrayMember({ type: "photo" })],
      options: { layout: "grid" },
    }),
  ],
  preview: { select: { title: "heading", media: "images.0" } },
});

export const room = defineType({
  name: "room",
  title: "Room",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Room name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", title: "About this room", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Photo", type: "photo", description: "Leave empty and the site shows a photo-needed box." }),
    defineField({
      name: "gallery",
      title: "More photos",
      type: "array",
      of: [{ type: "photo" }],
      options: { layout: "grid" },
      description: "Extra photos shown when someone opens this room, like the Eagle Lair panels. Drag to change the order.",
    }),
  ],
  preview: { select: { title: "name", media: "image" } },
});

export const officer = defineType({
  name: "officer",
  title: "Officer",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "position", title: "Position", type: "string", description: 'Like "Senior Patrol Leader".', validation: (r) => r.required() }),
    defineField({ name: "photo", title: "Photo", type: "photo", description: "A square photo works best. Leave empty if you don't have one yet." }),
  ],
  preview: { select: { title: "name", subtitle: "position", media: "photo" } },
});

export const step = defineType({
  name: "step",
  title: "Step",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "heading", subtitle: "text" } },
});

export const linkItem = defineType({
  name: "linkItem",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Link text", type: "string", validation: (r) => r.required() }),
    defineField({ name: "url", title: "Web address", type: "url", description: "Starts with https://", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "label", subtitle: "url" } },
});

export const linkGroup = defineType({
  name: "linkGroup",
  title: "Link group",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Group name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "links", title: "Links", type: "array", of: [defineArrayMember({ type: "linkItem" })] }),
  ],
  preview: { select: { title: "title", links: "links" }, prepare: ({ title, links }) => ({ title, subtitle: `${links?.length ?? 0} links` }) },
});

export const docLink = defineType({
  name: "docLink",
  title: "Form or document",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "note", title: "One line about it", type: "string" }),
    defineField({ name: "url", title: "Web address", type: "url", description: "Paste the Google Form, Doc, or Sheet link.", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "label", subtitle: "note" } },
});
