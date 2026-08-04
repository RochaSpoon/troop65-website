import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pins the build root so Turbopack doesn't try to walk up to
  // C:\Users\water (which has an unrelated stray package-lock.json).
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // placehold.co serves the stand-in photography referenced throughout
    // /content — swap those URLs for real troop photos in public/images/
    // and this entry can be removed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
