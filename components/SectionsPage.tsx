import type { SectionsPage as SectionsPageType } from "@/lib/types";
import { Figure, PageHeader, Paragraphs, container, heading } from "./site";

export function SectionsPage({ eyebrow, page }: { eyebrow: string; page: SectionsPageType }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={page.heading} intro={page.intro} />
      {page.heroImage?.src && (
        <div className={container}>
          <Figure photo={page.heroImage} sizes="(min-width: 1240px) 1160px, 100vw" aspect="aspect-[4/3] md:aspect-[21/9]" preload />
        </div>
      )}
      <div className={`${container} pb-20 pt-6`}>
        {(page.sections ?? []).map((s, i) => {
          const photos = (s.images ?? []).filter((p) => p?.src);
          return (
            <section key={i} className="grid gap-6 border-t border-line pt-10 mt-14 md:grid-cols-12 md:gap-12">
              <h2 className={`${heading} text-[32px] md:col-span-4 md:text-[44px]`}>
                <span className="md:sticky md:top-28 md:block">{s.heading}</span>
              </h2>
              <div className="md:col-span-8">
                <Paragraphs text={s.text} className="max-w-[62ch] text-[19px] leading-relaxed" />
                {!!photos.length && (
                  // Whole photos in a masonry layout, so nothing gets cropped.
                  <div className={`mt-8 gap-4 ${photos.length === 1 ? "" : photos.length === 2 ? "columns-2" : "columns-2 lg:columns-3"}`}>
                    {photos.map((p, j) => (
                      <Figure
                        key={j}
                        photo={p}
                        whole
                        caption
                        sizes={photos.length === 1 ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 1024px) 22vw, 45vw"}
                        className="mb-4 break-inside-avoid"
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
