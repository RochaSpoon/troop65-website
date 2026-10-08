import "server-only";
import seed from "@/content/seed.json";
import { client, SANITY_TAG } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import * as q from "@/sanity/queries";
import type {
  Announcement,
  HomePage,
  JoinPage,
  LeadershipPage,
  OurSpacePage,
  SectionsPage,
  Settings,
  TroopPage,
} from "./types";

/**
 * Reads published content from Sanity. Until a Sanity project is connected, or if a
 * page has not been created there yet, the starting content in content/seed.json is used.
 */
async function load<T>(query: string, fallback: unknown, params: Record<string, string> = {}): Promise<T> {
  if (!isSanityConfigured) return fallback as T;
  try {
    const data = await client.fetch<T | null>(query, params, { next: { revalidate: 3600, tags: [SANITY_TAG] } });
    return (data ?? fallback) as T;
  } catch (err) {
    console.error("Sanity fetch failed, using starting content", err);
    return fallback as T;
  }
}

export const getSettings = () => load<Settings>(q.settingsQuery, seed.settings);
export const getHome = () => load<HomePage>(q.homeQuery, seed.homePage);
export const getAbout = () => load<SectionsPage>(q.sectionsPageQuery, seed.aboutPage, { id: "aboutPage" });
export const getWhatWeDo = () => load<SectionsPage>(q.sectionsPageQuery, seed.whatWeDoPage, { id: "whatWeDoPage" });
export const getOurSpace = () => load<OurSpacePage>(q.ourSpaceQuery, seed.ourSpacePage);
export const getLeadership = () => load<LeadershipPage>(q.leadershipQuery, seed.leadershipPage);
export const getJoin = () => load<JoinPage>(q.joinQuery, seed.joinPage);
export const getTroop = () => load<TroopPage>(q.troopQuery, seed.troopPage);
export const getAnnouncements = () => load<Announcement[]>(q.announcementsQuery, seed.announcements);
