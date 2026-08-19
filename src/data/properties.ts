export type Operation = "venta" | "alquiler";

export type PropertyType =
  | "Casa"
  | "Apartamento"
  | "Townhouse"
  | "Penthouse"
  | "Galpón"
  | "Local"
  | "Terreno";

export type PropertyStatus = "Nueva captación" | "Bajó de precio" | "Promo del día" | "Disponible";

export interface Property {
  id: string;
  code: string;
  title: string;
  type: PropertyType;
  operation: Operation;
  zone: string;
  reference: string;
  area: number;
  built?: number;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  price: number;
  advisorId: string;
  status: PropertyStatus;
  highlights: string[];
  featured?: boolean;
}

export const ZONES = [
  "Barrio Obrero",
  "Pueblo Nuevo",
  "La Castellana",
  "Santa Cecilia",
  "Colinas de Pirineos",
  "Caneyes",
  "La Ermita",
  "Palo Gordo",
  "Táriba",
  "Cordero",
] as const;

export const PROPERTY_TYPES: PropertyType[] = [
  "Casa",
  "Apartamento",
  "Townhouse",
  "Penthouse",
  "Galpón",
  "Local",
  "Terreno",
];

export const properties: Property[] = [
  {
    id: "vx-01",
    advisorId: "gerardo-vera",
    code: "VX-1042",
    title: "Apartamento dúplex en Residencias Sierra Azul",
    type: "Apartamento",
    operation: "venta",
    zone: "Pueblo Nuevo",
    reference: "Residencias Sierra Azul, conjunto cerrado con vigilancia",
    area: 168,
    built: 154,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    price: 78000,
    status: "Nueva captación",
    highlights: ["Cocina empotrada con topes de granito", "Balcón con vista a la montaña", "Closets de madera"],
    featured: true,
  },
  {
    id: "vx-02",
    advisorId: "maria-fernanda-rangel",
    code: "VX-1048",
    title: "Casa unifamiliar en Santa Cecilia",
    type: "Casa",
    operation: "venta",
    zone: "Santa Cecilia",
    reference: "A pocos minutos de la avenida principal y la ULA",
    area: 320,
    built: 245,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    price: 95000,
    status: "Bajó de precio",
    highlights: ["Patio posterior con jardín", "Estacionamiento techado", "Área de servicio independiente"],
    featured: true,
  },
  {
    id: "vx-03",
    advisorId: "jose-luis-contreras",
    code: "VX-1055",
    title: "Galpón industrial con acceso para gandolas",
    type: "Galpón",
    operation: "alquiler",
    zone: "Caneyes",
    reference: "Zona periurbana con vialidad de carga pesada",
    area: 520,
    bathrooms: 2,
    parking: 4,
    price: 1200,
    status: "Disponible",
    highlights: ["Portón reforzado de 5 m", "Altura libre de 7 m", "Oficina administrativa interna"],
    featured: true,
  },
  {
    id: "vx-04",
    advisorId: "jose-luis-contreras",
    code: "VX-1061",
    title: "Local comercial en la Carrera 20",
    type: "Local",
    operation: "alquiler",
    zone: "Barrio Obrero",
    reference: "Carrera 20 entre Calles 10 y 11, alto tráfico peatonal",
    area: 86,
    bathrooms: 1,
    price: 550,
    status: "Promo del día",
    highlights: ["Vitrina a calle", "Depósito interno", "Punto comercial consolidado"],
    featured: true,
  },
  {
    id: "vx-05",
    advisorId: "maria-fernanda-rangel",
    code: "VX-1067",
    title: "Townhouse en conjunto cerrado La Castellana",
    type: "Townhouse",
    operation: "venta",
    zone: "La Castellana",
    reference: "Conjunto residencial con áreas comunes y portería 24 h",
    area: 210,
    built: 186,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    price: 89500,
    status: "Disponible",
    highlights: ["Régimen de propiedad horizontal", "Terraza posterior", "Cocina con isla"],
  },
  {
    id: "vx-06",
    advisorId: "gerardo-vera",
    code: "VX-1072",
    title: "Penthouse dúplex con vista panorámica",
    type: "Penthouse",
    operation: "venta",
    zone: "Pueblo Nuevo",
    reference: "Torre residencial con ascensor y planta eléctrica",
    area: 285,
    built: 264,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    price: 165000,
    status: "Nueva captación",
    highlights: ["Doble altura en sala", "Terraza privada", "Habitación principal con vestier"],
  },
  {
    id: "vx-07",
    advisorId: "andreina-parra",
    code: "VX-1080",
    title: "Casa en condominio horizontal Colinas de Pirineos",
    type: "Casa",
    operation: "alquiler",
    zone: "Colinas de Pirineos",
    reference: "Sector residencial consolidado, vías asfaltadas",
    area: 260,
    built: 198,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    price: 700,
    status: "Disponible",
    highlights: ["Semiamoblada", "Tanque de agua propio", "Depósito de garantía y un mes de adelanto"],
  },
  {
    id: "vx-08",
    advisorId: "jose-luis-contreras",
    code: "VX-1085",
    title: "Depósito logístico en La Ermita",
    type: "Galpón",
    operation: "alquiler",
    zone: "La Ermita",
    reference: "Corredor industrial con acceso directo a vía principal",
    area: 340,
    bathrooms: 1,
    parking: 2,
    price: 850,
    status: "Bajó de precio",
    highlights: ["Piso de concreto pulido", "Área de carga y descarga", "Apto para almacenamiento"],
  },
  {
    id: "vx-09",
    advisorId: "andreina-parra",
    code: "VX-1091",
    title: "Apartamento familiar en Barrio Obrero",
    type: "Apartamento",
    operation: "alquiler",
    zone: "Barrio Obrero",
    reference: "Edificio con conserjería, cercano a bancos y notarías",
    area: 112,
    built: 104,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    price: 420,
    status: "Disponible",
    highlights: ["Cocina empotrada", "Puesto de estacionamiento techado", "Canon en USD"],
  },
  {
    id: "vx-10",
    advisorId: "rafael-moreno",
    code: "VX-1096",
    title: "Parcela residencial en Palo Gordo",
    type: "Terreno",
    operation: "venta",
    zone: "Palo Gordo",
    reference: "Desarrollo suburbano, municipio Cárdenas",
    area: 480,
    price: 32000,
    status: "Disponible",
    highlights: ["Servicios de agua y electricidad en frente", "Topografía plana", "Documentación en regla"],
  },
  {
    id: "vx-11",
    advisorId: "daniela-suarez",
    code: "VX-1103",
    title: "Casa campestre en Táriba",
    type: "Casa",
    operation: "venta",
    zone: "Táriba",
    reference: "Sector tranquilo con clima templado, municipio Cárdenas",
    area: 640,
    built: 220,
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    price: 72000,
    status: "Promo del día",
    highlights: ["Amplio jardín", "Terraza techada", "Pozo de agua"],
  },
  {
    id: "vx-12",
    advisorId: "rafael-moreno",
    code: "VX-1110",
    title: "Terreno comercial en Cordero",
    type: "Terreno",
    operation: "venta",
    zone: "Cordero",
    reference: "Frente a vía principal, municipio Andrés Bello",
    area: 1200,
    price: 65000,
    status: "Nueva captación",
    highlights: ["Uso comercial permitido", "Amplio frente", "Ideal para desarrollo mixto"],
  },
];

export const featuredProperties = properties.filter((p) => p.featured);

export function formatPrice(property: Property) {
  const value = property.price.toLocaleString("es-VE");
  return property.operation === "venta" ? `$${value}` : `$${value} / mes`;
}
