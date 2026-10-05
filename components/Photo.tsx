"use client";

import Image, { type ImageLoader } from "next/image";
import type { Photo as PhotoType } from "@/lib/types";

// Sanity's CDN resizes images itself, so those skip Vercel's image optimizer (keeps the site on the free plan).
const sanityLoader: ImageLoader = ({ src, width, quality }) =>
  `${src}?w=${width}&q=${quality ?? 75}&auto=format&fit=max`;

/** Width and height from Sanity, or read from a Sanity file name like "-1494x2048.jpg". */
function dimensions(photo: PhotoType) {
  if (photo.w && photo.h) return { w: photo.w, h: photo.h };
  const m = photo.src.match(/-(\d+)x(\d+)\.\w+$/);
  return m ? { w: Number(m[1]), h: Number(m[2]) } : null;
}

type Props = {
  photo: PhotoType;
  sizes: string;
  className?: string;
  preload?: boolean;
  /** Overrides the hotspot set in Studio. */
  position?: string;
  /** Show the whole photo at its own shape instead of cropping it to fill a box. */
  whole?: boolean;
};

/** By default fills its parent, which must be positioned and sized. With `whole`, sizes itself. */
export function Photo({ photo, sizes, className = "", preload, position, whole }: Props) {
  const fromSanity = photo.src.startsWith("https://cdn.sanity.io/");
  const loader = fromSanity ? sanityLoader : undefined;
  const dims = whole ? dimensions(photo) : null;

  if (whole && dims) {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        width={dims.w}
        height={dims.h}
        sizes={sizes}
        preload={preload}
        loader={loader}
        className={`h-auto w-full ${className}`}
      />
    );
  }

  const objectPosition =
    position ?? (photo.hotspot ? `${Math.round(photo.hotspot.x * 100)}% ${Math.round(photo.hotspot.y * 100)}%` : undefined);
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      preload={preload}
      loader={loader}
      className={`${whole ? "object-contain" : "object-cover"} ${className}`}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
