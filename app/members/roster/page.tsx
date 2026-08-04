import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members — Roster & Advancement",
  robots: { index: false, follow: false },
};

export default function MembersRosterPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink-900">
        Roster &amp; Advancement
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-700">
        Patrol rosters and individual advancement records contain youth personal
        information, so they intentionally don&apos;t live on this website — even here
        in the members area. Most troops track this in{" "}
        <a
          href="https://www.scouting.org/programs/scouts-bsa/scoutbook/"
          className="font-semibold text-purple-700 underline decoration-2 underline-offset-4 decoration-gold-500 hover:text-purple-600"
        >
          Scoutbook
        </a>{" "}
        or a similar troop management tool.
      </p>

      <div className="mt-8 rounded-sm border border-stone-300 bg-white p-6">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-purple-700">
          TODO
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          Replace this section with a link to your troop&apos;s actual Scoutbook /
          TroopTrack / roster-tool login, plus a short note on who to contact
          (Advancement Chair, Committee Chair) for access.
        </p>
      </div>
    </div>
  );
}
