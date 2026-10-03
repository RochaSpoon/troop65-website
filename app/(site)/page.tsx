import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Kicker, Numerals, VisitButton, container, display } from "@/components/site";
import { getHome, getOurSpace, getSettings } from "@/lib/content";

export default async function HomePage() {
  const [home, settings, space] = await Promise.all([getHome(), getSettings(), getOurSpace()]);
  const trips = home.trips ?? [];
  const [bigTrip, ...otherTrips] = trips;

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

      {/* Hero: full-width photo with a purple block holding the headline. */}
      <section>
        <div className="relative h-[62vh] min-h-[420px] w-full md:h-[78vh] md:max-h-[860px]">
          <Photo photo={home.heroImage} sizes="100vw" preload position={home.heroImage.hotspot ? undefined : "50% 40%"} />
        </div>
        <div className={container}>
          <div className="relative -mt-28 bg-purple px-6 py-8 text-white md:-mt-56 md:w-[62%] md:px-12 md:py-12">
            {home.heroKicker && <Kicker tone="gold">{home.heroKicker}</Kicker>}
            <h1 className={`${display} mt-4 text-[56px] font-extrabold md:text-[104px]`}>{home.heroHeading}</h1>
            {home.heroText && (
              <p className="mt-6 max-w-[34ch] font-public text-lg leading-relaxed text-white/90 md:text-xl">{home.heroText}</p>
            )}
          </div>
        </div>
      </section>

      {/* Numbers, in the outlined style of the badge's "65". */}
      {!!home.facts?.length && (
        <section aria-label="Troop 65 by the numbers" className={`${container} pt-16 md:pt-24`}>
          <dl className="grid grid-cols-2 border-t-4 border-ink md:grid-cols-4">
            {home.facts.map((f, i) => (
              <div
                key={i}
                className={`flex flex-col-reverse border-b border-line py-6 pr-4 md:border-b-0 md:py-8 md:pl-6 ${i > 0 ? "md:border-l" : "md:pl-0"} ${i % 2 === 1 ? "border-l pl-4" : ""}`}
              >
                <dt className="mt-2 font-public text-[15px] font-semibold text-muted">{f.label}</dt>
                <dd className={`${display} numeral-outline-purple text-[72px] font-black md:text-[112px]`}>{f.number}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* A Tuesday night. */}
      <section className={`${container} grid gap-10 py-20 md:grid-cols-12 md:py-28`}>
        <div className="md:col-span-5">
          <Kicker>Meetings</Kicker>
          <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>{home.tuesdayHeading}</h2>
          {home.tuesdayText && <p className="mt-5 max-w-[38ch] font-public text-lg leading-relaxed text-muted">{home.tuesdayText}</p>}
          {home.tuesdayImage?.src && (
            <div className="relative mt-8 aspect-[4/3] w-full">
              <Photo photo={home.tuesdayImage} sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          )}
        </div>
        <ol className="md:col-span-6 md:col-start-7 md:pt-16">
          {(home.schedule ?? []).map((r, i) => (
            <li key={i} className="grid grid-cols-[96px_1fr] gap-4 border-t border-ink py-7 md:grid-cols-[140px_1fr]">
              <span className={`${display} text-[44px] font-black text-purple md:text-[60px]`}>{r.time}</span>
              <span>
                <span className="block font-public text-xl font-bold">{r.title}</span>
                {r.text && <span className="mt-1 block font-public text-base leading-relaxed text-muted">{r.text}</span>}
              </span>
            </li>
          ))}
          {home.tuesdayNote && (
            <li className="border-t border-ink pt-7 font-public text-base leading-relaxed text-muted">{home.tuesdayNote}</li>
          )}
        </ol>
      </section>

      {/* Outdoors: one big trip photo, two smaller. */}
      {bigTrip && (
        <section className="bg-stone py-20 md:py-28">
          <div className={container}>
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Kicker>Outdoors</Kicker>
                <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>{home.outdoorsHeading}</h2>
              </div>
              {home.outdoorsText && (
                <p className="max-w-[40ch] font-public text-lg leading-relaxed text-muted md:col-span-4 md:col-start-9">{home.outdoorsText}</p>
              )}
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-2">
              {[bigTrip, ...otherTrips].map((t, i) => (
                <figure key={i} className={`relative ${i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}`}>
                  <div
                    className={`relative w-full ${i === 0 ? "aspect-square md:aspect-auto md:h-full md:min-h-[640px]" : "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[312px]"}`}
                  >
                    <Photo photo={t.image} sizes={i === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"} />
                  </div>
                  <figcaption className="absolute bottom-0 left-0 bg-ink px-5 py-3 font-public text-white">
                    <span className="font-bold">{t.name}</span> <span className="text-gold">{t.year}</span>
                    {t.note && <span className="block text-sm text-white/75">{t.note}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
            <Link href="/what-we-do" className="mt-10 inline-block border-b-2 border-purple pb-1 font-public font-bold text-purple">
              See what we do
            </Link>
          </div>
        </section>
      )}

      {/* Eagle Lair. */}
      <section className="bg-purple-ink text-white">
        <div className="mx-auto grid max-w-[1360px] gap-10 pb-16 md:grid-cols-12 md:pb-0">
          <div className="px-5 pt-20 md:col-span-6 md:px-10 md:py-28">
            {home.lairKicker && <Kicker tone="gold">{home.lairKicker}</Kicker>}
            <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>
              <Numerals text={home.lairHeading ?? ""} outline="numeral-outline-gold" />
            </h2>
            {home.lairText && <p className="mt-6 max-w-[42ch] font-public text-lg leading-relaxed text-white/85">{home.lairText}</p>}
          </div>
          {home.lairImage?.src && (
            <div className="relative mx-5 aspect-[3.3/1] self-center md:col-span-6 md:mx-0 md:mr-10">
              <Photo photo={home.lairImage} sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          )}
        </div>
      </section>

      {/* Our space. */}
      <section className={`${container} grid gap-12 py-20 md:grid-cols-12 md:py-28`}>
        <div className="md:col-span-5">
          <Kicker>Our space</Kicker>
          <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>{home.spaceHeading}</h2>
          {space.size && <p className={`${display} numeral-outline-purple mt-8 text-[88px] font-black md:text-[128px]`}>{space.size}</p>}
          {space.sizeLabel && <p className="mt-3 font-public text-[15px] font-semibold text-muted">{space.sizeLabel}</p>}
          <Link href="/our-space" className="mt-10 inline-block border-b-2 border-purple pb-1 font-public font-bold text-purple">
            Walk through the rooms
          </Link>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {home.spaceImage?.src && (
            <div className="relative aspect-square w-full">
              <Photo photo={home.spaceImage} sizes="(min-width: 768px) 46vw, 100vw" position={home.spaceImage.hotspot ? undefined : "50% 35%"} />
            </div>
          )}
          <ul className="mt-8 grid font-public text-[17px] font-semibold sm:grid-cols-2 sm:gap-x-8">
            {(space.rooms ?? []).map((r, i) => (
              <li key={i} className="border-t border-line py-3">
                {r.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit. */}
      <section className="bg-purple text-white">
        <div className={`${container} grid gap-10 py-20 md:grid-cols-12 md:py-28`}>
          <div className="md:col-span-6">
            <h2 className={`${display} text-[56px] font-extrabold md:text-[96px]`}>{home.joinHeading}</h2>
            {home.joinText && <p className="mt-6 max-w-[40ch] font-public text-lg leading-relaxed text-white/90">{home.joinText}</p>}
            <VisitButton url={settings.visitFormUrl} className="mt-8" />
          </div>
          <dl className="font-public md:col-span-5 md:col-start-8">
            {[
              ["When", `${settings.meetingDays}, ${settings.meetingTime}`],
              ["Where", `${settings.meetingPlace}, ${settings.meetingAddress}`],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-white/30 py-5">
                <dt className="text-[13px] font-bold uppercase tracking-[0.18em] text-gold">{k}</dt>
                <dd className="mt-1 text-lg">{v}</dd>
              </div>
            ))}
            <div className="border-t border-white/30 py-5">
              <dt className="text-[13px] font-bold uppercase tracking-[0.18em] text-gold">First time?</dt>
              <dd className="mt-1 text-lg">
                <Link href="/join" className="underline underline-offset-4 hover:text-gold">
                  What a first visit looks like
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
