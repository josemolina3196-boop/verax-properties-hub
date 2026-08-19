import { ArrowUpRight, Bath, BedDouble, Car, Ruler } from "lucide-react";

import { PlaceholderImage } from "@/components/PlaceholderImage";
import { whatsappLink } from "@/data/company";
import { formatPrice, type Property } from "@/data/properties";

const statusStyles: Record<Property["status"], string> = {
  "Nueva captación": "bg-alert text-alert-foreground",
  "Bajó de precio": "bg-alert text-alert-foreground",
  "Promo del día": "bg-promo text-promo-foreground",
  Disponible: "bg-brand text-brand-foreground",
};

export function PropertyCard({ property }: { property: Property }) {
  const operationLabel = property.operation === "venta" ? "EN VENTA" : "EN ALQUILER";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 bg-brand px-4 py-2.5 text-brand-foreground">
        <span className="eyebrow min-w-0 truncate">
          {property.type} · {property.zone}
        </span>
        <span className="eyebrow shrink-0 opacity-70">{property.code}</span>
      </div>

      <div className="relative p-3">
        <PlaceholderImage label={property.title} ratio="4 / 3" watermark />
        <span
          className={`eyebrow absolute left-5 top-5 rounded-full px-3 py-1 ${statusStyles[property.status]}`}
        >
          {property.status === "Disponible" ? operationLabel : property.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4">
        <h3 className="font-display text-base font-bold leading-snug text-foreground">{property.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{property.reference}</p>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
          <Spec icon={<Ruler className="h-3.5 w-3.5" />} label="Área" value={`${property.area} m²`} />
          {property.bedrooms ? (
            <Spec icon={<BedDouble className="h-3.5 w-3.5" />} label="Hab." value={`${property.bedrooms}`} />
          ) : null}
          {property.bathrooms ? (
            <Spec icon={<Bath className="h-3.5 w-3.5" />} label="Baños" value={`${property.bathrooms}`} />
          ) : null}
          {property.parking ? (
            <Spec icon={<Car className="h-3.5 w-3.5" />} label="Estac." value={`${property.parking}`} />
          ) : null}
        </dl>

        <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
          {property.highlights.slice(0, 2).map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-border pt-4">
          <div className="min-w-0">
            <span className="eyebrow block text-[10px] text-muted-foreground">
              {property.operation === "venta" ? "Precio de venta" : "Canon mensual"}
            </span>
            <span className="block truncate font-display text-lg font-black text-foreground">
              {formatPrice(property)}
            </span>
          </div>
          <a
            href={whatsappLink(
              `Hola, me interesa el inmueble ${property.code} — ${property.title} (${property.zone}).`,
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-ink-foreground transition-opacity hover:opacity-85"
          >
            Consultar
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-lg bg-muted px-2.5 py-2">
      <dt className="flex items-center gap-1 text-[10px] uppercase tracking-wide text-muted-foreground">
        <span className="shrink-0">{icon}</span>
        <span className="truncate">{label}</span>
      </dt>
      <dd className="mt-0.5 truncate font-display text-sm font-bold text-foreground">{value}</dd>
    </div>
  );
}
