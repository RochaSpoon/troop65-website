"use client";

import Image, { type ImageLoader } from "next/image";
import type { Photo as PhotoType } from "@/lib/types";

// Sanity's CDN resizes images itself, so those skip Vercel's image optimizer (keeps the site on the free plan).
const sanityLoader: ImageLoader = ({ src, width, quality }) =>
  `${src}?w=${width}&q=${quality ?? 75}&auto=format&fit=max`;

type Props = {
  photo: PhotoType;
  sizes: string;
  className?: string;
  preload?: boolean;
  /** Overrides the hotspot set in Studio. */
  position?: string;
};

/** Fills its parent, which must be positioned and sized. */
export function Photo({ photo, sizes, className = "", preload, position }: Props) {
  const fromSanity = photo.src.startsWith("https://cdn.sanity.io/");
  const objectPosition =
    position ?? (photo.hotspot ? `${Math.round(photo.hotspot.x * 100)}% ${Math.round(photo.hotspot.y * 100)}%` : undefined);
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      preload={preload}
      loader={fromSanity ? sanityLoader : undefined}
      className={`object-cover ${className}`}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
