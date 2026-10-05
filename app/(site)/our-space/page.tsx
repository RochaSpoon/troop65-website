import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { NeedsPhoto, Paragraphs, SectionMasthead, container, headline, label } from "@/components/site";
import { getOurSpace } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our space",
  description: "Troop 65 has its own 2,500 square foot meeting space in Long Beach, with a room for each patrol, a chapel, a woodworking shop, and the Eagle Lair.",
};

export default async function OurSpacePage() {
  const page = await getOurSpace();
  const rooms = page.rooms ?? [];
  return (
    <>
      <SectionMasthead section="Our space" heading={page.heading} intro={page.intro} />

      {page.size && (
        <div className={container}>
          <div className="rule-double flex flex-wrap items-baseline gap-x-6 border-b border-ink py-4">
            <span className={`${headline} text-[88px] text-purple md:text-[150px]`}>{page.size}</span>
            <span className="font-sans text-[16px] font-semibold text-muted">{page.sizeLabel}</span>
            <span className={`${label} ml-auto text-[11px]`}>{rooms.length} rooms in this guide</span>
          </div>
        </div>
      )}

      <div className={`${container} pb-20`}>
        <ol className="grid md:grid-cols-2">
          {rooms.map((room, i) => (
            <li key={i} className={`border-b border-ink py-10 ${i % 2 === 1 ? "md:border-l md:pl-10" : "md:pr-10"}`}>
              <div className="flex items-baseline gap-4">
                <span className={`${headline} text-[44px] text-purple`}>{String(i + 1).padStart(2, "0")}</span>
                <h2 className={`${headline} text-[32px] md:text-[40px]`}>{room.name}</h2>
              </div>
              <div className="relative mt-5 aspect-[3/2] w-full">
                {room.image?.src ? <Photo photo={room.image} sizes="(min-width: 768px) 45vw, 100vw" /> : <NeedsPhoto label={room.name.toLowerCase()} />}
              </div>
              <Paragraphs text={room.text} className="mt-4 text-[18px] leading-relaxed" />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
