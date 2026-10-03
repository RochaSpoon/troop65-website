import type { Metadata } from "next";
import { SectionsPage } from "@/components/SectionsPage";
import { getWhatWeDo } from "@/lib/content";

export const metadata: Metadata = {
  title: "What we do",
  description: "Campouts, summer camp, camporees, service, and advancement with Boy Scout Troop 65 in Long Beach.",
};

export default async function WhatWeDoPage() {
  return <SectionsPage kicker="What we do" page={await getWhatWeDo()} />;
}
