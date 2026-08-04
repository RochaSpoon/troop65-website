import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { pastEvents } from "@/content/events";

export default function PhotoHighlights() {
  const [feature, ...rest] = pastEvents;
  const secondary = rest.slice(0, 2);

  return (
    <section className="bg-parchment-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Recent Activity"
            title="This is what active looks like"
            subtitle="No stock photos, no staged shots — just what patrols actually did this season."
          />
          <Link
            href="/activities"
            className="font-display text-sm font-bold uppercase tracking-wide text-purple-700 underline decoration-2 underline-offset-4 decoration-gold-500 hover:text-purple-600"
          >
            Full Calendar &amp; Recaps →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {feature ? (
            <Link
              href="/activities"
              className="group relative row-span-2 aspect-[4/5] overflow-hidden rounded-sm shadow-patch lg:aspect-auto"
            >
              <Image
                src={feature.image.src}
                alt={feature.image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-purple-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
                  {feature.category.replace("-", " ")}
                </p>
                <p className="mt-1 font-display text-2xl font-bold uppercase text-parchment-50">
                  {feature.title}
                </p>
              </div>
            </Link>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {secondary.map((event) => (
              <Link
                key={event.slug}
                href="/activities"
                className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-patch"
              >
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-purple-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg font-bold uppercase leading-tight text-parchment-50">
                    {event.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
