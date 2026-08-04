import { quickStats } from "@/content/stats";

export default function StatBand() {
  return (
    <section className="bg-purple-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-purple-700 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 md:divide-x lg:px-8">
        {quickStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-10 text-center">
            <p className="font-display text-5xl font-extrabold tracking-tight text-gold-400 sm:text-6xl">
              {stat.value}
            </p>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-parchment-50">
              {stat.label}
            </p>
            {stat.detail ? (
              <p className="text-xs text-purple-300">{stat.detail}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
