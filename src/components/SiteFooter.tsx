import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { VeraxLogo } from "@/components/VeraxLogo";
import { company, addressLine, whatsappLink } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-brand-deep px-6 py-10 text-ink-foreground sm:px-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="font-display text-3xl font-black uppercase leading-[0.95] sm:text-5xl">
              Bienes raíces
              <br />
              en el Táchira
            </p>
            <span className="eyebrow mt-4 inline-block rounded-md bg-promo px-2 py-1 text-promo-foreground">
              Se alquila y vende C.A.
            </span>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-75">{addressLine}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <span className="eyebrow opacity-60">Navegación</span>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  { to: "/propiedades", label: "Propiedades" },
                  { to: "/servicios", label: "Servicios" },
                  { to: "/zonas", label: "Zonas" },
                  { to: "/nosotros", label: "Nosotros" },
                  { to: "/contacto", label: "Contacto" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="opacity-80 transition-opacity hover:opacity-100">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow opacity-60">Contacto directo</span>
              <ul className="mt-3 space-y-2 text-sm opacity-80">
                <li>
                  <a href={`tel:${company.phoneIntl}`}>{company.phone}</a>
                </li>
                <li>
                  <a href={whatsappLink("Hola Verax, quiero información sobre sus inmuebles.")} target="_blank" rel="noreferrer">
                    WhatsApp {company.whatsapp}
                  </a>
                </li>
                <li>{company.hours}</li>
                <li>{company.instagram}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-ink-foreground/20 pt-6">
          <div className="min-w-0">
            <VeraxLogo tone="light" />
          </div>
          <a
            href={whatsappLink("Hola Verax, deseo agendar una cita.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-promo px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-promo-foreground"
          >
            Agenda tu cita
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-6 text-[11px] opacity-55">
          © {new Date().getFullYear()} {company.legalName} · RIF y datos registrales disponibles en oficina.
        </p>
      </div>
    </footer>
  );
}
