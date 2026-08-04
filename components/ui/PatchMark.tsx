const palettes = {
  purple: { fill: "#2b0b3d", ring: "#c79a2e", text: "#f7efd9" },
  gold: { fill: "#c79a2e", ring: "#2b0b3d", text: "#2b0b3d" },
  parchment: { fill: "#faf6ef", ring: "#610081", text: "#610081" },
} as const;

/**
 * The troop's recurring signature mark — a simplified, flat-vector nod to
 * the concentric badge rim on the real 1937 patch. Used sparingly as a
 * bullet next to stats, quotes, and section labels, never as a full logo
 * replacement (use the real patch photo for that — see /components/ui/Logo).
 */
export default function PatchMark({
  size = 40,
  tone = "purple",
  className,
}: {
  size?: number;
  tone?: keyof typeof palettes;
  className?: string;
}) {
  const p = palettes[tone];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="20" r="19" fill={p.fill} stroke={p.ring} strokeWidth="1.25" />
      <circle cx="20" cy="20" r="15" fill="none" stroke={p.ring} strokeWidth="1" />
      <text
        x="20"
        y="25.5"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight={800}
        fontSize="14"
        fill={p.text}
      >
        65
      </text>
    </svg>
  );
}
