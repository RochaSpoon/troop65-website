import type { Metadata } from "next";
import { EmailButton, Eyebrow, Figure, PageHeader, Paragraphs, VisitButton, container, heading } from "@/components/site";
import { getJoin, getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join",
  description: "Visit a Troop 65 meeting in Long Beach. We meet the 1st and 3rd Tuesday of each month, 6:30 to 8:30 pm, at Lakewood Village Community Church.",
};

export default async function JoinPage() {
  const [page, settings] = await Promise.all([getJoin(), getSettings()]);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${settings.meetingPlace}, ${settings.meetingAddress}`)}`;
  const details = [
    { title: "When", text: `${settings.meetingDays}, ${settings.meetingTime}.` },
    { title: "Where", text: `${settings.meetingPlace}, ${settings.meetingAddress}.`, link: { href: mapUrl, label: "Open in Google Maps" } },
    { title: "Who can join", text: page.whoCanJoin },
    { title: "What to wear and bring", text: page.whatToBring },
    { title: "Cost", text: page.cost },
  ].filter((d) => d.text);

  return (
    <>
      <PageHeader eyebrow="Join" title={page.heading} intro={page.intro}>
        <div className="mt-6 flex flex-wrap gap-3">
          <VisitButton url={settings.visitFormUrl} />
          <EmailButton url={settings.emailListUrl} />
        </div>
      </PageHeader>

      {page.heroImage?.src && (
        <div className={container}>
          <Figure photo={page.heroImage} sizes="(min-width: 1240px) 1160px, 100vw" aspect="aspect-[4/3] md:aspect-[21/9]" />
        </div>
      )}

      {!!page.steps?.length && (
        <section className={`${container} py-16 md:py-20`}>
          <Eyebrow>Your first visit</Eyebrow>
          <h2 className={`${heading} mt-3 text-[36px] md:text-[52px]`}>What to expect</h2>
          {/* A real sequence, so the steps are numbered. */}
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {page.steps.map((s, i) => (
              <li key={i} className="rounded-[14px] bg-white p-6">
                <span className="font-board text-[40px] font-bold leading-none text-purple">{i + 1}</span>
                <h3 className="mt-3 text-[19px] font-extrabold">{s.heading}</h3>
                <Paragraphs text={s.text} className="mt-2 text-[16px] leading-relaxed text-muted" />
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className={`${container} pb-20`}>
        <div className="grid gap-x-10 border-t-2 border-ink md:grid-cols-2">
          {details.map((d) => (
            <div key={d.title} className="border-b border-line py-6">
              <h2 className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-purple">{d.title}</h2>
              <Paragraphs text={d.text} className="mt-2 text-[18px] leading-relaxed" />
              {d.link && (
                <a href={d.link.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold text-purple underline decoration-2 underline-offset-4">
                  {d.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple text-white">
        <div className={`${container} grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20`}>
          <div className="md:col-span-7">
            <h2 className={`${heading} text-[44px] md:text-[72px]`}>Ready to join?</h2>
            <Paragraphs text={page.signUpText} className="mt-4 max-w-[48ch] text-[19px] leading-relaxed text-white/90" />
          </div>
          <div className="flex flex-col items-start gap-4 md:col-span-5">
            <div className="flex flex-wrap gap-3">
              <VisitButton url={settings.visitFormUrl} tone="gold" />
              <EmailButton url={settings.emailListUrl} tone="white" />
            </div>
            {settings.beAScoutUrl && (
              <a href={settings.beAScoutUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-4 hover:text-gold">
                Sign up on BeAScout
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
