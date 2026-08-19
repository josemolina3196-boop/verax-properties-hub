import { createFileRoute } from "@tanstack/react-router";

import { ContactStrip } from "@/components/ContactStrip";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { addressLine, company } from "@/data/company";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — 19 años en bienes raíces del Táchira | Verax" },
      {
        name: "description",
        content:
          "Inmobiliaria Verax C.A. acumula 19 años de servicio continuo en el mercado inmobiliario del Táchira, con sede en Barrio Obrero, San Cristóbal.",
      },
      { property: "og:title", content: "Nosotros — 19 años en bienes raíces del Táchira | Verax" },
      {
        property: "og:description",
        content: "Ficha corporativa, trayectoria y posicionamiento de Inmobiliaria Verax C.A. en San Cristóbal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: AboutPage,
});

const facts = [
  { label: "Razón social", value: company.legalName },
  { label: "Presidencia", value: `${company.president} (${company.presidentId})` },
  { label: "Sede", value: addressLine },
  { label: "Horario", value: company.hours },
  { label: "Trayectoria", value: `${company.years} años de servicio continuado` },
  { label: "Comunidad digital", value: `${company.followers} seguidores · ${company.posts} publicaciones` },
];

const differentiators = [
  {
    title: "Inventario en rotación diaria",
    body: "Publicamos captaciones nuevas todos los días, lo que mantiene el catálogo fresco y visible para compradores e inquilinos.",
  },
  {
    title: "Línea gráfica reconocible",
    body: "Fichas técnicas estandarizadas y marca de agua en cada fotografía para proteger nuestras captaciones.",
  },
  {
    title: "Atención directa por WhatsApp",
    body: "Cada publicación deriva a un canal privado donde un asesor coordina la cita sin intermediarios.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        title="Diseñada para acompañar"
        tag="Nosotros"
        lead="Inmobiliaria Verax C.A. nació en San Cristóbal y creció con el mercado del Táchira: hoy suma 19 años intermediando compras, ventas y alquileres."
        footLabel="Entorno competitivo"
        footText="Compartimos plaza con franquicias internacionales; nuestra ventaja es la cercanía y la velocidad de respuesta."
      />

      <section className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
        <PlaceholderImage label="Oficina Verax en Barrio Obrero" ratio="4 / 3" watermark />
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
            Ficha corporativa
          </h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                <dt className="eyebrow shrink-0 text-muted-foreground">{fact.label}</dt>
                <dd className="min-w-0 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
          Qué nos diferencia
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <article key={item.title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="font-display text-3xl font-black text-promo">0{index + 1}</span>
              <h3 className="mt-3 font-display text-base font-bold uppercase text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
