import type { Metadata } from "next";
import { Figure, Paragraphs, SectionMasthead, VisitButton, container, headline, label } from "@/components/site";
import { getJoin, getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join",
  description: "Visit a Troop 65 meeting in Long Beach. We meet the 1st and 3rd Tuesday of each month, 6:30 to 8:30 pm, at Lakewood Village Community Church.",
};

export default async function JoinPage() {
  const [page, settings] = await Promise.all([getJoin(), getSettings()]);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${settings.meetingPlace}, ${settings.meetingAddress}`)}`;
  const notices = [
    { title: "When", text: `${settings.meetingDays}, ${settings.meetingTime}.` },
    { title: "Where", text: `${settings.meetingPlace}, ${settings.meetingAddress}.`, link: { href: mapUrl, label: "Open in Google Maps" } },
    { title: "Who can join", text: page.whoCanJoin },
    { title: "What to wear and bring", text: page.whatToBring },
    { title: "Cost", text: page.cost },
  ].filter((n) => n.text);

  return (
    <>
      <SectionMasthead section="Join" heading={page.heading} intro={page.intro}>
        <VisitButton url={settings.visitFormUrl} className="mt-6" />
      </SectionMasthead>

      {page.heroImage?.src && (
        <div className={container}>
          <Figure photo={page.heroImage} sizes="100vw" aspect="aspect-[4/3] md:aspect-[21/9]" />
        </div>
      )}

      {!!page.steps?.length && (
        <section className={`${container} pt-14`}>
          <div className="rule-double pt-6">
            <p className={`${label} text-purple`}>Your first visit</p>
            <h2 className={`${headline} mt-3 text-[40px] md:text-[56px]`}>What to expect</h2>
          </div>
          <ol className="mt-6 grid md:grid-cols-4">
            {page.steps.map((s, i) => (
              <li key={i} className={`border-t border-ink py-6 md:border-t-0 ${i > 0 ? "md:border-l md:pl-6" : ""} md:pr-6`}>
                <span className={`${headline} text-[56px] text-purple`}>{i + 1}</span>
                <h3 className="mt-2 font-sans text-[18px] font-bold">{s.heading}</h3>
                <Paragraphs text={s.text} className="mt-2 text-[16px] leading-relaxed text-muted" />
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className={`${container} py-14`}>
        <div className="rule-double pt-6">
          <p className={`${label} text-purple`}>Notices</p>
        </div>
        <div className="mt-6 columns-1 gap-6 md:columns-2 lg:columns-3">
          {notices.map((n) => (
            <div key={n.title} className="mb-6 break-inside-avoid border-4 border-double border-ink p-5">
              <h2 className={`${headline} text-[26px]`}>{n.title}</h2>
              <Paragraphs text={n.text} className="mt-2 text-[17px] leading-relaxed" />
              {n.link && (
                <a href={n.link.href} target="_blank" rel="noopener noreferrer" className={`${label} mt-3 inline-block text-purple hover:underline`}>
                  {n.link.label} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className={`${container} grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-20`}>
          <div className="md:col-span-7">
            <h2 className={`${headline} text-[48px] md:text-[80px]`}>Ready to join?</h2>
            <Paragraphs text={page.signUpText} className="mt-4 max-w-[48ch] text-[19px] leading-relaxed text-white/85" />
          </div>
          <div className="flex flex-col items-start gap-4 md:col-span-5">
            <VisitButton url={settings.visitFormUrl} tone="gold" />
            {settings.beAScoutUrl && (
              <a href={settings.beAScoutUrl} target="_blank" rel="noopener noreferrer" className={`${label} text-gold hover:underline`}>
                Sign up on BeAScout &rarr;
              </a>
            )}
            {settings.emailListUrl && (
              <a href={settings.emailListUrl} className={`${label} text-gold hover:underline`}>
                Get troop emails &rarr;
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
