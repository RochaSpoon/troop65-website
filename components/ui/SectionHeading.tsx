import PatchMark from "./PatchMark";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "purple",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "purple" | "gold" | "parchment";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <div
          className={`mb-3 flex items-center gap-2 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <PatchMark size={22} tone={tone} />
          <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-600">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="font-display text-4xl font-extrabold uppercase tracking-[-0.02em] text-ink-900 sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
