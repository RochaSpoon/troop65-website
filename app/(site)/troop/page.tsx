import type { Metadata } from "next";
import { Paragraphs, SectionMasthead, container, headline, label } from "@/components/site";
import { getAnnouncements, getTroop } from "@/lib/content";

export const metadata: Metadata = {
  title: "Troop",
  description: "Calendar, announcements, links, and forms for Troop 65 scouts and families.",
};

const sections = [
  { id: "announcements", label: "Announcements" },
  { id: "calendar", label: "Calendar" },
  { id: "forms", label: "Forms" },
  { id: "links", label: "Links" },
];

function formatDate(d?: string) {
  if (!d) return null;
  return new Date(`${d}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function SectionHead({ id, title }: { id: string; title: string }) {
  return (
    <div className="rule-double pt-5">
      <h2 id={`${id}-heading`} className={`${headline} text-[40px] md:text-[56px]`}>
        {title}
      </h2>
    </div>
  );
}

export default async function TroopPage() {
  const [page, announcements] = await Promise.all([getTroop(), getAnnouncements()]);
  return (
    <>
      {/* The section name is already "Troop", so an unchanged "Troop" heading reads as "Bulletin board". */}
      <SectionMasthead section="Troop" heading={page.heading === "Troop" ? "Bulletin board" : page.heading} intro={page.intro}>
        <nav aria-label="On this page" className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={`${label} inline-block border border-ink px-3 py-2 hover:bg-ink hover:text-paper`}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SectionMasthead>

      <section id="announcements" aria-labelledby="announcements-heading" className={`${container} scroll-mt-28 pb-14`}>
        <SectionHead id="announcements" title="Announcements" />
        {announcements.length ? (
          <div className="mt-6 columns-1 gap-6 md:columns-2">
            {announcements.map((a) => (
              <article key={a._id} className="mb-6 break-inside-avoid border-4 border-double border-ink p-6">
                {a.date && <p className={`${label} text-[11px] text-purple`}>{formatDate(a.date)}</p>}
                <h3 className={`${headline} mt-1 text-[28px]`}>{a.title}</h3>
                <Paragraphs text={a.body} className="mt-3 text-[17px] leading-relaxed" />
                {a.linkUrl && (
                  <a href={a.linkUrl} target="_blank" rel="noopener noreferrer" className={`${label} mt-4 inline-block bg-purple px-4 py-2.5 text-white hover:bg-ink`}>
                    {a.linkLabel || "Open link"}
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-[18px] text-muted">No announcements right now.</p>
        )}
      </section>

      {page.calendarEmbedUrl && (
        <section id="calendar" aria-labelledby="calendar-heading" className={`${container} scroll-mt-28 pb-14`}>
          <SectionHead id="calendar" title="Calendar" />
          <div className="mt-6 border border-ink bg-white">
            <iframe src={page.calendarEmbedUrl} title="Troop 65 Google Calendar" className="block h-[640px] w-full border-0" loading="lazy" />
          </div>
        </section>
      )}

      <section id="forms" aria-labelledby="forms-heading" className={`${container} scroll-mt-28 pb-14`}>
        <SectionHead id="forms" title="Forms and documents" />
        <ul className="mt-4">
          {(page.documents ?? []).map((d, i) => (
            <li key={i} className="border-b border-ink">
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="grid gap-1 py-4 hover:text-purple md:grid-cols-12 md:items-baseline">
                <span className="font-sans text-[18px] font-bold md:col-span-5">{d.label}</span>
                {d.note && <span className="text-[16px] text-muted md:col-span-6">{d.note}</span>}
                <span aria-hidden="true" className="hidden text-right text-purple md:col-span-1 md:block">
                  &#8599;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="links" aria-labelledby="links-heading" className={`${container} scroll-mt-28 pb-20`}>
        <SectionHead id="links" title="Links" />
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4">
          {(page.linkGroups ?? []).map((g, i) => (
            <div key={i} className={`border-t border-ink py-5 md:border-t-0 ${i > 0 ? "lg:border-l lg:pl-6" : ""} lg:pr-6 ${i % 2 === 1 ? "md:border-l md:pl-6 lg:pl-6" : ""}`}>
              <h3 className={`${label} text-purple`}>{g.title}</h3>
              <ul className="mt-3">
                {(g.links ?? []).map((l, j) => (
                  <li key={j} className="border-b border-line">
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="block py-2.5 font-sans text-[15px] font-semibold leading-snug hover:text-purple">
                      {l.label} <span aria-hidden="true" className="text-purple">&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
