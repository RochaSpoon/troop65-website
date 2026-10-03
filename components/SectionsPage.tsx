import type { SectionsPage as SectionsPageType, TextSection } from "@/lib/types";
import { Photo } from "./Photo";
import { PageHero, Paragraphs, container, display } from "./site";

function Gallery({ images }: { images: NonNullable<TextSection["images"]> }) {
  const [first, ...rest] = images.filter((i) => i?.src);
  if (!first) return null;
  return (
    <div className="mt-10 space-y-2">
      <div className="relative aspect-[3/2] w-full">
        <Photo photo={first} sizes="(min-width: 768px) 60vw, 100vw" />
      </div>
      {!!rest.length && (
        <div className={`grid gap-2 ${rest.length === 1 ? "grid-cols-1" : rest.length === 2 || rest.length === 4 ? "grid-cols-2" : rest.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-3"}`}>
          {rest.map((img, i) => (
            <div key={i} className={`relative ${rest.length === 1 ? "aspect-[3/2]" : "aspect-square"}`}>
              <Photo photo={img} sizes="(min-width: 768px) 30vw, 50vw" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SectionsPage({ kicker, page }: { kicker: string; page: SectionsPageType }) {
  return (
    <>
      <PageHero kicker={kicker} heading={page.heading} intro={page.intro} photo={page.heroImage} />
      <div className={`${container} py-16 md:py-24`}>
        {(page.sections ?? []).map((s, i) => (
          <section key={i} className="grid gap-6 border-t-4 border-ink py-12 md:grid-cols-12 md:gap-10 md:py-16">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <span className={`${display} numeral-outline-purple block text-[56px] font-black md:text-[80px]`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className={`${display} mt-2 text-[36px] font-extrabold md:text-[48px]`}>{s.heading}</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <Paragraphs text={s.text} className="max-w-[62ch] font-public text-lg leading-relaxed" />
              {!!s.images?.length && <Gallery images={s.images} />}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
