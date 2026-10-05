"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, troopItem } from "@/lib/nav";


export function NavLinks() {
  const path = usePathname();
  return (
    <ul className="flex gap-6 text-[15px] font-semibold">
      {[...navItems, troopItem].map((n) => {
        const active = path === n.href || path.startsWith(n.href + "/");
        return (
          <li key={n.href}>
            <Link
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={`border-b-2 pb-1 hover:text-purple ${active ? "border-purple text-purple" : "border-transparent"} ${n === troopItem && !active ? "text-muted" : ""}`}
            >
              {n.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function MobileMenu() {
  const path = usePathname();
  return (
    // Keyed by path so the menu closes after navigating.
    <details key={path} className="relative lg:hidden">
      <summary className="cursor-pointer list-none rounded-full border border-ink px-4 py-2 text-[14px] font-bold">
        Menu
      </summary>
      <ul className="absolute right-0 z-40 mt-2 w-60 rounded-[14px] border border-line bg-white p-2 text-[16px] font-semibold">
        {[...navItems, troopItem].map((n) => (
          <li key={n.href}>
            <Link
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
              className={`block px-3 py-3 rounded-lg hover:bg-lilac ${path === n.href ? "text-purple" : ""}`}
            >
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
