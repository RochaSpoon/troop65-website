import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export default function Hero() {
  return (
    <section className="bg-purple-950">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 bg-purple-900/60 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              {siteConfig.city}, {siteConfig.state} &middot; Est. {siteConfig.foundedYear}
            </span>
          </div>

          <h1 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-parchment-50 sm:text-7xl">
            Boy-led.
            <br />
            <span className="text-gold-400">Field-tested.</span>
            <br />
            Since {siteConfig.foundedYear}.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-purple-100">
            {siteConfig.troopName} is run by the Scouts in it — not the adults behind it.
            This summer that meant a full week at Camp Baker in Oregon, capped off by
            planting the troop flag on top of a dune nobody made them climb.
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

        <div className="relative h-[56vh] min-h-[420px] lg:h-[640px] xl:h-[720px]">
          <Image
            src="/images/activities/camp-baker-2026/camp-baker-10.jpg"
            alt="Troop 65 Scouts atop the Oregon Dunes with the troop flag flying, during summer camp at Camp Baker"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 35%" }}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-950/80 to-transparent p-5 sm:p-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
              Oregon Dunes &middot; Camp Baker, Summer 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
