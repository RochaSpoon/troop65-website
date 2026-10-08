import { defineQuery } from "next-sanity";

const photo = `{ "src": asset->url, alt, hotspot, "w": asset->metadata.dimensions.width, "h": asset->metadata.dimensions.height }`;

export const settingsQuery = defineQuery(`*[_id == "settings"][0]`);

export const homeQuery = defineQuery(`*[_id == "homePage"][0]{
  ...,
  bannerImage${photo},
  heroImage${photo},
  tuesdayImage${photo},
  lairImage${photo},
  spaceImage${photo},
  trips[]{ ..., image${photo} }
}`);

export const sectionsPageQuery = defineQuery(`*[_id == $id][0]{
  ...,
  heroImage${photo},
  sections[]{ ..., images[]${photo} }
}`);

export const ourSpaceQuery = defineQuery(`*[_id == "ourSpacePage"][0]{
  ...,
  heroImage${photo},
  rooms[]{ ..., image${photo} }
}`);

export const leadershipQuery = defineQuery(`*[_id == "leadershipPage"][0]{
  ...,
  officers[]{ ..., photo${photo} }
}`);

export const joinQuery = defineQuery(`*[_id == "joinPage"][0]{ ..., heroImage${photo} }`);

export const troopQuery = defineQuery(`*[_id == "troopPage"][0]`);

export const announcementsQuery = defineQuery(
  `*[_type == "announcement"] | order(coalesce(date, _createdAt) desc, _createdAt desc)`,
);
