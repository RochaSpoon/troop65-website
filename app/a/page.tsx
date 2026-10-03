import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { VISIT_FORM_URL, nav, meeting, rooms, trips } from "@/lib/site";

export const metadata: Metadata = { title: "Direction A | Troop 65" };

// Direction A: "Field manual". White page, condensed display type, hard rules,
// big photos, outlined numerals lifted from the badge.

const display = "font-shoulders uppercase leading-[0.9] tracking-[-0.01em]";

function VisitButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={VISIT_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-gold px-5 py-3 font-public text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-gold ${className}`}
    >
      Visit a meeting
      <span aria-hidden="true">&rarr;</span>
      <span className="sr-only">(opens a Google Form in a new tab)</span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95">
      <div className="mx-auto flex max-w-[1360px] items-center gap-6 px-5 py-3 md:px-10">
        <Link href="/a" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={52} height={50} className="h-11 w-auto md:h-[52px]" />
          <span className="leading-none">
            <span className={`${display} block text-[28px] font-extrabold text-purple`}>Troop 65</span>
            <span className="block font-public text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Long Beach, California
            </span>
          </span>
        </Link>
        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex gap-7 font-public text-[15px] font-semibold">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-purple">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/troop" className="text-muted hover:text-purple">
                Troop
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto hidden sm:block lg:ml-0">
          <VisitButton />
        </div>
        <details className="group relative ml-auto sm:ml-0 lg:hidden">
          <summary className="cursor-pointer list-none border-2 border-ink px-3 py-2 font-public text-sm font-bold uppercase tracking-wider">
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-56 border border-line bg-paper p-2 font-public font-semibold shadow-none">
            {[...nav, { label: "Troop", href: "/troop" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block px-3 py-2 hover:bg-stone">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="border-t border-line px-5 py-2 sm:hidden">
        <VisitButton className="w-full justify-center" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[62vh] min-h-[420px] w-full md:h-[78vh] md:max-h-[860px]">
        <Image
          src="/photos/troop-bear-statue.jpg"
          alt="Troop 65 scouts in purple shirts gathered on a carved wooden bear in a pine forest"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
      </div>
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="relative -mt-28 bg-purple px-6 py-8 text-white md:-mt-56 md:w-[62%] md:px-12 md:py-12">
          <p className="font-public text-[13px] font-bold uppercase tracking-[0.18em] text-gold">
            Scouts BSA &middot; Iron Star District
          </p>
          <h1 className={`${display} mt-4 text-[56px] font-extrabold md:text-[104px]`}>
            Scouting in Long Beach since 1937.
          </h1>
          <p className="mt-6 max-w-[34ch] font-public text-lg leading-relaxed text-white/90 md:text-xl">
            Troop 65 is a Boy Scout troop of about 40 scouts. We meet two Tuesday nights a month and go camping
            together.
          </p>
        </div>
      </div>
    </section>
  );
}

function Facts() {
  const facts = [
    { n: "1937", label: "The year the troop started" },
    { n: "200+", label: "Eagle Scouts from Troop 65" },
    { n: "40", label: "Scouts in the troop today, about" },
    { n: "4", label: "Patrols" },
  ];
  return (
    <section aria-label="Troop 65 by the numbers" className="mx-auto max-w-[1360px] px-5 pt-16 md:px-10 md:pt-24">
      <dl className="grid grid-cols-2 border-t-4 border-ink md:grid-cols-4">
        {facts.map((f, i) => (
          <div
            key={f.n}
            className={`border-b border-line py-6 pr-4 md:border-b-0 md:py-8 md:pl-6 ${i > 0 ? "md:border-l" : "md:pl-0"} ${i % 2 === 1 ? "border-l pl-4" : ""}`}
          >
            <dt className="sr-only">{f.label}</dt>
            <dd className={`${display} numeral-outline-purple text-[72px] font-black md:text-[112px]`}>{f.n}</dd>
            <dd className="mt-2 font-public text-[15px] font-semibold text-muted">{f.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Tuesday() {
  const rows = [
    { t: "6:30", what: "Patrol meetings", body: "Each patrol meets in its own room." },
    { t: "7:30", what: "Troop meeting", body: "Then the whole troop meets together." },
    { t: "8:30", what: "Pick up", body: "Meetings end at 8:30 pm." },
  ];
  return (
    <section className="mx-auto grid max-w-[1360px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
      <div className="md:col-span-5">
        <p className="font-public text-[13px] font-bold uppercase tracking-[0.18em] text-purple">Meetings</p>
        <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>A Tuesday night at Troop 65</h2>
        <p className="mt-5 max-w-[38ch] font-public text-lg leading-relaxed text-muted">
          We meet the {meeting.days} at {meeting.place}.
        </p>
        <div className="relative mt-8 aspect-[4/3] w-full">
          <Image
            src="/photos/campfire.jpg"
            alt="Scouts around a campfire ring at dusk, cooking over the fire on sticks"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <ol className="md:col-span-6 md:col-start-7 md:pt-16">
        {rows.map((r) => (
          <li key={r.t} className="grid grid-cols-[96px_1fr] gap-4 border-t border-ink py-7 md:grid-cols-[140px_1fr]">
            <span className={`${display} text-[44px] font-black text-purple md:text-[60px]`}>{r.t}</span>
            <span>
              <span className="block font-public text-xl font-bold">{r.what}</span>
              <span className="mt-1 block font-public text-base leading-relaxed text-muted">{r.body}</span>
            </span>
          </li>
        ))}
        <li className="border-t border-ink pt-7 font-public text-base leading-relaxed text-muted">
          Our four patrols are the Sabertooths, Eagles, Diamondbacks, and Falcons.
        </li>
      </ol>
    </section>
  );
}

function Outdoors() {
  const [big, ...rest] = trips;
  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-public text-[13px] font-bold uppercase tracking-[0.18em] text-purple">Outdoors</p>
            <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>Where we went this year</h2>
          </div>
          <p className="max-w-[40ch] font-public text-lg leading-relaxed text-muted md:col-span-4 md:col-start-9">
            Campouts are optional. Most run Friday night to Sunday morning.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          <figure className="relative md:col-span-7 md:row-span-2">
            <div className="relative aspect-square w-full md:aspect-auto md:h-full md:min-h-[640px]">
              <Image src={big.photo} alt={big.alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="absolute bottom-0 left-0 bg-ink px-5 py-3 font-public text-white">
              <span className="font-bold">{big.name}</span> <span className="text-gold">{big.year}</span>
              <span className="block text-sm text-white/75">{big.note}</span>
            </figcaption>
          </figure>
          {rest.map((t) => (
            <figure key={t.name} className="relative md:col-span-5">
              <div className="relative aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-[312px]">
                <Image src={t.photo} alt={t.alt} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="absolute bottom-0 left-0 bg-ink px-5 py-3 font-public text-white">
                <span className="font-bold">{t.name}</span> <span className="text-gold">{t.year}</span>
                <span className="block text-sm text-white/75">{t.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link href="/what-we-do" className="mt-10 inline-block border-b-2 border-purple pb-1 font-public font-bold text-purple">
          What we do
        </Link>
      </div>
    </section>
  );
}

function EagleLair() {
  return (
    <section className="bg-purple-ink text-white">
      <div className="mx-auto grid max-w-[1360px] md:grid-cols-12">
        <div className="px-5 py-20 md:col-span-6 md:px-10 md:py-28">
          <p className="font-public text-[13px] font-bold uppercase tracking-[0.18em] text-gold">The Eagle Lair</p>
          <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>
            More than <span className="numeral-outline-gold">200</span> Eagle Scouts
          </h2>
          <p className="mt-6 max-w-[42ch] font-public text-lg leading-relaxed text-white/85">
            When a scout earns Eagle with Troop 65, their name is burned into a piece of leather and hung in our Eagle
            Lair. The troop has kept this up for more than 70 years. Come to a meeting and you can read every name.
          </p>
        </div>
        <div className="relative aspect-[3.3/1] self-center md:col-span-6 md:mr-10">
          <Image
            src="/photos/eagle-lair-header-2.jpg"
            alt="Leather panel hanging from a branch, burned with the words Troop 65 Eagles Lair"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Space() {
  return (
    <section className="mx-auto grid max-w-[1360px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
      <div className="md:col-span-5">
        <p className="font-public text-[13px] font-bold uppercase tracking-[0.18em] text-purple">Our space</p>
        <h2 className={`${display} mt-3 text-[48px] font-extrabold md:text-[72px]`}>A basement of our own</h2>
        <p className={`${display} numeral-outline-purple mt-8 text-[88px] font-black md:text-[128px]`}>2,500</p>
        <p className="mt-3 font-public text-[15px] font-semibold text-muted">Square feet, about</p>
        <Link href="/our-space" className="mt-10 inline-block border-b-2 border-purple pb-1 font-public font-bold text-purple">
          Walk through the rooms
        </Link>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        <div className="relative aspect-square w-full">
          <Image
            src="/photos/mural-60th.jpg"
            alt="Painted Troop 65 60th anniversary mural on the basement wall, with mountains and the years 1937 to 1997"
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover object-[50%_35%]"
          />
        </div>
        <ul className="mt-8 grid font-public text-[17px] font-semibold sm:grid-cols-2 sm:gap-x-8">
          {rooms.map((r) => (
            <li key={r} className="border-t border-line py-3">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section className="bg-purple text-white">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-6">
          <h2 className={`${display} text-[56px] font-extrabold md:text-[96px]`}>Come see a meeting</h2>
          <p className="mt-6 max-w-[40ch] font-public text-lg leading-relaxed text-white/90">
            Bring your scout on a Tuesday night. Fill out the form so we know to expect you.
          </p>
          <VisitButton className="mt-8" />
        </div>
        <dl className="grid gap-0 font-public md:col-span-5 md:col-start-8">
          {[
            ["When", `${meeting.days}, ${meeting.time}`],
            ["Where", `${meeting.place}, ${meeting.address}`],
            ["Who", "Youth who are 10 and in 5th grade, up to age 18. Cub Scouts who earned Arrow of Light can bridge over."],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-white/30 py-5">
              <dt className="text-[13px] font-bold uppercase tracking-[0.18em] text-gold">{k}</dt>
              <dd className="mt-1 text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-[1360px] gap-8 px-5 py-14 font-public text-[15px] md:grid-cols-12 md:px-10">
        <div className="flex items-center gap-4 md:col-span-5">
          <Image src="/logo.png" alt="Troop 65 logo" width={72} height={69} />
          <p>
            <span className={`${display} block text-2xl font-extrabold text-white`}>Troop 65</span>
            Long Beach Area Council, Iron Star District
          </p>
        </div>
        <ul className="space-y-2 md:col-span-3">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-gold">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 md:col-span-4">
          <li>
            <Link href="/troop" className="hover:text-gold">
              Troop section (calendar, links, forms)
            </Link>
          </li>
          <li>
            <a href="https://lists.simplelists.com/troop65/subscribe/" className="hover:text-gold">
              Get troop emails
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default function DirectionA() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-gold focus:p-3">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Facts />
        <Tuesday />
        <Outdoors />
        <EagleLair />
        <Space />
        <Join />
      </main>
      <Footer />
    </>
  );
}
