import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { ContactStrip } from "@/components/ContactStrip";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { addressLine, company, whatsappLink } from "@/data/company";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Inmobiliaria Verax C.A. San Cristóbal" },
      {
        name: "description",
        content:
          "Escríbenos por WhatsApp +58 424-4259480 o llama al 0276-3533561. Oficina en Carrera 20, Barrio Obrero, San Cristóbal, de lunes a viernes de 08:00 a 17:30.",
      },
      { property: "og:title", content: "Contacto — Inmobiliaria Verax C.A. San Cristóbal" },
      {
        property: "og:description",
        content: "Agenda una cita, consulta un inmueble o solicita administración de tu propiedad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Compra de inmueble");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (name.trim().length < 3 || phone.trim().length < 7) {
      setError("Indica tu nombre completo y un teléfono válido para poder contactarte.");
      return;
    }
    setError(null);
    const text = `Hola Verax, soy ${name.trim()} (${phone.trim()}). Interés: ${interest}. ${message.trim()}`;
    window.open(whatsappLink(text), "_blank", "noopener");
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        title="Hablemos de tu inmueble"
        tag="Contacto"
        lead="Coordinamos visitas con cita previa y atendemos propietarios dentro y fuera del país."
        footLabel="Canal preferido"
        footText="WhatsApp Business para respuesta rápida en horario de oficina."
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <section className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-display text-xl font-black uppercase">Datos de la oficina</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <InfoRow icon={<MapPin className="h-4 w-4" />} label="Dirección" value={addressLine} />
              <InfoRow
                icon={<Phone className="h-4 w-4" />}
                label="Teléfonos"
                value={`Fijo ${company.phone} · WhatsApp ${company.whatsapp} · Móvil ${company.mobile}`}
              />
              <InfoRow icon={<Clock className="h-4 w-4" />} label="Horario" value={company.hours} />
              <InfoRow
                icon={<Instagram className="h-4 w-4" />}
                label="Redes"
                value={company.accounts.map((a) => a.handle).join(" · ")}
              />
            </ul>
            <a
              href={whatsappLink("Hola Verax, quiero agendar una cita.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-alert px-5 py-3 text-xs font-bold uppercase tracking-widest text-alert-foreground transition-opacity hover:opacity-85"
            >
              Escribir por WhatsApp
            </a>
          </div>
          <PlaceholderImage label="Ubicación de la oficina en Barrio Obrero" ratio="16 / 9" />
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="font-display text-xl font-black uppercase">Solicita información</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Completa los datos y abriremos un chat de WhatsApp con tu mensaje ya redactado.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <Field label="Nombre y apellido">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Ej. María Rodríguez"
              />
            </Field>
            <Field label="Teléfono o WhatsApp">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Ej. 0414 000 0000"
              />
            </Field>
            <Field label="Motivo de contacto">
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Compra de inmueble</option>
                <option>Alquiler de inmueble</option>
                <option>Quiero vender mi propiedad</option>
                <option>Quiero alquilar mi propiedad</option>
                <option>Administración de inmueble</option>
                <option>Quiero ser asesor</option>
              </select>
            </Field>
            <Field label="Mensaje">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Zona de interés, presupuesto y características que buscas."
              />
            </Field>

            {error ? (
              <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-full bg-ink px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink-foreground transition-opacity hover:opacity-85"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </section>
      </div>

      <ContactStrip />
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-muted text-foreground">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="eyebrow block text-muted-foreground">{label}</span>
        <span className="mt-0.5 block leading-relaxed text-foreground">{value}</span>
      </span>
    </li>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
