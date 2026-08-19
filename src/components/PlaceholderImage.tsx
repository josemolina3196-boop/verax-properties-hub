import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label?: string;
  ratio?: string;
  className?: string;
  watermark?: boolean;
  tone?: "light" | "dark";
}

export function PlaceholderImage({
  label,
  ratio = "4 / 3",
  className,
  watermark = false,
  tone = "light",
}: PlaceholderImageProps) {
  const base =
    tone === "dark"
      ? "bg-secondary/10 text-ink-foreground/50 border-ink-foreground/10"
      : "bg-muted text-muted-foreground border-border";

  return (
    <div
      role="img"
      aria-label={label ? `Espacio reservado para fotografía: ${label}` : "Espacio reservado para fotografía"}
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden rounded-xl border ${base} ${className ?? ""}`}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 14px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <ImageIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
        {label ? <span className="eyebrow text-[10px] leading-tight">{label}</span> : null}
      </div>
      {watermark ? (
        <span className="absolute bottom-2 right-2 rounded-full bg-ink/70 px-2 py-0.5 font-display text-[9px] font-black tracking-widest text-ink-foreground">
          VERAX
        </span>
      ) : null}
    </div>
  );
}
