import Link from "next/link";
import { Figure, Kicker, Paragraphs, VisitButton, container, headline, label } from "@/components/site";
import { getAnnouncements, getHome, getOurSpace, getSettings } from "@/lib/content";

function More({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`${label} mt-5 inline-block text-purple hover:underline`}>
      {children} &rarr;
    </Link>
  );
}

export default async function HomePage() {
  const [home, settings, space, announcements] = await Promise.all([getHome(), getSettings(), getOurSpace(), getAnnouncements()]);
  const trips = home.trips ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Boy Scout Troop 65, Long Beach",
    alternateName: ["Troop 65", "T65", "The Purple Plague"],
    url: "https://t65.org",
    logo: "https://t65.org/logo.png",
    foundingDate: "1937",
    description: "Scouts BSA troop in Long Beach, California.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4515 Sunfield Ave",
      addressLocality: "Long Beach",
      addressRegion: "CA",
      postalCode: "90808",
      addressCountry: "US",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Masthead */}
      <div className={container}>
        <p className={`${headline} pt-8 text-center text-[clamp(52px,12.5vw,168px)] md:pt-10`} aria-hidden="true">
          The Purple <span className="text-purple">Plague</span>
        </p>
        <div className={`mt-4 flex flex-wrap justify-between gap-x-6 gap-y-1 border-y border-ink py-2 ${label} text-[11px]`}>
          <span>Troop 65 · Long Beach, Calif.</span>
          <span>Est. 1937</span>
          <span className="hidden sm:inline">Meets 1st and 3rd Tuesdays</span>
          <span>200+ Eagle Scouts</span>
        </div>
      </div>

      {/* Front page: lead story and side column */}
      <div className={`${container} grid gap-10 py-10 md:grid-cols-12 md:gap-0 md:py-12`}>
        <article className="md:col-span-8 md:pr-10">
          {home.heroKicker && <Kicker>{home.heroKicker}</Kicker>}
          <h1 className={`${headline} mt-4 text-[44px] md:text-[80px]`}>{home.heroHeading}</h1>
          <Figure photo={home.heroImage} sizes="(min-width: 768px) 60vw, 100vw" preload className="mt-8" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Paragraphs text={home.heroText} className="dropcap text-[19px] leading-relaxed" />
            <div className="md:self-end">
              <VisitButton url={settings.visitFormUrl} className="w-full md:w-auto" />
            </div>
          </div>
        </article>

        <aside className="md:col-span-4 md:border-l md:border-ink md:pl-10">
          <div className="border-4 border-double border-ink p-5">
            <p className={`${label} text-purple`}>Next meetings</p>
            <p className={`${headline} mt-2 text-[30px]`}>{settings.meetingDays}</p>
            <p className="mt-2 text-[17px]">
              {settings.meetingTime}
              <br />
              {settings.meetingPlace}
              <br />
              {settings.meetingAddress}
            </p>
            <Link href="/join" className={`${label} mt-4 inline-block text-purple hover:underline`}>
              What a first visit looks like &rarr;
            </Link>
          </div>

          {!!home.facts?.length && (
            <dl className="mt-8">
              {home.facts.map((f, i) => (
                <div key={i} className="flex items-baseline gap-4 border-b border-ink py-3 first:border-t">
                  <dd className={`${headline} w-[120px] shrink-0 text-[48px] ${i < 2 ? "text-purple" : ""}`}>{f.number}</dd>
                  <dt className="text-[16px] leading-snug text-muted">{f.label}</dt>
                </div>
              ))}
            </dl>
          )}

          {!!announcements.length && (
            <div className="mt-8">
              <Kicker>Bulletin board</Kicker>
              <ul className="mt-3">
                {announcements.slice(0, 2).map((a) => (
                  <li key={a._id} className="border-b border-line py-4">
                    <p className="font-sans text-[17px] font-bold leading-snug">{a.title}</p>
                    <p className="mt-1 line-clamp-3 text-[15px] leading-snug text-muted">{a.body}</p>
                  </li>
                ))}
              </ul>
              <More href="/troop">All troop news</More>
            </div>
          )}
        </aside>
      </div>

      {/* Three columns of stories */}
      <div className={`${container} rule-double grid md:grid-cols-3`}>
        <section className="border-b border-ink py-10 md:border-b-0 md:pr-8">
          <Kicker>Meetings</Kicker>
          <h2 className={`${headline} mt-4 text-[36px]`}>{home.tuesdayHeading}</h2>
          {home.tuesdayText && <p className="mt-3 text-[17px] leading-relaxed">{home.tuesdayText}</p>}
          <ol className="mt-5">
            {(home.schedule ?? []).map((r, i) => (
              <li key={i} className="grid grid-cols-[80px_1fr] gap-3 border-t border-line py-3">
                <span className={`${headline} text-[30px] text-purple`}>{r.time}</span>
                <span>
                  <span className="block font-sans text-[16px] font-bold">{r.title}</span>
                  {r.text && <span className="block text-[15px] text-muted">{r.text}</span>}
                </span>
              </li>
            ))}
          </ol>
          {home.tuesdayNote && <p className="border-t border-line pt-3 text-[15px] italic text-muted">{home.tuesdayNote}</p>}
          <More href="/about">How the troop runs</More>
        </section>

        <section className="border-b border-ink py-10 md:border-b-0 md:border-l md:px-8">
          <Kicker>Outdoors</Kicker>
          <h2 className={`${headline} mt-4 text-[36px]`}>{home.outdoorsHeading}</h2>
          {trips[0] && <Figure photo={trips[0].image} sizes="(min-width: 768px) 30vw, 100vw" aspect="aspect-[4/3]" caption={false} className="mt-5" />}
          {home.outdoorsText && <p className="mt-4 text-[17px] leading-relaxed">{home.outdoorsText}</p>}
          <ul className="mt-4">
            {trips.map((t, i) => (
              <li key={i} className="flex items-baseline justify-between gap-3 border-t border-line py-2.5">
                <span className="font-sans text-[16px] font-bold">{t.name}</span>
                <span className={`${label} text-[11px] text-muted`}>
                  {t.note ? `${t.note}, ` : ""}
                  {t.year}
                </span>
              </li>
            ))}
          </ul>
          <More href="/what-we-do">Read the trip reports</More>
        </section>

        <section className="py-10 md:border-l md:border-ink md:pl-8">
          <Kicker>{home.lairKicker || "The Eagle Lair"}</Kicker>
          <h2 className={`${headline} mt-4 text-[36px]`}>{home.lairHeading}</h2>
          {home.lairImage?.src && <Figure photo={home.lairImage} sizes="(min-width: 768px) 30vw, 100vw" aspect="aspect-[3.3/1]" caption={false} className="mt-5" />}
          <Paragraphs text={home.lairText} className="mt-4 text-[17px] leading-relaxed" />
          <More href="/about">About the Eagle Lair</More>
        </section>
      </div>

      {/* Our space */}
      <section className="border-y border-ink bg-newsprint">
        <div className={`${container} grid gap-8 py-12 md:grid-cols-12 md:py-16`}>
          {home.spaceImage?.src && (
            <Figure photo={home.spaceImage} sizes="(min-width: 768px) 40vw, 100vw" aspect="aspect-square" className="md:col-span-5" />
          )}
          <div className="md:col-span-7 md:pl-6">
            <Kicker>Our space</Kicker>
            <h2 className={`${headline} mt-4 text-[44px] md:text-[64px]`}>{home.spaceHeading}</h2>
            {space.size && (
              <p className="mt-4 flex items-baseline gap-4">
                <span className={`${headline} text-[72px] text-purple md:text-[96px]`}>{space.size}</span>
                {space.sizeLabel && <span className="font-sans text-[15px] font-semibold text-muted">{space.sizeLabel}</span>}
              </p>
            )}
            <ol className="mt-4 columns-1 gap-8 sm:columns-2">
              {(space.rooms ?? []).map((r, i) => (
                <li key={i} className="flex break-inside-avoid gap-3 border-t border-ink py-2.5 font-sans text-[16px] font-semibold">
                  <span className="w-6 text-purple">{String(i + 1).padStart(2, "0")}</span>
                  {r.name}
                </li>
              ))}
            </ol>
            <More href="/our-space">Walk through the rooms</More>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="bg-purple text-white">
        <div className={`${container} grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-20`}>
          <div className="md:col-span-7">
            <h2 className={`${headline} text-[52px] md:text-[96px]`}>{home.joinHeading}</h2>
            {home.joinText && <p className="mt-5 max-w-[44ch] text-[19px] leading-relaxed text-white/90">{home.joinText}</p>}
          </div>
          <div className="md:col-span-5">
            <p className="text-[17px] text-white/90">
              {settings.meetingDays}, {settings.meetingTime}. {settings.meetingPlace}.
            </p>
            <VisitButton url={settings.visitFormUrl} tone="gold" className="mt-5 w-full md:w-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
