import { QuickStat } from "@/lib/types";
import { siteConfig } from "./site-config";

const currentYear = new Date().getFullYear();

/**
 * Homepage "quick stats" strip. These are placeholder numbers — swap in
 * real figures before launch (ask your Committee Chair / advancement
 * coordinator for exact counts).
 */
export const quickStats: QuickStat[] = [
  {
    label: "Years Active",
    value: String(currentYear - siteConfig.foundedYear),
    detail: `Chartered ${siteConfig.foundedYear}`,
  },
  {
    // TODO: confirm current active roster size
    label: "Active Scouts",
    value: "30+",
  },
  {
    // TODO: confirm lifetime Eagle Scout count
    label: "Eagle Scouts",
    value: "120+",
    detail: `Since ${siteConfig.foundedYear}`,
  },
  {
    // TODO: confirm outings/events per year
    label: "Outings Per Year",
    value: "12+",
    detail: "Camping, service, high adventure",
  },
];
