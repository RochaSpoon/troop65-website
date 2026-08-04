import Link from "next/link";

const memberNav = [
  { href: "/members", label: "Announcements" },
  { href: "/members/calendar", label: "Calendar" },
  { href: "/members/forms", label: "Forms" },
  { href: "/members/roster", label: "Roster & Advancement" },
];

export default function MembersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-parchment-100">
      <div className="bg-ink-900 py-2.5 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-parchment-200">
          Members Area — for current Troop 65 families &middot;{" "}
          <Link href="/" className="underline decoration-gold-500 decoration-2 underline-offset-2 hover:text-gold-300">
            Back to main site
          </Link>
        </p>
      </div>

      <div className="border-b border-stone-300 bg-parchment-50">
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-1 px-4 py-3 sm:px-6">
          {memberNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-1.5 font-body text-sm font-semibold text-ink-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">{children}</div>
    </div>
  );
}
