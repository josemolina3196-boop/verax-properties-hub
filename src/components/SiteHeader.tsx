import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { VeraxLogo } from "@/components/VeraxLogo";

const links = [
  { to: "/propiedades", label: "Propiedades" },
  { to: "/servicios", label: "Servicios" },
  { to: "/zonas", label: "Zonas" },
  { to: "/nosotros", label: "Nosotros" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="min-w-0" aria-label="Inicio Inmobiliaria Verax">
          <VeraxLogo />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "bg-muted text-foreground" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contacto"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Contacto
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Navegación móvil">
          <ul className="space-y-1">
            {[...links, { to: "/contacto", label: "Contacto" } as const].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-display text-lg font-bold uppercase text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
