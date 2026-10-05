import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo as PhotoType, Settings } from "@/lib/types";
import { navItems } from "@/lib/nav";
import { MobileMenu, NavLinks } from "./NavLinks";
import { Photo } from "./Photo";

export const headline = "font-display uppercase leading-[0.95] tracking-[0.005em]";
export const label = "font-sans text-[12px] font-bold uppercase tracking-[0.16em]";
export const container = "mx-auto max-w-[1280px] px-5 md:px-10";

/** Small uppercase section label with a rule under it, like a newspaper column head. */
export function Kicker({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <p className={`${label} inline-block border-b pb-1 ${invert ? "border-white/70 text-white" : "border-ink text-ink"}`}>{children}</p>
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
      <mark className="bg-gold px-1.5 py-0.5 font-sans text-[0.85em] font-bold text-ink">{NEEDS}</mark>
      {after}
    </>
  );
}

/** Plain text from Studio, with an empty line between paragraphs. */
export function Paragraphs({ text, className = "" }: { text?: string; className?: string }) {
  if (!text) return null;
  return (
    <div className={`space-y-4 ${className}`}>
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

export function NeedsPhoto({ label: what, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex h-full w-full flex-col justify-end border border-dashed border-ink/40 bg-newsprint p-5 ${className}`}>
      <span className="self-start bg-gold px-1.5 py-0.5 font-sans text-sm font-bold text-ink">{NEEDS}</span>
      <span className="mt-2 font-sans text-[14px] font-semibold text-muted">Photo needed: {what}</span>
    </div>
  );
}

/** A photo with a newspaper caption under it. The caption is the photo's description. */
export function Figure({ photo, sizes, aspect = "aspect-[3/2]", caption = true, preload, className = "" }: {
  photo: PhotoType;
  sizes: string;
  aspect?: string;
  caption?: boolean;
  preload?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`relative w-full ${aspect}`}>
        <Photo photo={photo} sizes={sizes} preload={preload} />
      </div>
      {caption && <figcaption className="border-b border-ink pb-2 pt-2 text-[14px] italic leading-snug text-muted">{photo.alt}.</figcaption>}
    </figure>
  );
}

export function VisitButton({ url, className = "", tone = "purple" }: { url: string; className?: string; tone?: "purple" | "gold" }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 font-sans text-[14px] font-bold uppercase tracking-[0.08em] transition-colors ${
        tone === "gold" ? "bg-gold text-ink hover:bg-white" : "bg-purple text-white hover:bg-ink"
      } ${className}`}
    >
      Visit a meeting
      <span className="sr-only">(opens a Google Form in a new tab)</span>
    </a>
  );
}

export function Header({ visitUrl }: { visitUrl: string }) {
  return (
    <header className="sticky top-0 z-30 rule-double-b bg-paper">
      <div className={`${container} flex items-center gap-6 py-3`}>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={48} height={46} className="h-11 w-auto" />
          <span className="leading-none">
            <span className={`${headline} block text-[24px]`}>Troop 65</span>
            <span className={`${label} mt-1 block text-[10px] text-muted`}>Long Beach, California</span>
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
      <div className="border-t border-ink px-5 py-2 sm:hidden">
        <VisitButton url={visitUrl} className="w-full" />
      </div>
    </header>
  );
}

/** Top of every inner page: the section name set like a newspaper section front. */
export function SectionMasthead({ section, heading, intro, children }: { section: string; heading: string; intro?: string; children?: ReactNode }) {
  return (
    <div className={container}>
      <div className="border-b border-ink pb-3 pt-10 md:pt-14">
        <p className={`${headline} text-[64px] text-purple md:text-[128px]`}>{section}</p>
      </div>
      <div className={`flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-ink py-2 ${label} text-[11px]`}>
        <span>Troop 65 · Long Beach, Calif.</span>
        <span>Est. 1937</span>
      </div>
      <div className="grid gap-6 py-10 md:grid-cols-12 md:py-14">
        <h1 className={`${headline} text-[40px] md:col-span-7 md:text-[64px]`}>{heading}</h1>
        <div className="text-[19px] leading-relaxed md:col-span-5 md:self-end">
          <Paragraphs text={intro} />
          {children}
        </div>
      </div>
    </div>
  );
}

export function Footer({ settings }: { settings: Settings }) {
  return (
    <footer className="mt-0 bg-ink text-white/80">
      <div className={`${container} py-12`}>
        <p className={`${headline} border-b border-white/30 pb-4 text-[44px] text-white md:text-[72px]`}>
          The Purple <span className="text-gold">Plague</span>
        </p>
        <div className="grid gap-10 pt-8 text-[16px] md:grid-cols-12">
          <div className="flex items-start gap-4 md:col-span-5">
            <Image src="/logo.png" alt="Troop 65 logo" width={64} height={61} />
            <p>
              Troop 65, Long Beach Area Council, Iron Star District.
              <br />
              {settings.meetingDays}, {settings.meetingTime}.
              <br />
              {settings.meetingPlace}, {settings.meetingAddress}.
            </p>
          </div>
          <nav aria-label="Footer" className="font-sans text-[15px] md:col-span-3">
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
          <ul className="space-y-2 font-sans text-[15px] md:col-span-4">
            <li>
              <Link href="/troop" className="hover:text-gold">
                Troop bulletin board: calendar, links, forms
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
      </div>
    </footer>
  );
}
