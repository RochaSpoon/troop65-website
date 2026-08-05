import SectionHeading from "@/components/ui/SectionHeading";
import { patrols } from "@/content/patrols";

export default function PatrolsSection() {
  return (
    <section className="bg-parchment-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Four Patrols, One Troop"
          title="Pick your patrol"
          subtitle="Every Scout belongs to one of four patrols — smaller teams inside the troop with their own culture, own patrol leader, and own bragging rights."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-stone-300 sm:grid-cols-2 lg:grid-cols-4">
          {patrols.map((patrol, i) => (
            <div
              key={patrol.name}
              className={
                i % 2 === 0
                  ? "bg-purple-950 p-7 text-parchment-50"
                  : "bg-white p-7 text-ink-900"
              }
            >
              <p className="font-display text-2xl font-extrabold uppercase tracking-tight">
                {patrol.name}
              </p>
              <p
                className={`mt-1 font-display text-xs font-bold uppercase tracking-wide ${
                  i % 2 === 0 ? "text-gold-400" : "text-purple-600"
                }`}
              >
                Patrol Leader: {patrol.leader}
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${i % 2 === 0 ? "text-purple-200" : "text-stone-600"}`}>
                {patrol.description}
              </p>
              {patrol.founded ? (
                <p className={`mt-3 text-xs italic ${i % 2 === 0 ? "text-purple-300" : "text-stone-500"}`}>
                  {patrol.founded}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
