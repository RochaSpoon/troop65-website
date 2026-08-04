import Image from "next/image";
import { TroopEvent } from "@/lib/types";

const categoryLabels: Record<TroopEvent["category"], string> = {
  campout: "Campout",
  "high-adventure": "High Adventure",
  service: "Service",
  ceremony: "Ceremony",
  meeting: "Meeting",
  fundraiser: "Fundraiser",
};

function formatDate(event: TroopEvent) {
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
  const start = new Date(`${event.date}T00:00:00`).toLocaleDateString("en-US", opts);
  if (!event.endDate) return start;
  const end = new Date(`${event.endDate}T00:00:00`).toLocaleDateString("en-US", opts);
  return `${start} – ${end}`;
}

export default function EventCard({ event }: { event: TroopEvent }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-patch transition-transform duration-300 ease-[var(--ease-spring)] hover:-translate-y-1 hover:shadow-patch-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-purple-900">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover mix-blend-normal transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-950/0 to-transparent" />
        <span className="absolute left-3 top-3 rounded-sm bg-gold-500 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-wide text-ink-900">
          {categoryLabels[event.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
          {formatDate(event)}
        </p>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink-900">
          {event.title}
        </h3>
        <p className="text-sm text-stone-600">{event.location}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-700">{event.summary}</p>
      </div>
    </article>
  );
}
