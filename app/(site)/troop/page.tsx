import type { Metadata } from "next";
import { PageHeader, Paragraphs, container, heading } from "@/components/site";
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

export default async function TroopPage() {
  const [page, announcements] = await Promise.all([getTroop(), getAnnouncements()]);
  return (
    <>
      <PageHeader eyebrow="For scouts and families" title={page.heading} intro={page.intro}>
        <nav aria-label="On this page" className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-block rounded-full border border-ink px-4 py-2 text-[15px] font-bold text-ink hover:bg-ink hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <section id="announcements" className={`${container} scroll-mt-28 pb-16`}>
        <h2 className={`${heading} border-t-2 border-ink pt-6 text-[32px] md:text-[44px]`}>Announcements</h2>
        {announcements.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {announcements.map((a) => (
              <article key={a._id} className="rounded-[14px] bg-white p-6">
                {a.date && <p className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-purple">{formatDate(a.date)}</p>}
                <h3 className="mt-1 text-[22px] font-extrabold tracking-[-0.02em]">{a.title}</h3>
                <Paragraphs text={a.body} className="mt-2 text-[17px] leading-relaxed text-muted" />
                {a.linkUrl && (
                  <a href={a.linkUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-full bg-purple px-5 py-2.5 font-bold text-white hover:bg-ink">
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
        <section id="calendar" className={`${container} scroll-mt-28 pb-16`}>
          <h2 className={`${heading} border-t-2 border-ink pt-6 text-[32px] md:text-[44px]`}>Calendar</h2>
          <div className="mt-6 overflow-hidden rounded-md border-[10px] border-frame bg-white">
            <iframe src={page.calendarEmbedUrl} title="Troop 65 Google Calendar" className="block h-[640px] w-full border-0" loading="lazy" />
          </div>
        </section>
      )}

      <section id="forms" className={`${container} scroll-mt-28 pb-16`}>
        <h2 className={`${heading} border-t-2 border-ink pt-6 text-[32px] md:text-[44px]`}>Forms and documents</h2>
        <ul className="mt-4">
          {(page.documents ?? []).map((d, i) => (
            <li key={i} className="border-b border-line">
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="grid gap-1 py-4 hover:text-purple md:grid-cols-12 md:items-baseline">
                <span className="text-[18px] font-bold md:col-span-5">{d.label}</span>
                {d.note && <span className="text-muted md:col-span-6">{d.note}</span>}
                <span aria-hidden="true" className="hidden text-right text-purple md:col-span-1 md:block">
                  &#8599;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="links" className={`${container} scroll-mt-28 pb-20`}>
        <h2 className={`${heading} border-t-2 border-ink pt-6 text-[32px] md:text-[44px]`}>Links</h2>
        <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {(page.linkGroups ?? []).map((g, i) => (
            <div key={i}>
              <h3 className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-purple">{g.title}</h3>
              <ul className="mt-2">
                {(g.links ?? []).map((l, j) => (
                  <li key={j} className="border-b border-line">
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-baseline justify-between gap-4 py-3 text-[16px] font-semibold hover:text-purple">
                      {l.label}
                      <span aria-hidden="true" className="text-purple">&#8599;</span>
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
