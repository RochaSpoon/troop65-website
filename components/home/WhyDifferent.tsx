import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import PatchMark from "@/components/ui/PatchMark";

const pillars = [
  {
    label: "Boy-Led",
    description:
      "Scouts write the calendar, run the meetings, and lead the campouts. Adults are there for safety and support — not to run the show.",
  },
  {
    label: "Active",
    description:
      "Camp Baker this summer, Chino Hills before that, a district camporee before that. If a patrol wants to go somewhere, they plan it.",
  },
  {
    label: "Supportive",
    description:
      "Every Scout advances at their own pace with mentors from older patrols. Nobody gets left at Tenderfoot because nobody explained the next step.",
  },
];

export default function WhyDifferent() {
  return (
    <section className="bg-parchment-100 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Why Troop 65"
            title="Three words, actually true"
            subtitle="Every troop website says some version of this. Here's what it means day to day for us."
          />
          <div className="mt-10 space-y-7">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="flex gap-4">
                <PatchMark size={36} tone="purple" className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-display text-xl font-extrabold uppercase tracking-tight text-purple-700">
                    {pillar.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-patch-lg">
          <Image
            src="/images/activities/camp-baker-2026/camp-baker-25.jpg"
            alt="A Troop 65 Scout at the archery range during summer camp at Camp Baker"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
