import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import CtaBand from "@/components/home/CtaBand";
import { upcomingEvents, pastEvents } from "@/content/events";

export const metadata: Metadata = {
  title: "Activities & Calendar",
  description:
    "Upcoming campouts, high-adventure trips, and service projects at Troop 65 — plus recaps of what patrols did this season.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activities & Calendar"
        title="A full calendar, not a placeholder one"
        subtitle="Every event here was planned by the Patrol Leaders' Council. This is what a normal season looks like."
      />

      <section className="bg-parchment-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coming Up" title="Upcoming events" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
          <p className="mt-8 text-sm text-stone-600">
            Registered families see full sign-up details, carpool coordination, and gear
            lists on the{" "}
            <Link
              href="/members/calendar"
              className="font-semibold text-purple-700 underline decoration-2 underline-offset-4 decoration-gold-500 hover:text-purple-600"
            >
              members calendar
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-parchment-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Recap" title="What we've been up to" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
