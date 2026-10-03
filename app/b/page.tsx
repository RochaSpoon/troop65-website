import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { VISIT_FORM_URL, nav, meeting, rooms, trips } from "@/lib/site";

export const metadata: Metadata = { title: "Direction B | Troop 65" };

// Direction B: "Badge". Purple carries the page, slab headings, and a round seal
// drawn from the logo's ring of lettering.

const slab = "font-zilla font-bold leading-[0.95] tracking-[-0.015em]";
const label = "font-franklin text-[12px] font-bold uppercase tracking-[0.2em]";

function VisitButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={VISIT_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-[2px] bg-gold px-6 py-3.5 font-franklin text-[15px] font-bold text-purple-ink transition-colors hover:bg-white ${className}`}
    >
      Visit a meeting
      <span className="sr-only">(opens a Google Form in a new tab)</span>
    </a>
  );
}

/** Circular seal with text set on a ring, like the logo badge. */
function Seal({ top, bottom, center, sub }: { top: string; bottom: string; center: string; sub: string }) {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" role="img" aria-label={`${center} ${sub}`}>
      <defs>
        <path id="seal-top" d="M 32 120 A 88 88 0 0 1 208 120" />
        <path id="seal-bottom" d="M 20 120 A 100 100 0 0 0 220 120" />
      </defs>
      <circle cx="120" cy="120" r="118" fill="#ffb308" />
      <circle cx="120" cy="120" r="110" fill="#7109a1" />
      <circle cx="120" cy="120" r="72" fill="none" stroke="#ffb308" strokeWidth="3" />
      <text className="font-franklin" fontSize="12.5" fontWeight="800" letterSpacing="1.6" fill="#fff">
        <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
          {top}
        </textPath>
      </text>
      <text className="font-franklin" fontSize="12.5" fontWeight="800" letterSpacing="1.6" fill="#fff">
        <textPath href="#seal-bottom" startOffset="50%" textAnchor="middle">
          {bottom}
        </textPath>
      </text>
      <text x="120" y="128" textAnchor="middle" className="font-zilla" fontSize="54" fontWeight="700" fill="#fff">
        {center}
      </text>
      <text x="120" y="152" textAnchor="middle" className="font-franklin" fontSize="12" fontWeight="800" letterSpacing="2" fill="#ffb308">
        {sub}
      </text>
    </svg>
  );
}

function Header() {
  return (
    <header className="bg-purple text-white">
      <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-4 py-3 md:px-8">
        <Link href="/b" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={56} height={54} className="h-12 w-auto md:h-14" />
          <span className={`${slab} text-[26px] md:text-[30px]`}>Troop 65</span>
        </Link>
        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex gap-6 font-franklin text-[15px] font-semibold">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="border-b-2 border-transparent pb-1 hover:border-gold">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/troop" className="border-b-2 border-transparent pb-1 text-white/70 hover:border-gold">
                Troop
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto hidden sm:block lg:ml-0">
          <VisitButton />
        </div>
        <details className="relative ml-auto sm:ml-0 lg:hidden">
          <summary className="cursor-pointer list-none border border-white/60 px-3 py-2 font-franklin text-sm font-bold">
            Menu
          </summary>
          <ul className="absolute right-0 z-30 mt-2 w-56 bg-purple-ink p-2 font-franklin font-semibold">
            {[...nav, { label: "Troop", href: "/troop" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="block px-3 py-2 hover:bg-purple">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="px-4 pb-3 sm:hidden">
        <VisitButton className="w-full" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-purple text-white">
      <div className="mx-auto grid max-w-[1320px] md:grid-cols-12">
        <div className="relative z-10 px-4 pb-14 pt-10 md:col-span-6 md:px-8 md:pb-24 md:pt-20">
          <p className={`${label} text-gold`}>Long Beach, California</p>
          <h1 className={`${slab} mt-5 text-[54px] md:text-[92px]`}>
            The Purple
            <br />
            Plague.
          </h1>
          <p className="mt-6 max-w-[36ch] font-franklin text-lg leading-relaxed text-white/90 md:text-xl">
            We are Troop 65, a Boy Scout troop in Long Beach since 1937.
          </p>
          <dl className="mt-10 grid max-w-[520px] grid-cols-2 border-t border-white/30 font-franklin">
            <div className="border-r border-white/30 py-5 pr-4">
              <dt className={`${label} text-white/70`}>Meetings</dt>
              <dd className="mt-1 text-[17px] font-semibold">1st and 3rd Tuesdays</dd>
            </div>
            <div className="py-5 pl-5">
              <dt className={`${label} text-white/70`}>Time</dt>
              <dd className="mt-1 text-[17px] font-semibold">{meeting.time}</dd>
            </div>
          </dl>
        </div>
        <div className="relative min-h-[380px] md:col-span-6 md:min-h-[640px]">
          <Image
            src="/photos/camporee-gate.jpg"
            alt="Troop 65 scouts in purple shirts gathered under the entrance gate at the 2026 Firestone camporee"
            fill
            preload
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[45%_50%]"
          />
          <div className="absolute -bottom-16 left-4 h-36 w-36 md:-left-24 md:bottom-12 md:h-52 md:w-52">
            <Seal top="SERVING GOD AND COUNTRY" bottom="SINCE 1937" center="200+" sub="EAGLE SCOUTS" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto grid max-w-[1320px] gap-10 px-4 pb-16 pt-28 md:grid-cols-12 md:px-8 md:py-28">
      <div className="md:col-span-4">
        <p className={`${label} text-purple`}>Who we are</p>
        <p className={`${slab} numeral-outline-purple mt-3 text-[120px] md:text-[176px]`}>65</p>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <h2 className={`${slab} text-[38px] text-ink md:text-[56px]`}>About 40 scouts in four patrols.</h2>
        <p className="mt-6 max-w-[56ch] font-franklin text-lg leading-relaxed text-muted">
          The Sabertooths, Eagles, Diamondbacks, and Falcons each have their own patrol leader and their own room. Scouts
          hold 17 troop jobs, from Senior Patrol Leader to Bugler. Youth can join at 10 and in 5th grade, and stay until
          they turn 18.
        </p>
        <Link href="/leadership" className="mt-8 inline-block bg-purple px-5 py-3 font-franklin font-bold text-white hover:bg-purple-deep">
          Meet the troop officers
        </Link>
      </div>
    </section>
  );
}

function Mosaic() {
  const tiles = [
    { src: "/photos/archery.jpg", alt: "Scout smiling next to an archery target with arrows in the bullseye", cls: "md:col-span-4 md:row-span-2" },
    { src: "/photos/canoe.jpg", alt: "Two scouts in a purple canoe, one holding a paddle over his head", cls: "md:col-span-4" },
    { src: "/photos/climbing-tower.jpg", alt: "Two scouts in climbing helmets and harnesses in front of a climbing tower", cls: "md:col-span-4 md:row-span-2" },
    { src: "/photos/creek-crossing.jpg", alt: "Four scouts with backpacks crossing a creek on a log", cls: "md:col-span-4" },
  ];
  return (
    <section aria-labelledby="outdoors-heading" className="bg-purple-ink text-white">
      <div className="mx-auto max-w-[1320px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="outdoors-heading" className={`${slab} text-[40px] md:col-span-7 md:text-[64px]`}>
            Where we went in 2026.
          </h2>
          <p className="max-w-[40ch] font-franklin text-lg leading-relaxed text-white/80 md:col-span-4 md:col-start-9">
            Campouts are optional and usually run Friday night to Sunday morning.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-1 md:auto-rows-[260px] md:grid-cols-12">
          {tiles.map((t) => (
            <div key={t.src} className={`relative aspect-square md:aspect-auto ${t.cls}`}>
              <Image src={t.src} alt={t.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
        <ul className="mt-10 grid border-t border-white/25 font-franklin md:grid-cols-3">
          {trips.map((t) => (
            <li key={t.name} className="border-b border-white/25 py-5 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <span className={`${label} text-gold`}>{t.year}</span>
              <span className="mt-1 block text-xl font-semibold">{t.name}</span>
              <span className="block text-white/70">{t.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function EagleLair() {
  return (
    <section className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-16 md:grid-cols-12 md:px-8 md:py-28">
      <div className="relative aspect-[3.3/1] w-full md:col-span-7">
        <Image
          src="/photos/eagle-lair-header.jpg"
          alt="Leather panel burned with the words Troop 65 Eagles Lair"
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="md:col-span-4 md:col-start-9">
        <p className={`${label} text-purple`}>The Eagle Lair</p>
        <h2 className={`${slab} mt-3 text-[38px] md:text-[52px]`}>
          <span className="text-purple">200+</span> names in leather.
        </h2>
        <p className="mt-5 font-franklin text-lg leading-relaxed text-muted">
          Every Troop 65 Eagle Scout gets their name burned into leather and hung on our wall. We have done it for more
          than 70 years.
        </p>
      </div>
    </section>
  );
}

function Space() {
  return (
    <section className="bg-stone">
      <div className="mx-auto grid max-w-[1320px] md:grid-cols-12">
        <div className="relative min-h-[360px] md:col-span-5">
          <Image
            src="/photos/flag-room.jpg"
            alt="A scout in uniform in front of the American flag and troop banners in the meeting room"
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover object-[50%_30%]"
          />
        </div>
        <div className="px-4 py-16 md:col-span-6 md:col-start-7 md:px-0 md:py-24 md:pr-8">
          <p className={`${label} text-purple`}>Our space</p>
          <h2 className={`${slab} mt-3 text-[38px] md:text-[56px]`}>About 2,500 square feet, all ours.</h2>
          <p className="mt-5 max-w-[48ch] font-franklin text-lg leading-relaxed text-muted">
            The troop meets in its own basement at {meeting.place}.
          </p>
          <ol className="mt-8 font-franklin">
            {rooms.map((r, i) => (
              <li key={r} className="flex items-baseline gap-5 border-t border-line py-3 text-[17px] font-semibold">
                <span className="w-6 font-zilla text-purple">{String(i + 1).padStart(2, "0")}</span>
                {r}
              </li>
            ))}
          </ol>
          <Link href="/our-space" className="mt-8 inline-block border-b-2 border-purple pb-1 font-franklin font-bold text-purple">
            See each room
          </Link>
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section className="bg-purple text-white">
      <div className="mx-auto max-w-[1320px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <h2 className={`${slab} text-[48px] md:col-span-7 md:text-[84px]`}>Come to a Tuesday meeting.</h2>
          <div className="md:col-span-4 md:col-start-9">
            <p className="font-franklin text-lg leading-relaxed text-white/90">
              {meeting.days}, {meeting.time}. {meeting.place}, {meeting.address}.
            </p>
            <VisitButton className="mt-6 w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-purple-ink font-franklin text-[15px] text-white/75">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Troop 65 logo" width={64} height={61} />
          <p>
            Troop 65, Long Beach, California
            <br />
            Long Beach Area Council, Iron Star District
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:ml-auto">
          <li>
            <Link href="/troop" className="hover:text-gold">
              Troop section
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

export default function DirectionB() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-gold focus:p-3">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Mosaic />
        <EagleLair />
        <Space />
        <Join />
      </main>
      <Footer />
    </>
  );
}
