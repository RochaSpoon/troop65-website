"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "./nav-links";
import { siteConfig } from "@/content/site-config";
import Button from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-parchment-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo/troop-65-patch.jpg"
            alt={`${siteConfig.troopName} official patch`}
            width={44}
            height={44}
            className="rounded-full shadow-patch"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold uppercase tracking-tight text-purple-700">
              {siteConfig.troopName}
            </span>
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-600">
              {siteConfig.nickname}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                  active ? "text-purple-700" : "text-ink-700 hover:text-purple-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/members"
            className="font-body text-sm font-semibold text-stone-600 transition-colors duration-200 hover:text-purple-600"
          >
            Members
          </Link>
          <Button href="/join" variant="primary" className="text-sm">
            Visit a Meeting
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink-900 transition-transform duration-200 ease-[var(--ease-spring)] ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink-900 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink-900 transition-transform duration-200 ease-[var(--ease-spring)] ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-stone-200 bg-parchment-50 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 font-display text-base font-bold uppercase tracking-wide text-ink-700 hover:bg-purple-50 hover:text-purple-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/members"
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 font-body text-sm font-semibold text-stone-600 hover:bg-purple-50"
            >
              Members Area
            </Link>
          </nav>
          <Button href="/join" variant="primary" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Visit a Meeting
          </Button>
        </div>
      ) : null}
    </header>
  );
}
