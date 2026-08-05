import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import PatrolsSection from "@/components/home/PatrolsSection";
import { adultLeaders, youthPositions } from "@/content/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet Troop 65's adult leaders and see how the boy-led leadership structure — SPL, PLC, and Patrol Leaders — actually works.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Two kinds of leaders, one troop"
        subtitle="Adults who register with National and youth who actually run the program day to day."
      />

      <section className="bg-parchment-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Adult Leadership" title="Registered adult leaders" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adultLeaders.map((leader) => (
              <div key={leader.name} className="flex gap-4 rounded-sm bg-white p-6 shadow-patch">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Image src={leader.photo.src} alt={leader.photo.alt} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold uppercase tracking-tight text-ink-900">
                    {leader.name}
                  </p>
                  <p className="font-display text-xs font-bold uppercase tracking-wide text-purple-600">
                    {leader.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-950 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Youth Leadership"
            title="How the boy-led structure works"
            subtitle="Real names, current as of this program year — positions rotate roughly every six months at troop elections."
            tone="gold"
            align="center"
          />
          <div className="mt-14 space-y-3">
            {youthPositions.map((position, i) => (
              <div
                key={position.title}
                className="flex flex-col gap-3 rounded-sm border border-purple-800 bg-purple-900/60 p-6 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                  <span className="font-display text-2xl font-extrabold text-gold-500/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-base font-bold uppercase leading-tight tracking-tight text-parchment-50">
                    {position.title}
                  </p>
                </div>
                <div>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-gold-400">
                    {position.name ? position.name : `Reports to ${position.reportsTo}`}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-purple-200">
                    {position.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PatrolsSection />

      <CtaBand />
    </>
  );
}
