import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { advisorOf } from "@/data/advisors";
import { PROPERTY_TYPES, ZONES, properties, type Operation, type PropertyType } from "@/data/properties";

export const Route = createFileRoute("/propiedades")({
  head: () => ({
    meta: [
      { title: "Propiedades en venta y alquiler en Táchira | Verax" },
      {
        name: "description",
        content:
          "Catálogo de casas, apartamentos, townhouses, galpones, locales y terrenos en venta y alquiler en San Cristóbal y el estado Táchira.",
      },
      { property: "og:title", content: "Propiedades en venta y alquiler en Táchira | Verax" },
      {
        property: "og:description",
        content: "Filtra por operación, tipo de inmueble y zona dentro del catálogo de Inmobiliaria Verax C.A.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/propiedades" },
    ],
    links: [{ rel: "canonical", href: "/propiedades" }],
  }),
  component: PropertiesPage,
});

type OperationFilter = Operation | "todas";
type TypeFilter = PropertyType | "todos";
type ZoneFilter = string;

function PropertiesPage() {
  const [query, setQuery] = useState("");
  const [operation, setOperation] = useState<OperationFilter>("todas");
  const [type, setType] = useState<TypeFilter>("todos");
  const [zone, setZone] = useState<ZoneFilter>("todas");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return properties.filter((p) => {
      if (operation !== "todas" && p.operation !== operation) return false;
      if (type !== "todos" && p.type !== type) return false;
      if (zone !== "todas" && p.zone !== zone) return false;
      if (!q) return true;
      const advisor = advisorOf(p);
      const haystack = [
        p.code,
        p.title,
        p.zone,
        p.type,
        p.reference,
        p.operation,
        advisor?.name ?? "",
        ...p.highlights,
      ]
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((token) => haystack.includes(token));
    });
  }, [query, operation, type, zone]);

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        title="Catálogo de inmuebles"
        tag="Inventario activo"
        lead="Inventario en rotación diaria: residencias, apartamentos, locales, galpones y terrenos en San Cristóbal y municipios cercanos."
        footLabel="Verificación legal"
        footText="Revisamos títulos, régimen de propiedad horizontal y solvencias antes de publicar."
      />

      <section aria-label="Filtros del catálogo" className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
        <div className="space-y-4">
          <FilterRow label="Búsqueda">
            <div className="relative w-full min-w-0">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Código, zona, tipo, asesor o palabra clave…"
                aria-label="Buscar inmuebles"
                className="w-full rounded-full border border-border bg-muted py-2.5 pl-10 pr-10 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:bg-surface"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </FilterRow>

          <FilterRow label="Operación">
            {(["todas", "venta", "alquiler"] as OperationFilter[]).map((value) => (
              <Chip key={value} active={operation === value} onClick={() => setOperation(value)}>
                {value === "todas" ? "Todas" : value === "venta" ? "En venta" : "En alquiler"}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Tipo de inmueble">
            <Chip active={type === "todos"} onClick={() => setType("todos")}>
              Todos
            </Chip>
            {PROPERTY_TYPES.map((value) => (
              <Chip key={value} active={type === value} onClick={() => setType(value)}>
                {value}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Zona">
            <Chip active={zone === "todas"} onClick={() => setZone("todas")}>
              Todas
            </Chip>
            {ZONES.map((value) => (
              <Chip key={value} active={zone === value} onClick={() => setZone(value)}>
                {value}
              </Chip>
            ))}
          </FilterRow>
        </div>

        <p className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? "inmueble encontrado" : "inmuebles encontrados"}
        </p>
      </section>

      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          No hay inmuebles con esos criterios. Escríbenos por WhatsApp y buscamos una captación a tu medida.
        </p>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start sm:gap-4">
      <span className="eyebrow shrink-0 pt-2 text-muted-foreground">{label}</span>
      <div className="flex min-w-0 flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
        active
          ? "bg-ink text-ink-foreground"
          : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {children}
    </button>
  );
}
