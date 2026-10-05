import type { Metadata } from "next";
import { Figure, NeedsPhoto, PageHeader, Paragraphs, container, heading } from "@/components/site";
import { getOurSpace } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our space",
  description: "Troop 65 has its own 2,500 square foot meeting space in Long Beach, with a room for each patrol, a chapel, a woodworking shop, and the Eagle Lair.",
};

export default async function OurSpacePage() {
  const page = await getOurSpace();
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
      <div className={`${container} grid gap-x-10 gap-y-14 py-16 md:grid-cols-2 md:py-20`}>
        {(page.rooms ?? []).map((room, i) => (
          <article key={i}>
            {room.image?.src ? (
              <Figure photo={room.image} sizes="(min-width: 768px) 45vw, 100vw" whole />
            ) : (
              <div className="aspect-[3/2]">
                <NeedsPhoto label={room.name.toLowerCase()} />
              </div>
            )}
            <h2 className={`${heading} mt-5 text-[28px] md:text-[36px]`}>{room.name}</h2>
            <Paragraphs text={room.text} className="mt-2 text-[18px] leading-relaxed text-muted" />
          </article>
        ))}
      </div>
    </>
  );
}
