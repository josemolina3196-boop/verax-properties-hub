export const company = {
  name: "Inmobiliaria Verax C.A.",
  legalName: "Inmobiliaria Verax Se Alquila y Vende, C.A.",
  president: "Gerardo Antonio Vera Parra",
  presidentId: "C.I. V-17.812.755",
  years: 19,
  address: {
    line1: "Carrera 20, entre Pasaje Acueducto y Calle 11",
    line2: "Edificio N° 10-152, Piso 1, Sector Barrio Obrero",
    city: "San Cristóbal",
    state: "Estado Táchira",
    country: "Venezuela",
    postalCode: "5001",
  },
  phone: "0276-3533561",
  phoneIntl: "+582763533561",
  whatsapp: "+58 424-4259480",
  whatsappDigits: "584244259480",
  mobile: "+58 276-4259480",
  hours: "Lunes a viernes, 08:00 a 17:30",
  email: "hello@inmobiliariaverax.example.com",
  instagram: "@inmobiliaria_verax",
  followers: "16.5K",
  posts: "1.885",
  accounts: [
    { handle: "@inmobiliaria_verax", detail: "Cuenta principal y catálogo diario" },
    { handle: "@verax.venta", detail: "Inmuebles exclusivamente en venta" },
    { handle: "@veraxalquiler", detail: "Propiedades en arrendamiento" },
    { handle: "@veraxmerida", detail: "Captaciones en el estado Mérida" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const addressLine = `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state}`;
