import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "What boy-led actually means at Troop 65, our program philosophy, and what sets us apart from other troops in Long Beach.",
};

const proof = [
  {
    title: "The PLC sets the calendar",
    body: "Not the Scoutmaster. The Patrol Leaders' Council picks every campout and activity for the year, works within a real budget, and defends the plan to the troop. Adults can veto for safety — not preference.",
  },
  {
    title: "Older Scouts teach, adults don't",
    body: "First Class through Eagle-rank Scouts sign off younger Scouts' skills and requirements. A Scoutmaster Conference happens because a Scout is ready, not because an adult decided the schedule.",
  },
  {
    title: "New Scouts get a patrol, not a babysitter",
    body: "Incoming Scouts join a New Scout Patrol with an assigned Troop Guide, but by their third month they're helping plan their own patrol activities — not just following along on ours.",
  },
  {
    title: "Mistakes are part of the plan",
    body: "If the PLC books a campsite with no water source, that's a lesson, not a crisis the adults quietly fix. We let outcomes teach — within the bounds of the Guide to Safe Scouting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Troop 65"
        title="Boy-led isn't a slogan here"
        subtitle="Every troop's website says 'boy-led.' Here's what it actually looks like on a Tuesday night and on the trail."
      />

      <section className="bg-parchment-50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Program Philosophy"
              title="Adults advise. Scouts decide."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
              <p>
                Scouting BSA is built around the idea that youth learn leadership by
                actually leading — not by watching adults lead and taking notes. At{" "}
                {siteConfig.troopName}, that&apos;s not an aspiration, it&apos;s the operating
                model: the Patrol Leaders&apos; Council plans the program, patrol leaders run
                their patrols, and the Senior Patrol Leader runs the troop.
              </p>
              <p>
                Our adult leaders are there for two things: safety and support. We register
                as merit badge counselors, drive the trailers, and make sure Youth Protection
                standards are never in question. What we don&apos;t do is plan the campouts,
                pick the menus, or run the meetings.
              </p>
              <p>
                It&apos;s slower than an adult-run troop at first. A Scout-planned menu
                sometimes forgets a can opener. A first-time Senior Patrol Leader runs a
                meeting that meanders. That&apos;s the process working, not failing —
                by their second year, most Scouts here have run something bigger than
                anything most adults managed at seventeen.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-patch-lg">
            <Image
              src="https://placehold.co/1200x1500/610081/f7efd9.png?text=Photo%3A+PLC+planning+meeting"
              alt="TODO: replace with a real photo of the Patrol Leaders' Council planning a campout"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-purple-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Tell"
            title="Four ways to spot a real boy-led troop"
            tone="gold"
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-purple-800 sm:grid-cols-2">
            {proof.map((item) => (
              <div key={item.title} className="bg-purple-950 p-8">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-gold-400">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-purple-200">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment-100 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`Since ${siteConfig.foundedYear}`}
            title="Where the name Purple Plague comes from"
            align="center"
          />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-700">
            {/* TODO: replace with your troop's real history — this is a placeholder
                framework for the story, not a researched historical claim. */}
            {siteConfig.troopName} has carried the &ldquo;{siteConfig.nickname}&rdquo;
            name since long before most of our current Scouts&apos; parents were born.
            Ask any adult leader for the full story at a meeting — it&apos;s better told
            in person than on a webpage, and it&apos;s a good icebreaker for new families.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
