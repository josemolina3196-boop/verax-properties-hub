import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  tag?: string;
  lead?: ReactNode;
  footLabel?: string;
  footText?: string;
  as?: "h1" | "h2";
}

/** Panel oscuro de encabezado: título a la izquierda, etiqueta a la derecha y línea inferior con dato. */
export function SectionHeading({
  title,
  tag,
  lead,
  footLabel,
  footText,
  as = "h2",
}: SectionHeadingProps) {
  const Title = as;

  return (
    <div className="rounded-3xl bg-ink px-6 py-8 text-ink-foreground sm:px-10 sm:py-12">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
        <Title className="min-w-0 font-display text-2xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </Title>
        {tag ? <span className="eyebrow shrink-0 opacity-55">{tag}</span> : null}
      </div>

      {lead ? (
        <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-75 sm:text-base">{lead}</p>
      ) : null}

      {footLabel ? (
        <div className="mt-8 border-t border-ink-foreground/25 pt-4 sm:mt-12">
          <div className="grid grid-cols-1 gap-1 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <span className="eyebrow shrink-0">{footLabel}</span>
            {footText ? (
              <span className="min-w-0 text-xs opacity-70 sm:text-right sm:text-sm">{footText}</span>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
