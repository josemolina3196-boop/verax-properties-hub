export function VeraxLogo({ className, tone = "ink" }: { className?: string; tone?: "ink" | "light" }) {
  const text = tone === "light" ? "text-ink-foreground" : "text-ink";
  const mark = tone === "light" ? "text-promo" : "text-brand";

  return (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className={`h-7 w-7 shrink-0 ${mark}`} fill="none">
        <path d="M3 15 16 4l13 11" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M7 15v12h18V15" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M14 27v-7h4v7" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-black tracking-tight ${text}`}>VERAX</span>
        <span className={`eyebrow text-[9px] opacity-60 ${text}`}>Inmobiliaria C.A.</span>
      </span>
    </span>
  );
}
