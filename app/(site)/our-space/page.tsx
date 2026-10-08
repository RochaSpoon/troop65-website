import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { Figure, NeedsPhoto, PageHeader, Paragraphs, container, heading } from "@/components/site";
import { getOurSpace } from "@/lib/content";
import type { Room } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our space",
  description: "Troop 65 has its own 2,500 square foot meeting space in Long Beach, with a room for each patrol, a woodworking shop, and the Eagle Lair.",
};

const slug = (name: string) =>
  name
    .toLowerCase()
    .replace(/^the\s+/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function photoCount(room: Room) {
  const n = new Set([room.image?.src, ...(room.gallery ?? []).map((p) => p?.src)].filter(Boolean)).size;
  return n === 1 ? "1 photo" : n > 1 ? `${n} photos` : "";
}

export default async function OurSpacePage() {
  const page = await getOurSpace();
  const rooms = page.rooms ?? [];
  return (
    <>
      <PageHeader eyebrow="Our space" title={page.heading} intro={page.intro} />
      {page.size && (
        <div className={container}>
          <p className="flex flex-wrap items-baseline gap-x-5 border-y-2 border-ink py-5">
            <span className={`${heading} text-[64px] text-purple md:text-[112px]`}>{page.size}</span>
            <span className="text-[18px] font-semibold text-muted">{page.sizeLabel}</span>
          </p>
        </div>
      )}

      {/* Each room is its own section. Tap a room to open it. */}
      <div className={`${container} py-14 md:py-20`}>
        <p className="mb-4 text-[15px] font-semibold text-muted">
          {rooms.length} rooms. Tap one to open it.
        </p>
        <div className="border-t-2 border-ink">
          {rooms.map((room, i) => {
            const count = photoCount(room);
            const gallery = room.gallery?.filter((p) => p?.src) ?? [];
            return (
              <details key={i} id={slug(room.name)} className="group scroll-mt-24 border-b border-line">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 md:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="w-8 shrink-0 font-board text-[20px] font-bold tracking-[0.06em] text-purple">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`${heading} block text-[26px] group-hover:text-purple md:text-[36px]`}>{room.name}</span>
                    {count && <span className="mt-1 block text-[15px] text-muted">{count}</span>}
                  </span>
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink text-[22px] font-bold leading-none transition-colors group-open:bg-ink group-open:text-white"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">&minus;</span>
                  </span>
                </summary>

                <div className="pb-12 md:pl-12">
                  <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-5">
                      <Paragraphs text={room.text} className="max-w-[48ch] text-[18px] leading-relaxed text-muted" />
                      {gallery.length > 0 && (
                        <p className="mt-4 max-w-[48ch] text-[15px] text-muted">Tap a photo to see it full size.</p>
                      )}
                    </div>
                    <div className="md:col-span-7">
                      {room.image?.src ? (
                        <Figure photo={room.image} sizes="(min-width: 768px) 55vw, 100vw" whole className="mx-auto max-w-[560px]" />
                      ) : (
                        <div className="aspect-[3/2]">
                          <NeedsPhoto label={room.name.toLowerCase()} />
                        </div>
                      )}
                    </div>
                  </div>

                  {gallery.length > 0 && (
                    <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
                      {gallery.map((p, j) => (
                        <li key={j}>
                          <a href={p.src} target="_blank" rel="noopener noreferrer" className="block rounded-[14px] focus-visible:outline-offset-4">
                            <span className="block overflow-hidden rounded-[14px] bg-white">
                              <Photo photo={p} sizes="(min-width: 1024px) 270px, (min-width: 640px) 30vw, 45vw" whole />
                            </span>
                            <span className="mt-2 block text-[14px] leading-snug text-muted">{p.alt}</span>
                            <span className="sr-only">(opens full size in a new tab)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </>
  );
}
