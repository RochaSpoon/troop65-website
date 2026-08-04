import type { Metadata } from "next";
import { announcements } from "@/content/announcements";

export const metadata: Metadata = {
  title: "Members — Announcements",
  robots: { index: false, follow: false },
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function MembersHomePage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink-900">
        Announcements
      </h1>
      <p className="mt-2 text-sm text-stone-600">
        Newest first. Edit <code className="rounded bg-parchment-200 px-1.5 py-0.5 text-xs">content/announcements.ts</code>{" "}
        to add or remove items.
      </p>

      <div className="mt-8 space-y-4">
        {announcements.map((item) => (
          <div key={item.title} className="rounded-sm border border-stone-300 bg-white p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-lg font-bold text-ink-900">{item.title}</h2>
              <span className="text-xs font-semibold uppercase tracking-wide text-stone-600">
                {formatDate(item.date)}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
