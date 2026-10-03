import type { Metadata } from "next";
import { Kicker, Paragraphs, container, display } from "@/components/site";
import { getAnnouncements, getTroop } from "@/lib/content";

export const metadata: Metadata = {
  title: "Troop",
  description: "Calendar, announcements, links, and forms for Troop 65 scouts and families.",
};

const sections = [
  { id: "announcements", label: "Announcements" },
  { id: "calendar", label: "Calendar" },
  { id: "links", label: "Links" },
  { id: "forms", label: "Forms and documents" },
];

function formatDate(d?: string) {
  if (!d) return null;
  return new Date(`${d}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function TroopPage() {
  const [page, announcements] = await Promise.all([getTroop(), getAnnouncements()]);
  return (
    <>
      <section className="bg-purple text-white">
        <div className={`${container} pb-10 pt-14 md:pb-14 md:pt-20`}>
          <Kicker tone="gold">For scouts and families</Kicker>
          <h1 className={`${display} mt-4 text-[64px] font-extrabold md:text-[120px]`}>{page.heading}</h1>
          <Paragraphs text={page.intro} className="mt-4 max-w-[50ch] font-public text-lg text-white/90" />
          <nav aria-label="On this page" className="mt-10">
            <ul className="flex flex-wrap gap-2 font-public text-[15px] font-bold">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-block border border-white/50 px-4 py-2 hover:border-gold hover:text-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section id="announcements" className={`${container} scroll-mt-28 py-16 md:py-20`}>
        <h2 className={`${display} text-[44px] font-extrabold md:text-[64px]`}>Announcements</h2>
        {announcements.length ? (
          <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
            {announcements.map((a) => (
              <li key={a._id} className="border-t-4 border-ink py-6">
                {a.date && <p className="font-public text-[13px] font-bold uppercase tracking-[0.14em] text-purple">{formatDate(a.date)}</p>}
                <h3 className="mt-1 font-public text-2xl font-bold">{a.title}</h3>
                <Paragraphs text={a.body} className="mt-3 font-public text-lg leading-relaxed text-muted" />
                {a.linkUrl && (
                  <a href={a.linkUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-purple px-4 py-2.5 font-public font-bold text-white hover:bg-purple-deep">
                    {a.linkLabel || "Open link"}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 font-public text-lg text-muted">No announcements right now.</p>
        )}
      </section>

      {page.calendarEmbedUrl && (
        <section id="calendar" className="scroll-mt-28 bg-stone py-16 md:py-20">
          <div className={container}>
            <h2 className={`${display} text-[44px] font-extrabold md:text-[64px]`}>Calendar</h2>
            <div className="mt-8 border-t-4 border-ink bg-paper">
              <iframe
                src={page.calendarEmbedUrl}
                title="Troop 65 Google Calendar"
                className="block h-[640px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      <section id="links" className={`${container} scroll-mt-28 py-16 md:py-20`}>
        <h2 className={`${display} text-[44px] font-extrabold md:text-[64px]`}>Links</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {(page.linkGroups ?? []).map((g, i) => (
            <div key={i} className="border-t-4 border-ink pt-5">
              <h3 className="font-public text-[13px] font-bold uppercase tracking-[0.18em] text-purple">{g.title}</h3>
              <ul className="mt-3">
                {(g.links ?? []).map((l, j) => (
                  <li key={j} className="border-b border-line">
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-baseline justify-between gap-4 py-3 font-public text-[17px] font-semibold hover:text-purple">
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

      <section id="forms" className="scroll-mt-28 bg-purple-ink text-white">
        <div className={`${container} py-16 md:py-20`}>
          <h2 className={`${display} text-[44px] font-extrabold md:text-[64px]`}>Forms and documents</h2>
          <ul className="mt-8 border-t border-white/30">
            {(page.documents ?? []).map((d, i) => (
              <li key={i} className="border-b border-white/30">
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="grid gap-1 py-5 font-public hover:text-gold md:grid-cols-12 md:items-baseline">
                  <span className="text-xl font-bold md:col-span-5">{d.label}</span>
                  {d.note && <span className="text-white/75 md:col-span-6">{d.note}</span>}
                  <span aria-hidden="true" className="hidden text-right text-gold md:col-span-1 md:block">&#8599;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
