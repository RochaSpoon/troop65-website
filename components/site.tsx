import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo as PhotoType, Settings } from "@/lib/types";
import { navItems } from "@/lib/nav";
import { MobileMenu, NavLinks } from "./NavLinks";
import { Photo } from "./Photo";

export const display = "font-shoulders uppercase leading-[0.9] tracking-[-0.01em]";
export const container = "mx-auto max-w-[1360px] px-5 md:px-10";

export function Kicker({ children, tone = "purple" }: { children: ReactNode; tone?: "purple" | "gold" }) {
  return (
    <p className={`font-public text-[13px] font-bold uppercase tracking-[0.18em] ${tone === "gold" ? "text-gold" : "text-purple"}`}>
      {children}
    </p>
  );
}

/** Wraps numbers in a heading in the outlined style from the badge. */
export function Numerals({ text, outline = "numeral-outline-purple" }: { text: string; outline?: string }) {
  const parts = text.split(/(\d[\d,]*\+?)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^\d/.test(p) ? (
          <span key={i} className={outline}>
            {p}
          </span>
        ) : (
          p
        ),
      )}
    </>
  );
}

const NEEDS = "[NEEDS INFO]";

/** Missing facts stay visible on the page until someone fills them in. */
function withMarker(line: string) {
  if (!line.includes(NEEDS)) return line;
  const [before, after] = line.split(NEEDS);
  return (
    <>
      {before}
      <mark className="bg-gold px-1.5 py-0.5 font-bold text-ink">{NEEDS}</mark>
      {after}
    </>
  );
}

/** Plain text from Studio, with an empty line between paragraphs. */
export function Paragraphs({ text, className = "" }: { text?: string; className?: string }) {
  if (!text) return null;
  return (
    <div className={`space-y-5 ${className}`}>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{withMarker(p)}</p>
        ))}
    </div>
  );
}

export function NeedsPhoto({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex h-full w-full flex-col justify-end bg-stone p-6 ${className}`}>
      <span className="self-start bg-gold px-1.5 py-0.5 font-public text-sm font-bold text-ink">{NEEDS}</span>
      <span className="mt-2 font-public text-[15px] font-semibold text-muted">Photo needed: {label}</span>
    </div>
  );
}

export function VisitButton({ url, className = "" }: { url: string; className?: string }) {
  return (
    <a
      href={url}
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

export function Header({ visitUrl }: { visitUrl: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1360px] items-center gap-6 px-5 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={52} height={50} className="h-11 w-auto md:h-[52px]" />
          <span className="leading-none">
            <span className={`${display} block text-[28px] font-extrabold text-purple`}>Troop 65</span>
            <span className="block font-public text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Long Beach, California
            </span>
            <span className="sr-only">, home</span>
          </span>
        </Link>
        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <NavLinks />
        </nav>
        <div className="ml-auto hidden sm:block lg:ml-0">
          <VisitButton url={visitUrl} />
        </div>
        <div className="ml-auto sm:ml-0 lg:hidden">
          <MobileMenu />
        </div>
      </div>
      <div className="border-t border-line px-5 py-2 sm:hidden">
        <VisitButton url={visitUrl} className="w-full justify-center" />
      </div>
    </header>
  );
}

export function Footer({ settings }: { settings: Settings }) {
  return (
    <footer className="bg-ink text-white/80">
      <div className={`${container} grid gap-10 py-14 font-public text-[15px] md:grid-cols-12`}>
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Troop 65 logo" width={72} height={69} />
            <p>
              <span className={`${display} block text-2xl font-extrabold text-white`}>Troop 65</span>
              Long Beach Area Council, Iron Star District
            </p>
          </div>
          <p className="mt-6 max-w-[40ch]">
            {settings.meetingDays}, {settings.meetingTime}
            <br />
            {settings.meetingPlace}
            <br />
            {settings.meetingAddress}
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2 md:col-span-4">
          <li>
            <Link href="/troop" className="hover:text-gold">
              Troop section: calendar, links, forms
            </Link>
          </li>
          {settings.emailListUrl && (
            <li>
              <a href={settings.emailListUrl} className="hover:text-gold">
                Get troop emails
              </a>
            </li>
          )}
          <li>
            <a href={settings.visitFormUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Visit a meeting
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

/** Top of every inner page: kicker, big heading, intro, and an optional wide photo. */
export function PageHero({ kicker, heading, intro, photo, children }: { kicker: string; heading: string; intro?: string; photo?: PhotoType | null; children?: ReactNode }) {
  return (
    <section>
      <div className={`${container} grid gap-8 pb-12 pt-14 md:grid-cols-12 md:pb-16 md:pt-24`}>
        <div className="md:col-span-7">
          <Kicker>{kicker}</Kicker>
          <h1 className={`${display} mt-4 text-[56px] font-extrabold md:text-[112px]`}>
            <Numerals text={heading} />
          </h1>
        </div>
        <div className="font-public text-lg leading-relaxed text-muted md:col-span-4 md:col-start-9 md:self-end md:text-xl">
          <Paragraphs text={intro} />
          {children}
        </div>
      </div>
      {photo?.src && (
        <div className="relative aspect-[4/3] w-full md:aspect-[21/8]">
          <Photo photo={photo} sizes="100vw" preload />
        </div>
      )}
    </section>
  );
}
