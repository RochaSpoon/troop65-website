import type { Metadata } from "next";
import { SectionsPage } from "@/components/SectionsPage";
import { getAbout } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Troop 65 has been a Boy Scout troop in Long Beach, California since 1937. How the troop and its four patrols work.",
};

export default async function AboutPage() {
  return <SectionsPage section="About" kind="article" page={await getAbout()} />;
}
