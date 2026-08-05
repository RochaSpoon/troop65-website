import type { Metadata } from "next";
import { events } from "@/content/events";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Members — Calendar",
  robots: { index: false, follow: false },
};

function formatDate(event: (typeof events)[number]) {
  const opts: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
  const start = new Date(`${event.date}T00:00:00`).toLocaleDateString("en-US", opts);
  if (!event.endDate) return start;
  const end = new Date(`${event.endDate}T00:00:00`).toLocaleDateString("en-US", opts);
  return `${start} – ${end}`;
}

export default function MembersCalendarPage() {
  const upcoming = events.filter((e) => !e.isPast);

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink-900">
        Calendar &amp; Sign-Ups
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-stone-600">
        Same events as the public Activities page, with room for the sign-up and
        logistics details families actually need. TODO: replace the “Sign up” link
        below with your real RSVP method — a Google Form, Scoutbook event, or
        sign-up sheet link — per event.
      </p>

      <div className="mt-8 divide-y divide-stone-300 rounded-sm border border-stone-300 bg-white">
        {upcoming.map((event) => (
          <div key={event.slug} className="flex flex-wrap items-center justify-between gap-4 p-5">
            <div>
              <p className="font-display text-base font-bold uppercase text-ink-900">{event.title}</p>
              <p className="mt-1 text-sm text-stone-600">
                {formatDate(event)} &middot; {event.location}
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 rounded-sm bg-purple-700 px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-parchment-50 transition-colors hover:bg-purple-600"
            >
              Sign Up →
            </a>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-xl font-extrabold uppercase tracking-tight text-ink-900">
        Recurring Meetings
      </h2>
      <div className="mt-4 divide-y divide-stone-300 rounded-sm border border-stone-300 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4 p-5">
          <p className="font-display text-base font-bold uppercase text-ink-900">Troop Meeting</p>
          <p className="text-sm text-stone-600">
            {siteConfig.meeting.day}, {siteConfig.meeting.time}
          </p>
        </div>
        {siteConfig.otherMeetings.map((m) => (
          <div key={m.label} className="flex flex-wrap items-center justify-between gap-4 p-5">
            <p className="font-display text-base font-bold uppercase text-ink-900">{m.label}</p>
            <p className="text-sm text-stone-600">{m.schedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
