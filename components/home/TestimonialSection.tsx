import PatchMark from "@/components/ui/PatchMark";
import { testimonials } from "@/content/testimonials";

export default function TestimonialSection() {
  const quote = testimonials[0];
  if (!quote) return null;

  return (
    <section className="bg-purple-950 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-display text-8xl leading-none text-gold-500/40" aria-hidden="true">
          &ldquo;
        </span>
        <p className="mx-auto -mt-6 max-w-3xl font-display text-3xl font-medium leading-tight text-parchment-50 sm:text-4xl">
          {quote.quote}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <PatchMark size={32} tone="gold" />
          <div className="text-left">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-parchment-50">
              {quote.name}
            </p>
            <p className="text-xs text-purple-300">{quote.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
