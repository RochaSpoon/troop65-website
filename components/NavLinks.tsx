"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, troopItem } from "@/lib/nav";


export function NavLinks() {
  const path = usePathname();
  return (
    <ul className="flex gap-7 font-public text-[15px] font-semibold">
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
      <summary className="cursor-pointer list-none border-2 border-ink px-3 py-2 font-public text-sm font-bold uppercase tracking-wider">
        Menu
      </summary>
      <ul className="absolute right-0 z-40 mt-2 w-60 border border-line bg-paper p-2 font-public text-[17px] font-semibold">
        {[...navItems, troopItem].map((n) => (
          <li key={n.href}>
            <Link
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
              className={`block px-3 py-3 hover:bg-stone ${path === n.href ? "text-purple" : ""}`}
            >
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
