import { Link, useLocation } from "@tanstack/react-router";
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
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "fixed top-0 left-0 right-0 z-50 border-b border-ink-foreground/10 bg-ink/30 backdrop-blur-xl"
          : "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur"
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="min-w-0" aria-label="Inicio Inmobiliaria Verax">
          <VeraxLogo tone={isHome ? "light" : "ink"} />
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{
                  className: isHome ? "bg-ink-foreground/10 text-ink-foreground" : "bg-muted text-foreground",
                }}
                className={
                  isHome
                    ? "rounded-full px-3 py-2 text-sm font-medium text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                    : "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contacto"
            className={
              isHome
                ? "hidden rounded-full bg-ink-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-ink transition-opacity hover:opacity-85 sm:inline-flex"
                : "hidden rounded-full bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-85 sm:inline-flex"
            }
          >
            Contacto
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={
              isHome
                ? "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground lg:hidden"
                : "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border lg:hidden"
            }
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className={
            isHome
              ? "border-b border-ink-foreground/10 bg-ink/95 px-4 py-4 backdrop-blur-xl lg:hidden"
              : "border-t border-border bg-background px-4 py-4 lg:hidden"
          }
          aria-label="Navegación móvil"
        >
          <ul className="space-y-1">
            {[...links, { to: "/contacto", label: "Contacto" } as const].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={
                    isHome
                      ? "block rounded-xl px-4 py-3 font-display text-lg font-bold uppercase text-ink-foreground hover:bg-ink-foreground/10"
                      : "block rounded-xl px-4 py-3 font-display text-lg font-bold uppercase text-foreground hover:bg-muted"
                  }
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
