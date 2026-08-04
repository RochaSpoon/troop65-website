import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-ink-900 shadow-patch hover:bg-gold-400 hover:-translate-y-0.5 active:translate-y-0 active:bg-gold-600",
  outline:
    "border-2 border-current text-parchment-50 hover:bg-parchment-50/10 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-purple-700 hover:text-purple-600 hover:-translate-y-0.5 active:translate-y-0 underline decoration-2 underline-offset-4 decoration-gold-500",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-display text-base font-bold uppercase tracking-wide transition-[transform,background-color,color] duration-200 ease-[var(--ease-spring)] focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2";

  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
