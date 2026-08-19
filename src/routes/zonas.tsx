import { createFileRoute } from "@tanstack/react-router";

import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/zonas")({
  head: () => ({
    meta: [
      { title: "Zonas de cobertura en el estado Táchira | Verax" },
      {
        name: "description",
        content:
          "Cobertura en Barrio Obrero, Pueblo Nuevo, La Castellana, Santa Cecilia, Colinas de Pirineos, Caneyes, La Ermita, Palo Gordo, Táriba y Cordero.",
      },
      { property: "og:title", content: "Zonas de cobertura en el estado Táchira | Verax" },
      {
        property: "og:description",
        content: "Sectores donde Inmobiliaria Verax capta y comercializa inmuebles, con el tipo de propiedad predominante.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/zonas" },
    ],
    links: [{ rel: "canonical", href: "/zonas" }],
  }),
  component: ZonesPage,
});

const zones = [
  {
    name: "Barrio Obrero",
    predominant: "Locales comerciales, galpones urbanos y oficinas",
    references: "Calles 10 y 11, Carreras 19 a 23 y adyacencias comerciales.",
  },
  {
    name: "Pueblo Nuevo / La Castellana",
    predominant: "Apartamentos dúplex y residencias cerradas",
    references: "Residencias Sierra Azul y urbanizaciones residenciales de alta gama.",
  },
  {
    name: "Santa Cecilia / Colinas de Pirineos",
    predominant: "Casas unifamiliares y condominios horizontales",
    references: "Avenidas principales cercanas a la ULA y sectores residenciales consolidados.",
  },
  {
    name: "Caneyes / La Ermita",
    predominant: "Galpones industriales y depósitos",
    references: "Instalaciones de 300 m² a 600 m² aptas para almacenamiento y logística pesada.",
  },
  {
    name: "Palo Gordo / Táriba / Cordero",
    predominant: "Casas unifamiliares, parcelas y terrenos",
    references: "Desarrollos suburbanos en los municipios Cárdenas y Andrés Bello.",
  },
];

function ZonesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        title="Zonas de cobertura"
        tag="Estado Táchira"
        lead="Conocemos cada sector: qué se vende, qué se alquila y a qué precio se mueve el metro cuadrado en San Cristóbal y sus municipios vecinos."
        footLabel="Sede operativa"
        footText="Barrio Obrero, epicentro comercial de San Cristóbal, cerca de notarías, registros y bancos."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {zones.map((zone) => (
          <article key={zone.name} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="p-3">
              <PlaceholderImage label={`Sector ${zone.name}`} ratio="16 / 10" watermark />
            </div>
            <div className="px-5 pb-6">
              <h2 className="font-display text-lg font-black uppercase leading-tight text-foreground">
                {zone.name}
              </h2>
              <span className="eyebrow mt-3 inline-block rounded-full bg-brand px-3 py-1 text-brand-foreground">
                Predominante
              </span>
              <p className="mt-2 text-sm font-semibold text-foreground">{zone.predominant}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{zone.references}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="grid gap-5 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:p-8">
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-black uppercase leading-tight">
            ¿Tu sector no aparece?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Trabajamos también captaciones puntuales en otros municipios del Táchira y, a través de la cuenta
            satélite Verax Mérida, en el estado Mérida. Cuéntanos qué buscas y revisamos el inventario disponible.
          </p>
        </div>
        <PlaceholderImage label="Mapa de cobertura San Cristóbal" ratio="16 / 9" />
      </section>
    </div>
  );
}
