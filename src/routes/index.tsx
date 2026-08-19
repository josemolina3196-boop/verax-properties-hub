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
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-ink-foreground sm:p-10 lg:p-12">
          <span className="eyebrow rounded-full bg-alert px-3 py-1 text-alert-foreground">
            {company.years} años en el mercado
          </span>
          <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            Bienes raíces
            <br />
            en el Táchira
          </h1>
          <span className="eyebrow mt-4 inline-block rounded-md bg-promo px-2.5 py-1.5 text-promo-foreground">
            Se alquila y vende C.A.
          </span>
          <p className="mt-6 max-w-md text-sm leading-relaxed opacity-75 sm:text-base">
            Intermediación transparente en compraventa, alquiler y administración de inmuebles en San Cristóbal y
            sus municipios vecinos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
              className="inline-flex items-center rounded-full border border-ink-foreground/30 px-5 py-3 text-xs font-bold uppercase tracking-widest"
            >
              Agendar visita
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <PlaceholderImage label="Fachada residencial destacada" ratio="4 / 3" watermark />
          <PlaceholderImage label="Interior de apartamento" ratio="4 / 3" watermark />
          <div className="rounded-3xl bg-brand p-6 text-brand-foreground sm:col-span-2">
            <p className="font-display text-3xl font-black">{company.followers}</p>
            <p className="mt-1 text-sm opacity-80">
              seguidores en {company.instagram} y más de {company.posts} publicaciones activas.
            </p>
          </div>
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
