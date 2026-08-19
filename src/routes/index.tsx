import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Home, KeyRound, Truck } from "lucide-react";

import { ContactStrip } from "@/components/ContactStrip";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { company, whatsappLink } from "@/data/company";
import { featuredProperties } from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inmobiliaria Verax C.A. | Venta y alquiler en Táchira" },
      {
        name: "description",
        content:
          "19 años vendiendo, alquilando y administrando inmuebles en San Cristóbal y el estado Táchira: casas, apartamentos, galpones, locales y terrenos.",
      },
      { property: "og:title", content: "Inmobiliaria Verax C.A. | Venta y alquiler en Táchira" },
      {
        property: "og:description",
        content: "Catálogo en rotación diaria, verificación legal y atención directa por WhatsApp en Barrio Obrero.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Home, title: "Compra y venta", text: "Casas, apartamentos, townhouses y penthouses." },
  { icon: KeyRound, title: "Arrendamiento", text: "Contratos residenciales y comerciales en USD." },
  { icon: Truck, title: "Industrial y terrenos", text: "Galpones, depósitos y parcelas." },
  { icon: Building2, title: "Administración", text: "Para propietarios que viven fuera del Táchira." },
];

function Index() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl bg-ink text-ink-foreground">
        <div className="absolute inset-0">
          <PlaceholderImage
            label="Fotografía principal del inmueble destacado"
            ratio="auto"
            tone="dark"
            className="h-full rounded-none border-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        </div>

        <div className="relative grid min-h-[560px] gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:p-8">
          <div className="flex min-w-0 flex-col justify-end">
            <span className="eyebrow inline-flex w-fit rounded-full bg-alert px-3 py-1 text-alert-foreground">
              {company.years} años en el mercado
            </span>
            <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
              Bienes raíces
              <br />
              en el Táchira
            </h1>
            <span className="eyebrow mt-4 inline-flex w-fit rounded-md bg-promo px-2.5 py-1.5 text-promo-foreground">
              Se alquila y vende C.A.
            </span>
            <p className="mt-5 max-w-md text-sm leading-relaxed opacity-80">
              Intermediación transparente en compraventa, alquiler y administración de inmuebles en San Cristóbal y
              sus municipios vecinos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/propiedades"
                className="inline-flex items-center gap-2 rounded-full bg-ink-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
              >
                Ver propiedades
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink("Hola Verax, quiero agendar una visita.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-ink-foreground/40 bg-ink/40 px-5 py-3 text-xs font-bold uppercase tracking-widest backdrop-blur"
              >
                Agendar visita
              </a>
            </div>
          </div>

          <aside className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {featuredProperties.slice(0, 3).map((property) => (
              <Link
                key={property.id}
                to="/propiedades"
                className="group block overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink/50 backdrop-blur transition-opacity hover:opacity-85"
              >
                <PlaceholderImage
                  label={property.zone}
                  ratio="16 / 10"
                  tone="dark"
                  className="rounded-none border-0"
                />
              </Link>
            ))}
            <div className="rounded-2xl border border-ink-foreground/15 bg-ink/60 p-4 backdrop-blur">
              <p className="font-display text-2xl font-black">{company.followers}</p>
              <p className="mt-1 text-xs leading-relaxed opacity-75">
                seguidores en {company.instagram}. Explora el catálogo y encuentra tu próximo inmueble.
              </p>
            </div>
          </aside>
        </div>
      </section>


      <section aria-label="Servicios" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-border bg-surface p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-brand">
              <service.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-base font-bold uppercase text-foreground">{service.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Captaciones destacadas"
          tag="Catálogo"
          lead="Selección de inmuebles con alta demanda esta semana en venta y alquiler."
          footLabel="Materiales y acabados reales"
          footText="Fotografía diurna sin sobreedición para mostrar el inmueble tal como está."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <Link
          to="/propiedades"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-85"
        >
          Ver todo el catálogo
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </section>

      <section className="rounded-3xl bg-brand-deep p-4 sm:p-8">
        <div className="grid gap-6 rounded-2xl bg-surface p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center sm:p-8">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
              Asesoría para tu próxima operación
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Respuestas claras sobre precios de la zona, condiciones de contrato y documentación necesaria antes de
              firmar.
            </p>
            <a
              href={whatsappLink("Hola Verax, necesito asesoría inmobiliaria.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-85"
            >
              Solicitar asesoría
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <PlaceholderImage label="Sala de reuniones Verax" ratio="16 / 10" />
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
