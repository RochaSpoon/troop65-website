import { QuickStat } from "@/lib/types";
import { siteConfig } from "./site-config";

const currentYear = new Date().getFullYear();

/**
 * Homepage quick stats. Sourced from t65.org + troop leadership as of Aug 2026.
 */
export const quickStats: QuickStat[] = [
  {
    label: "Years Active",
    value: String(currentYear - siteConfig.foundedYear),
    detail: `Chartered ${siteConfig.foundedYear}`,
  },
  {
    label: "Active Scouts",
    value: "40",
  },
  {
    label: "Eagle Scouts",
    value: "200+",
    detail: `Since ${siteConfig.foundedYear}`,
  },
  {
    label: "Patrols",
    value: "4",
    detail: "Sabertooths, Eagles, Diamondbacks, Flaming Falcons",
  },
];
