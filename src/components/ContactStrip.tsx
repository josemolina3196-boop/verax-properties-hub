import { PlaceholderImage } from "@/components/PlaceholderImage";
import { company } from "@/data/company";

export function ContactStrip() {
  return (
    <div className="overflow-hidden rounded-3xl bg-ink text-ink-foreground">
      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.7fr)]">
        <div className="border-b border-ink-foreground/15 p-6 md:border-b-0 md:border-r md:p-8">
          <h3 className="font-display text-lg font-black uppercase">Visitas privadas</h3>
          <p className="mt-2 text-sm opacity-70">Solo con cita previa, acompañadas por un asesor Verax.</p>
        </div>
        <div className="border-b border-ink-foreground/15 p-6 md:border-b-0 md:border-r md:p-8">
          <h3 className="font-display text-lg font-black uppercase">Oficina de ventas</h3>
          <div className="mt-3 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
            <span className="shrink-0 rounded-lg bg-ink-foreground px-3 py-1.5 font-display text-sm font-bold text-ink">
              08:00 — 17:30
            </span>
            <span className="min-w-0 text-sm opacity-70">Lun — Vie</span>
          </div>
          <p className="mt-3 text-sm opacity-70">{company.phone}</p>
        </div>
        <div className="p-3">
          <PlaceholderImage label="Fachada de la oficina" ratio="4 / 3" tone="dark" />
        </div>
      </div>
    </div>
  );
}
