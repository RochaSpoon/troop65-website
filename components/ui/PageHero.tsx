import PatchMark from "./PatchMark";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-purple-950 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-center gap-2">
          <PatchMark size={24} tone="gold" />
          <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-display text-5xl font-extrabold uppercase tracking-[-0.02em] text-parchment-50 sm:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-purple-200">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
