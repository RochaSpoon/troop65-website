import Image from "next/image";
import { quickStats } from "@/content/stats";

export default function StatBand() {
  return (
    <section className="relative overflow-hidden bg-purple-950 py-14 sm:py-16">
      <Image
        src="/images/activities/camp-baker-2026/camp-baker-15.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-purple-950/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
          By the numbers
        </p>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-10 gap-y-6 sm:gap-x-14">
          {quickStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-extrabold tracking-tight text-gold-400 sm:text-6xl">
                {stat.value}
              </span>
              <span className="max-w-[9rem] font-display text-sm font-bold uppercase leading-tight tracking-wide text-parchment-50">
                {stat.label}
                {stat.detail ? (
                  <span className="mt-0.5 block font-body text-xs font-normal normal-case tracking-normal text-purple-300">
                    {stat.detail}
                  </span>
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
