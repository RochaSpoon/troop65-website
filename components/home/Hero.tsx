import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-purple-950">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/2000x1400/2b0b3d/2b0b3d.png?text=+"
          alt="TODO: replace with a wide action photo — Scouts backpacking, mid-hike, golden-hour light. Landscape, at least 2000px wide."
          fill
          priority
          className="object-cover mix-blend-luminosity opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/70 to-purple-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-950/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 bg-purple-900/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            {siteConfig.city}, {siteConfig.state} &middot; Est. {siteConfig.foundedYear}
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-parchment-50 sm:text-7xl lg:text-8xl">
          Boy-led.
          <br />
          <span className="text-gold-400">Field-tested.</span>
          <br />
          Since {siteConfig.foundedYear}.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-purple-100 sm:text-xl">
          {siteConfig.troopName} is run by the Scouts in it — not the adults behind it.
          Real campouts, real leadership, real consequences when the plan doesn&apos;t
          survive contact with the trail. That&apos;s how {siteConfig.nickname} builds
          Scouts who can actually lead.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/join" variant="primary">
            Visit a Meeting
          </Button>
          <Button href="/about" variant="outline" className="text-parchment-50">
            See What We Do
          </Button>
        </div>
      </div>
    </section>
  );
}
