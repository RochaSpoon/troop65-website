import type { Photo as PhotoType, SectionsPage as SectionsPageType } from "@/lib/types";
import { Figure, Paragraphs, SectionMasthead, container, headline, label } from "./site";

/** A row of photos with captions, laid out like a newspaper photo spread. */
function Spread({ photos }: { photos: PhotoType[] }) {
  const cols = photos.length <= 2 || photos.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-8 grid gap-x-6 gap-y-6 ${cols}`}>
      {photos.map((p, i) => (
        <Figure key={i} photo={p} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" aspect="aspect-[4/3]" />
      ))}
    </div>
  );
}

export function SectionsPage({ section, page, kind }: { section: string; page: SectionsPageType; kind: "article" | "dispatch" }) {
  return (
    <>
      <SectionMasthead section={section} heading={page.heading} intro={page.intro} />
      {page.heroImage?.src && (
        <div className={container}>
          <Figure photo={page.heroImage} sizes="100vw" aspect="aspect-[4/3] md:aspect-[21/9]" preload />
        </div>
      )}
      <div className={`${container} pb-20 pt-6`}>
        {(page.sections ?? []).map((s, i) => {
          const photos = (s.images ?? []).filter((p) => p?.src);
          const [lead, ...rest] = photos;
          return (
            <article key={i} className={`${i === 0 ? "rule-double" : "border-t border-ink"} mt-12 pt-8`}>
              <p className={`${label} text-purple`}>{kind === "dispatch" ? `Dispatch ${String(i + 1).padStart(2, "0")}` : `Part ${i + 1}`}</p>
              <h2 className={`${headline} mt-3 max-w-[22ch] text-[36px] md:text-[56px]`}>{s.heading}</h2>
              <div className={`mt-6 grid gap-8 ${lead ? "md:grid-cols-12" : ""}`}>
                <Paragraphs
                  text={s.text}
                  className={`text-[19px] leading-relaxed ${i === 0 ? "dropcap" : ""} ${lead ? "md:col-span-7" : "max-w-[68ch] lg:columns-2 lg:gap-12 lg:max-w-none [&>p]:break-inside-avoid"}`}
                />
                {lead && <Figure photo={lead} sizes="(min-width: 768px) 40vw, 100vw" aspect="aspect-[4/3]" className="md:col-span-5" />}
              </div>
              {!!rest.length && <Spread photos={rest} />}
            </article>
          );
        })}
      </div>
    </>
  );
}
