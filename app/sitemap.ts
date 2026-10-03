import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://t65.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/what-we-do", "/our-space", "/leadership", "/join", "/troop"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/join" ? 0.9 : 0.7,
  }));
}
