import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    label: "Boy-Led",
    description:
      "Scouts write the calendar, run the meetings, and lead the campouts. Adults are there for safety and support — not to run the show.",
  },
  {
    label: "Active",
    description:
      "12+ outings a year, from local service days to backcountry high adventure. If a patrol wants to go somewhere, they plan it.",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Troop 65"
          title="Three words, actually true"
          subtitle="Every troop website says some version of this. Here's what it means day to day for us."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-sm bg-white p-8 text-center shadow-patch transition-transform duration-300 ease-[var(--ease-spring)] hover:-translate-y-1"
            >
              <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-purple-700">
                {pillar.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
