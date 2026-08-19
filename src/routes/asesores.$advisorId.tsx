import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { ContactStrip } from "@/components/ContactStrip";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { advisorProperties, advisorWhatsappLink, getAdvisor } from "@/data/advisors";

export const Route = createFileRoute("/asesores/$advisorId")({
  loader: ({ params }) => {
    const advisor = getAdvisor(params.advisorId);
    if (!advisor) throw notFound();
    return { advisor, portfolio: advisorProperties(advisor.id) };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.advisor.name ?? "Asesor de ventas";
    const title = `${name} — Asesor de Inmobiliaria Verax`;
    const description = loaderData?.advisor.bio ?? "Perfil del asesor de ventas de Inmobiliaria Verax C.A.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: AdvisorProfilePage,
  errorComponent: ({ error }) => (
    <div role="alert" className="mx-auto max-w-3xl px-4 py-16 text-sm text-muted-foreground">
      {error.message}
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-display text-2xl font-black uppercase">Asesor no encontrado</h1>
      <Link to="/nosotros" className="mt-4 inline-block text-sm font-semibold text-brand underline">
        Ver todo el equipo
      </Link>
    </div>
  ),
});

function AdvisorProfilePage() {
  const { advisor, portfolio } = Route.useLoaderData();
  const forSale = portfolio.filter((p) => p.operation === "venta");
  const forRent = portfolio.filter((p) => p.operation === "alquiler");

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        title={advisor.name}
        tag={advisor.role}
        lead={advisor.bio}
        footLabel="Cartera activa"
        footText={`${portfolio.length} inmuebles asignados · ${forSale.length} en venta · ${forRent.length} en alquiler`}
      />

      <section className="grid gap-6 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] md:items-start">
        <PlaceholderImage label={advisor.name} ratio="4 / 5" watermark />
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-black uppercase leading-tight">Ficha del asesor</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {[
              { label: "Cargo", value: advisor.role },
              { label: "Registro", value: advisor.license },
              { label: "Experiencia", value: `Desde ${advisor.since}` },
              { label: "Zonas", value: advisor.zones.join(", ") },
              { label: "Especialidades", value: advisor.specialties.join(", ") },
              { label: "Idiomas", value: advisor.languages.join(", ") },
              { label: "Teléfono", value: advisor.phone },
              { label: "Correo", value: advisor.email },
            ].map((row) => (
              <div key={row.label} className="grid gap-1 py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
                <dt className="eyebrow shrink-0 text-muted-foreground">{row.label}</dt>
                <dd className="min-w-0 break-words text-sm text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href={advisorWhatsappLink(
              advisor,
              `Hola ${advisor.name.split(" ")[0]}, vi tu perfil en la web de Inmobiliaria Verax y quiero información sobre tus inmuebles.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-black uppercase leading-tight">Inmuebles a su cargo</h2>
        {portfolio.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p className="mt-6 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Este asesor no tiene inmuebles publicados en este momento.
          </p>
        )}
      </section>

      <ContactStrip />
    </div>
  );
}
