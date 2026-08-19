import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Home, KeyRound, Truck, Users } from "lucide-react";

import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { whatsappLink } from "@/data/company";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios inmobiliarios en San Cristóbal | Verax" },
      {
        name: "description",
        content:
          "Compraventa, arrendamiento residencial y comercial, galpones y terrenos, administración de inmuebles para propietarios en el exterior y red de asesores.",
      },
      { property: "og:title", content: "Servicios inmobiliarios en San Cristóbal | Verax" },
      {
        property: "og:description",
        content: "Intermediación, contratos, administración integral y captación profesional en el estado Táchira.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    title: "Compra y venta residencial",
    body: "Casas unifamiliares, townhouses, condominios horizontales y apartamentos de media y alta gama, incluidos penthouses dúplex.",
    points: [
      "Verificación de títulos supletorios y registros",
      "Régimen de propiedad horizontal y solvencias municipales",
      "Acompañamiento hasta la firma en notaría o registro",
    ],
  },
  {
    icon: KeyRound,
    title: "Arrendamiento residencial y comercial",
    body: "Estructuración de contratos con los esquemas habituales de la plaza local, claros para propietario e inquilino.",
    points: [
      "Cánones en USD y depósitos de garantía",
      "Meses de adelanto y honorarios de redacción",
      "Evaluación de solvencia del arrendatario",
    ],
  },
  {
    icon: Truck,
    title: "Industrial, logístico y terrenos",
    body: "Galpones con portones reforzados y accesibilidad para vehículos de carga pesada, además de parcelas y propiedades campestres.",
    points: [
      "Galpones de 300 m² a 600 m²",
      "Zonas periurbanas y corredores comerciales",
      "Parcelas residenciales y terrenos comerciales",
    ],
  },
  {
    icon: Building2,
    title: "Administración integral de inmuebles",
    body: "Servicio pensado para propietarios que residen fuera del Táchira o en el exterior y necesitan un representante de confianza.",
    points: [
      "Entrega y control de llaves",
      "Inspecciones físicas y mantenimiento preventivo",
      "Cobro mensual de cánones y reporte al propietario",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        title="Servicios"
        tag="Portafolio Verax"
        lead="Un solo equipo cubre la captación, la comercialización, la redacción de contratos y la administración posterior del inmueble."
        footLabel="Seguridad jurídica"
        footText="Cada operación se documenta y se verifica antes de llegar a la mesa de negociación."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-border bg-surface p-6">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="min-w-0 font-display text-lg font-black uppercase leading-tight text-foreground">
                {service.title}
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-alert" />
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="rounded-3xl bg-promo/25 p-4 sm:p-8">
        <div className="grid gap-6 rounded-2xl bg-surface p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center sm:p-8">
          <div className="min-w-0">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-ink-foreground">
                <Users className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="min-w-0 font-display text-xl font-black uppercase leading-tight sm:text-2xl">
                Súmate a la red de asesores
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Incorporamos agentes inmobiliarios y ejecutivos de ventas externos bajo modelo de comisión por
              captación y cierre, con acompañamiento de la oficina en Barrio Obrero.
            </p>
            <a
              href={whatsappLink("Hola Verax, quiero postularme como asesor inmobiliario.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-85"
            >
              Postularme
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <PlaceholderImage label="Equipo de asesores Verax" ratio="16 / 10" />
        </div>
      </section>
    </div>
  );
}
