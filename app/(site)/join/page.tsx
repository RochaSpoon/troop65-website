import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { Kicker, PageHero, Paragraphs, VisitButton, container, display } from "@/components/site";
import { getJoin, getSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join",
  description: "Visit a Troop 65 meeting in Long Beach. We meet the 1st and 3rd Tuesday of each month, 6:30 to 8:30 pm, at Lakewood Village Community Church.",
};

export default async function JoinPage() {
  const [page, settings] = await Promise.all([getJoin(), getSettings()]);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${settings.meetingPlace}, ${settings.meetingAddress}`)}`;
  const details = [
    { title: "Who can join", text: page.whoCanJoin },
    { title: "What to wear and bring", text: page.whatToBring },
    { title: "Cost", text: page.cost },
  ].filter((d) => d.text);

  return (
    <>
      <PageHero kicker="Join" heading={page.heading} intro={page.intro}>
        <VisitButton url={settings.visitFormUrl} className="mt-6" />
      </PageHero>

      {page.heroImage?.src && (
        <div className="relative aspect-[4/3] w-full md:aspect-[21/8]">
          <Photo photo={page.heroImage} sizes="100vw" />
        </div>
      )}

      <section className="bg-purple text-white">
        <dl className={`${container} grid gap-0 py-12 font-public md:grid-cols-3 md:py-16`}>
          {[
            ["When", `${settings.meetingDays}, ${settings.meetingTime}`],
            ["Where", `${settings.meetingPlace}, ${settings.meetingAddress}`],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-white/30 py-5 md:border-l md:border-t-0 md:px-8 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[13px] font-bold uppercase tracking-[0.18em] text-gold">{k}</dt>
              <dd className="mt-1 text-xl">{v}</dd>
            </div>
          ))}
          <div className="border-t border-white/30 py-5 md:border-l md:border-t-0 md:px-8">
            <dt className="text-[13px] font-bold uppercase tracking-[0.18em] text-gold">Directions</dt>
            <dd className="mt-1 text-xl">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gold">
                Open in Google Maps
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {!!page.steps?.length && (
        <section className={`${container} py-20 md:py-28`}>
          <Kicker>Your first visit</Kicker>
          <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>What to expect</h2>
          <ol className="mt-10 grid gap-x-10 md:grid-cols-2">
            {page.steps.map((s, i) => (
              <li key={i} className="grid grid-cols-[72px_1fr] gap-4 border-t border-ink py-8 md:grid-cols-[96px_1fr]">
                <span className={`${display} numeral-outline-purple text-[56px] font-black md:text-[72px]`}>{i + 1}</span>
                <div>
                  <h3 className="font-public text-xl font-bold">{s.heading}</h3>
                  <Paragraphs text={s.text} className="mt-2 font-public text-base leading-relaxed text-muted" />
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {!!details.length && (
        <section className="bg-stone">
          <div className={`${container} grid gap-10 py-20 md:grid-cols-3 md:py-24`}>
            {details.map((d) => (
              <div key={d.title} className="border-t-4 border-ink pt-6">
                <h2 className={`${display} text-[32px] font-extrabold md:text-[40px]`}>{d.title}</h2>
                <Paragraphs text={d.text} className="mt-4 font-public text-lg leading-relaxed" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={`${container} grid gap-8 py-20 md:grid-cols-12 md:py-24`}>
        <div className="md:col-span-7">
          <h2 className={`${display} text-[48px] font-extrabold md:text-[72px]`}>Ready to join?</h2>
          <Paragraphs text={page.signUpText} className="mt-5 max-w-[48ch] font-public text-lg leading-relaxed text-muted" />
        </div>
        <div className="flex flex-col items-start gap-4 md:col-span-4 md:col-start-9 md:justify-end">
          <VisitButton url={settings.visitFormUrl} />
          {settings.beAScoutUrl && (
            <a href={settings.beAScoutUrl} target="_blank" rel="noopener noreferrer" className="border-b-2 border-purple pb-1 font-public font-bold text-purple">
              Sign up on BeAScout
            </a>
          )}
          {settings.emailListUrl && (
            <a href={settings.emailListUrl} className="border-b-2 border-purple pb-1 font-public font-bold text-purple">
              Get troop emails
            </a>
          )}
        </div>
      </section>
    </>
  );
}
