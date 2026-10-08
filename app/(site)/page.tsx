import Link from "next/link";
import { Photo } from "@/components/Photo";
import { EmailButton, Eyebrow, Figure, VisitButton, container, heading } from "@/components/site";
import type { Photo as PhotoType } from "@/lib/types";
import { getHome, getOurSpace, getSettings } from "@/lib/content";

/** The troop banner, used until a different one is set in Studio. */
const DEFAULT_BANNER: PhotoType = {
  src: "/photos/troop65-banner.jpg",
  alt: "Troop 65 banner: the troop in uniform on the beach at sunset in Long Beach, with the words Troop 65, Adventure, Leadership, Service, Long Beach, Since 1937, t65.org",
  w: 2560,
  h: 992,
};

export default async function HomePage() {
  const [home, settings, space] = await Promise.all([getHome(), getSettings(), getOurSpace()]);
  const trips = home.trips ?? [];
  const banner = home.bannerImage?.src ? home.bannerImage : DEFAULT_BANNER;

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

      {/* Banner: shown whole, never cropped, since the lettering runs to its edges. */}
      <div className={`${container} pt-6 md:pt-8`}>
        <Figure photo={banner} sizes="(min-width: 1240px) 1160px, 100vw" whole preload />
      </div>

      {/* Hero copy under the banner. */}
      <section className={`${container} grid gap-6 pb-4 pt-10 md:grid-cols-12 md:items-end md:gap-10 md:pt-14`}>
        <div className="md:col-span-7">
          {home.heroKicker && <Eyebrow>{home.heroKicker}</Eyebrow>}
          <h1 className={`${heading} mt-3 text-[40px] md:text-[64px]`}>{home.heroHeading}</h1>
        </div>
        <div className="md:col-span-5">
          {home.heroText && <p className="max-w-[40ch] text-[19px] leading-relaxed text-muted">{home.heroText}</p>}
          <div className="mt-6 flex flex-wrap gap-3">
            <VisitButton url={settings.visitFormUrl} />
            <EmailButton url={settings.emailListUrl} />
          </div>
        </div>
      </section>

      {/* Numbers */}
      {!!home.facts?.length && (
        <div className={`${container} pt-14`}>
          <dl className="grid grid-cols-2 border-t-2 border-ink md:grid-cols-4">
            {home.facts.map((f, i) => (
              <div key={i} className="flex flex-col-reverse border-b border-line py-6 pr-4">
                <dt className="mt-1 text-[15px] text-muted">{f.label}</dt>
                <dd className={`${heading} text-[48px] text-purple md:text-[68px]`}>{f.number}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Our space and a Tuesday night */}
      <section className={`${container} grid gap-12 py-20 md:grid-cols-12 md:gap-16`}>
        <div className="md:col-span-5">
          <Eyebrow>Our space</Eyebrow>
          <h2 className={`${heading} mt-3 text-[36px] md:text-[52px]`}>{home.spaceHeading}</h2>
          {space.size && (
            <p className="mt-4 text-[18px] text-muted">
              About <strong className="text-ink">{space.size}</strong> square feet at {settings.meetingPlace}.
            </p>
          )}
          <ul className="mt-5 grid grid-cols-2 gap-x-6">
            {(space.rooms ?? []).map((r, i) => (
              <li key={i} className="border-t border-line py-2.5 text-[16px] font-semibold">
                {r.name}
              </li>
            ))}
          </ul>
          <Link href="/our-space" className="mt-6 inline-block font-bold text-purple underline decoration-2 underline-offset-4">
            See the rooms
          </Link>
        </div>
        <div className="md:col-span-7">
          <Eyebrow>Meetings</Eyebrow>
          <h2 className={`${heading} mt-3 text-[36px] md:text-[52px]`}>{home.tuesdayHeading}</h2>
          {home.tuesdayText && <p className="mt-4 text-[18px] text-muted">{home.tuesdayText}</p>}
          <ol className="mt-6">
            {(home.schedule ?? []).map((r, i) => (
              <li key={i} className="grid grid-cols-[96px_1fr] gap-4 border-t border-line py-4">
                <span className="font-board text-[32px] font-bold leading-none tracking-[0.06em] text-purple">{r.time}</span>
                <span>
                  <span className="block text-[19px] font-bold">{r.title}</span>
                  {r.text && <span className="block text-muted">{r.text}</span>}
                </span>
              </li>
            ))}
          </ol>
          {home.tuesdayNote && <p className="border-t border-line pt-4 text-muted">{home.tuesdayNote}</p>}
        </div>
      </section>

      {/* Outdoors */}
      {!!trips.length && (
        <section className={`${container} pb-20`}>
          <Eyebrow>Outdoors</Eyebrow>
          <h2 className={`${heading} mt-3 text-[36px] md:text-[52px]`}>{home.outdoorsHeading}</h2>
          {home.outdoorsText && <p className="mt-3 max-w-[46ch] text-[18px] text-muted">{home.outdoorsText}</p>}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {trips.map((t, i) => (
              <article key={i}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[14px]">
                  <Photo photo={t.image} sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <h3 className="mt-4 text-[22px] font-extrabold tracking-[-0.02em]">{t.name}</h3>
                <p className="text-muted">
                  {t.note ? `${t.note}, ` : ""}
                  {t.year}
                </p>
              </article>
            ))}
          </div>
          <Link href="/what-we-do" className="mt-8 inline-block font-bold text-purple underline decoration-2 underline-offset-4">
            See what we do
          </Link>
        </section>
      )}

      {/* Eagle Lair: the whole photo, not cropped. */}
      <section className="bg-white">
        <div className={`${container} grid items-center gap-10 py-20 md:grid-cols-12 md:gap-16`}>
          <div className="md:col-span-6">
            {home.lairKicker && <Eyebrow>{home.lairKicker}</Eyebrow>}
            <h2 className={`${heading} mt-3 text-[36px] md:text-[56px]`}>{home.lairHeading}</h2>
            {home.lairText && <p className="mt-5 max-w-[44ch] text-[18px] leading-relaxed text-muted">{home.lairText}</p>}
            <Link href="/about" className="mt-6 inline-block font-bold text-purple underline decoration-2 underline-offset-4">
              See more of the Eagle Lair
            </Link>
          </div>
          {home.lairImage?.src && (
            <Figure photo={home.lairImage} sizes="(min-width: 768px) 40vw, 100vw" whole className="mx-auto w-full max-w-[460px] md:col-span-6" />
          )}
        </div>
      </section>

      {/* Visit */}
      <section className="bg-purple text-white">
        <div className={`${container} grid gap-10 py-16 md:grid-cols-12 md:py-24`}>
          <div className="md:col-span-6">
            <Eyebrow tone="gold">Visit</Eyebrow>
            <h2 className={`${heading} mt-3 text-[48px] md:text-[84px]`}>{home.joinHeading}</h2>
            {home.joinText && <p className="mt-5 max-w-[40ch] text-[19px] leading-relaxed text-white/90">{home.joinText}</p>}
            <div className="mt-7 flex flex-wrap gap-3">
              <VisitButton url={settings.visitFormUrl} tone="gold" />
              <EmailButton url={settings.emailListUrl} tone="white" />
            </div>
          </div>
          <dl className="md:col-span-5 md:col-start-8">
            {[
              ["When", `${settings.meetingDays}, ${settings.meetingTime}`],
              ["Where", `${settings.meetingPlace}, ${settings.meetingAddress}`],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-white/30 py-5">
                <dt className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#e5d3f0]">{k}</dt>
                <dd className="mt-1 text-[19px]">{v}</dd>
              </div>
            ))}
            <div className="border-t border-white/30 py-5">
              <dt className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#e5d3f0]">First time?</dt>
              <dd className="mt-1 text-[19px]">
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
