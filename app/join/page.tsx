import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/forms/InquiryForm";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Who's eligible, what a Troop 65 meeting looks like, and how to visit — everything a new family needs to know before their first Tuesday.",
};

const meetingFlow = [
  { time: "7:30", label: "Opening", body: "Flag ceremony, announcements, run by the Senior Patrol Leader." },
  { time: "7:40", label: "Patrol Time", body: "Patrols split off for skill instruction, planning, or advancement work." },
  { time: "8:10", label: "Troop Activity", body: "A game, challenge, or whole-troop activity — usually the loudest 20 minutes of the week." },
  { time: "8:20", label: "Closing", body: "Announcements, upcoming event sign-ups, closing flag ceremony." },
];

const bring = [
  "Comfortable clothes you don't mind moving around in",
  "A water bottle",
  "Curiosity — that's genuinely it for a first visit",
  "A parent or guardian to fill out a simple visitor form on arrival",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Your first Tuesday, mapped out"
        subtitle="No uniform, no fee, no commitment required to visit. Here's exactly what to expect."
      />

      <section className="bg-parchment-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-3">
            <div>
              <SectionHeading eyebrow="Eligibility" title="Who can join" />
              <p className="mt-5 text-sm leading-relaxed text-ink-700">
                Scouts BSA is open to youth ages 11–17, or 10-year-olds who have
                completed 5th grade or earned the Arrow of Light. Most of our new
                Scouts cross over from a Cub Scout Pack, but plenty join us having
                never done Scouting before — you don&apos;t need any prior experience
                to visit or join.
              </p>
              {/* TODO: confirm and note here if Troop 65 is linked with a girl troop */}
            </div>

            <div>
              <SectionHeading eyebrow="Bring" title="What to bring" />
              <ul className="mt-5 space-y-2.5">
                {bring.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="Where" title="Find us" />
              <p className="mt-5 text-sm leading-relaxed text-ink-700">
                {siteConfig.meeting.day}, {siteConfig.meeting.time}
                <br />
                {siteConfig.meeting.locationName}
                <br />
                {siteConfig.meeting.address}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Look for a Scout in a purple neckerchief near the entrance —
                they&apos;ll point you to where we meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-950 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A Typical Tuesday"
            title="What actually happens at a meeting"
            tone="gold"
            align="center"
          />
          <div className="mt-14 space-y-0 divide-y divide-purple-800">
            {meetingFlow.map((step) => (
              <div key={step.label} className="flex gap-6 py-6 sm:gap-10">
                <p className="w-16 shrink-0 font-display text-lg font-bold text-gold-400 sm:w-20 sm:text-xl">
                  {step.time}
                </p>
                <div>
                  <p className="font-display text-lg font-bold uppercase tracking-tight text-parchment-50">
                    {step.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-purple-200">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reach Out"
            title="Tell us you're coming"
            subtitle="Not required — you're welcome to just show up — but it helps us have someone ready to greet you."
            align="center"
          />
          <div className="mt-10">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
