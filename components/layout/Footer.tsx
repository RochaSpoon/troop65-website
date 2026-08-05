import Link from "next/link";
import { navLinks } from "./nav-links";
import { siteConfig } from "@/content/site-config";
import PatchMark from "@/components/ui/PatchMark";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-parchment-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <PatchMark size={40} tone="gold" />
            <div>
              <p className="font-display text-xl font-extrabold uppercase tracking-tight">
                {siteConfig.troopName}
              </p>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {siteConfig.nickname} &middot; Est. {siteConfig.foundedYear}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-purple-200">
            A boy-led Scouts BSA troop in {siteConfig.city}, {siteConfig.state}, serving God
            and country since {siteConfig.foundedYear}.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-purple-200 hover:text-parchment-50">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/members" className="text-purple-200 hover:text-parchment-50">
                Members Area
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
            Meets Weekly
          </p>
          <p className="mt-4 text-sm leading-relaxed text-purple-200">
            {siteConfig.meeting.day}, {siteConfig.meeting.time}
            <br />
            {siteConfig.meeting.locationName}
            <br />
            {siteConfig.meeting.address}
          </p>
          <p className="mt-4 text-sm">
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gold-300 hover:text-gold-200">
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-purple-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-purple-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.troopName}, {siteConfig.city}{" "}
            {siteConfig.state}. Chartered by {siteConfig.council}.
          </p>
          <p>Boy-led since {siteConfig.foundedYear}.</p>
        </div>
      </div>
    </footer>
  );
}
