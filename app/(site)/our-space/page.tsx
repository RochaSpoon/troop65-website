import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { NeedsPhoto, PageHero, Paragraphs, container, display } from "@/components/site";
import { getOurSpace } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our space",
  description: "Troop 65 has its own 2,500 square foot meeting space in Long Beach, with a room for each patrol, a chapel, a woodworking shop, and the Eagle Lair.",
};

export default async function OurSpacePage() {
  const page = await getOurSpace();
  return (
    <>
      <PageHero kicker="Our space" heading={page.heading} intro={page.intro} photo={page.heroImage} />
      {page.size && (
        <section aria-label="Size" className={`${container} pt-16 md:pt-24`}>
          <div className="flex flex-wrap items-end gap-x-8 gap-y-2 border-t-4 border-ink pt-8">
            <p className={`${display} numeral-outline-purple text-[96px] font-black md:text-[176px]`}>{page.size}</p>
            {page.sizeLabel && <p className="pb-4 font-public text-lg font-semibold text-muted">{page.sizeLabel}</p>}
          </div>
        </section>
      )}
      <div className={`${container} py-16 md:py-24`}>
        <ol>
          {(page.rooms ?? []).map((room, i) => (
            <li key={i} className="grid gap-6 border-t border-ink py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <div className="md:col-span-5">
                <span className="font-public text-[13px] font-bold uppercase tracking-[0.18em] text-purple">
                  Room {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={`${display} mt-2 text-[40px] font-extrabold md:text-[56px]`}>{room.name}</h2>
                <Paragraphs text={room.text} className="mt-4 max-w-[44ch] font-public text-lg leading-relaxed text-muted" />
              </div>
              <div className="relative aspect-[3/2] w-full md:col-span-7">
                {room.image?.src ? (
                  <Photo photo={room.image} sizes="(min-width: 768px) 55vw, 100vw" />
                ) : (
                  <NeedsPhoto label={room.name.toLowerCase()} />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
