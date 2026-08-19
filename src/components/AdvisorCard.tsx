import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PlaceholderImage } from "@/components/PlaceholderImage";
import { advisorProperties, type Advisor } from "@/data/advisors";

export function AdvisorCard({ advisor }: { advisor: Advisor }) {
  const count = advisorProperties(advisor.id).length;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="p-3">
        <PlaceholderImage label={advisor.name} ratio="4 / 5" watermark />
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4">
        <span className="eyebrow text-[10px] text-muted-foreground">{advisor.role}</span>
        <h3 className="mt-1 font-display text-base font-bold leading-snug text-foreground">{advisor.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{advisor.zones.join(" · ")}</p>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg bg-muted px-2.5 py-2">
            <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">Desde</dt>
            <dd className="mt-0.5 font-display text-sm font-bold text-foreground">{advisor.since}</dd>
          </div>
          <div className="rounded-lg bg-muted px-2.5 py-2">
            <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">Cartera</dt>
            <dd className="mt-0.5 font-display text-sm font-bold text-foreground">{count} inmuebles</dd>
          </div>
        </dl>

        <Link
          to="/asesores/$advisorId"
          params={{ advisorId: advisor.id }}
          className="mt-5 inline-flex items-center justify-between gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-ink-foreground transition-opacity hover:opacity-85"
        >
          Ver perfil y cartera
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
