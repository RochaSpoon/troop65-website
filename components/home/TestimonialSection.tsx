import Image from "next/image";
import PatchMark from "@/components/ui/PatchMark";
import { testimonials } from "@/content/testimonials";

export default function TestimonialSection() {
  const quote = testimonials[0];
  if (!quote) return null;

  return (
    <section className="bg-purple-950">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative aspect-[4/3] min-h-[320px] lg:aspect-auto lg:h-[480px] xl:h-[540px]">
          <Image
            src="/images/activities/camp-baker-2026/camp-baker-20.jpg"
            alt="Troop 65 Scouts at Camp Baker"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-14 xl:px-20">
          <div>
            <PatchMark size={32} tone="gold" />
            <p className="mt-6 font-display text-2xl font-medium leading-tight text-parchment-50 sm:text-3xl">
              &ldquo;{quote.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-gold-400">
                {quote.name}
              </p>
              <p className="text-xs text-purple-300">{quote.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
