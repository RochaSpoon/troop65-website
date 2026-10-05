import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo as PhotoType, Settings } from "@/lib/types";
import { navItems } from "@/lib/nav";
import { MobileMenu, NavLinks } from "./NavLinks";
import { Photo } from "./Photo";

export const container = "mx-auto max-w-[1240px] px-5 md:px-10";
export const heading = "font-sans font-extrabold leading-[1.02] tracking-[-0.025em]";

export function Eyebrow({ children, tone = "purple" }: { children: ReactNode; tone?: "purple" | "gold" }) {
  return (
    <p className={`font-sans text-[13px] font-extrabold uppercase tracking-[0.12em] ${tone === "gold" ? "text-gold" : "text-purple"}`}>{children}</p>
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
      <mark className="rounded bg-gold px-1.5 py-0.5 text-[0.9em] font-bold text-ink">{NEEDS}</mark>
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

export function NeedsPhoto({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex h-full w-full flex-col justify-end rounded-[14px] border-2 border-dashed border-purple/30 bg-white p-5 ${className}`}>
      <span className="self-start rounded bg-gold px-1.5 py-0.5 text-sm font-bold text-ink">{NEEDS}</span>
      <span className="mt-2 text-[15px] font-semibold text-muted">Photo needed: {label}</span>
    </div>
  );
}

/** A rounded photo with an optional caption. `whole` shows the full photo without cropping. */
export function Figure({ photo, sizes, aspect = "aspect-[4/3]", caption = false, whole = false, preload, className = "" }: {
  photo: PhotoType;
  sizes: string;
  aspect?: string;
  caption?: boolean;
  whole?: boolean;
  preload?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      {whole ? (
        <div className="overflow-hidden rounded-[14px] bg-white">
          <Photo photo={photo} sizes={sizes} preload={preload} whole />
        </div>
      ) : (
        <div className={`relative w-full overflow-hidden rounded-[14px] ${aspect}`}>
          <Photo photo={photo} sizes={sizes} preload={preload} />
        </div>
      )}
      {caption && <figcaption className="mt-2 text-[14px] leading-snug text-muted">{photo.alt}</figcaption>}
    </figure>
  );
}

export function VisitButton({ url, className = "", tone = "purple" }: { url: string; className?: string; tone?: "purple" | "gold" }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[16px] font-extrabold transition-colors ${
        tone === "gold" ? "bg-gold text-ink hover:bg-white" : "bg-purple text-white hover:bg-ink"
      } ${className}`}
    >
      Visit a meeting
      <span className="sr-only">(opens a Google Form in a new tab)</span>
    </a>
  );
}

/** Splits a line into letters, each pushed in slightly crooked. Fixed offsets, so it renders the same every time. */
function BoardLine({ text, row }: { text: string; row: number }) {
  return (
    <>
      {[...text].map((ch, i) =>
        ch === " " ? (
          " "
        ) : (
          <span
            key={i}
            className="inline-block"
            style={{ transform: `translateY(${(((i * 7 + row * 13) % 11) % 3) - 1}px) rotate(${(((i * 7 + row * 13) % 11) - 5) * 0.35}deg)` }}
          >
            {ch}
          </span>
        ),
      )}
    </>
  );
}

/**
 * The felt letter board. Lines come from Studio. A line starting with "*" is set in gold;
 * a line starting with "-" is set smaller.
 */
export function LetterBoard({ lines, className = "" }: { lines: string[]; className?: string }) {
  const clean = lines.map((l) => l.replace(/^[*-]\s*/, ""));
  return (
    <div
      role="img"
      aria-label={`Letter board: ${clean.join(". ")}.`}
      className={`felt rounded-md border-[14px] border-frame px-[clamp(14px,3vw,36px)] py-[clamp(22px,4vw,44px)] ${className}`}
    >
      <div aria-hidden="true" className="space-y-[clamp(4px,1vw,12px)]">
        {lines.map((line, row) => {
          const gold = line.startsWith("*");
          const small = line.startsWith("-");
          return (
            <p
              key={row}
              className={`text-center font-board font-bold uppercase leading-[1.55] tracking-[0.12em] ${
                small ? "text-[clamp(14px,1.9vw,24px)] text-[#e8dbf1]" : "text-[clamp(19px,3.1vw,40px)]"
              } ${gold ? "text-gold" : small ? "" : "text-[#fbf8fd]"}`}
            >
              <BoardLine text={clean[row]} row={row} />
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function Header({ visitUrl }: { visitUrl: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-lilac/95 backdrop-blur">
      <div className={`${container} flex items-center gap-6 py-3`}>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={46} height={44} className="h-11 w-auto" />
          <span className="text-[21px] font-extrabold tracking-[-0.02em]">
            Troop 65<span className="sr-only">, home</span>
          </span>
        </Link>
        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <NavLinks />
        </nav>
        <div className="ml-auto hidden sm:block lg:ml-0">
          <VisitButton url={visitUrl} className="px-5 py-3 text-[15px]" />
        </div>
        <div className="ml-auto sm:ml-0 lg:hidden">
          <MobileMenu />
        </div>
      </div>
      <div className="border-t border-line px-5 py-2 sm:hidden">
        <VisitButton url={visitUrl} className="w-full py-3" />
      </div>
    </header>
  );
}

/** Top of every inner page. */
export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <div className={`${container} grid gap-6 pb-10 pt-12 md:grid-cols-12 md:pb-14 md:pt-20`}>
      <div className="md:col-span-7">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className={`${heading} mt-3 text-[44px] md:text-[76px]`}>{title}</h1>
      </div>
      <div className="text-[19px] leading-relaxed text-muted md:col-span-5 md:self-end">
        <Paragraphs text={intro} />
        {children}
      </div>
    </div>
  );
}

export function Footer({ settings }: { settings: Settings }) {
  return (
    <footer className="bg-frame text-white/80">
      <div className={`${container} grid gap-10 py-14 text-[16px] md:grid-cols-12`}>
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Troop 65 logo" width={64} height={61} />
            <p className="font-board text-[22px] font-bold uppercase tracking-[0.12em] text-white">
              Troop 65 <span className="text-gold">Long Beach</span>
            </p>
          </div>
          <p className="mt-5 max-w-[42ch]">
            {settings.meetingDays}, {settings.meetingTime}.
            <br />
            {settings.meetingPlace}, {settings.meetingAddress}.
            <br />
            Long Beach Area Council, Iron Star District.
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
              Troop page: calendar, links, forms
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
