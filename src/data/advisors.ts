import { properties, type Property } from "@/data/properties";

export interface Advisor {
  id: string;
  name: string;
  role: string;
  license: string;
  since: number;
  zones: string[];
  specialties: string[];
  languages: string[];
  bio: string;
  phone: string;
  phoneDigits: string;
  email: string;
}

export const advisors: Advisor[] = [
  {
    id: "gerardo-vera",
    name: "Gerardo Antonio Vera Parra",
    role: "Presidente y asesor principal",
    license: "Corredor inmobiliario · Registro interno VX-001",
    since: 2007,
    zones: ["Barrio Obrero", "Pueblo Nuevo", "La Castellana"],
    specialties: ["Residencias de alto valor", "Negociación y cierre", "Avalúos referenciales"],
    languages: ["Español"],
    bio: "Fundador de Inmobiliaria Verax C.A. Acompaña operaciones de compraventa en San Cristóbal desde 2007 y supervisa la verificación documental de cada captación.",
    phone: "+58 424-4259480",
    phoneDigits: "584244259480",
    email: "gerardo.vera@inmobiliariaverax.example.com",
  },
  {
    id: "maria-fernanda-rangel",
    name: "María Fernanda Rangel",
    role: "Asesora de ventas residenciales",
    license: "Registro interno VX-014",
    since: 2014,
    zones: ["Santa Cecilia", "Colinas de Pirineos", "Táriba"],
    specialties: ["Casas familiares", "Conjuntos cerrados", "Crédito y trámites"],
    languages: ["Español", "Inglés básico"],
    bio: "Especialista en vivienda familiar. Prepara la ficha técnica, coordina visitas y acompaña al comprador hasta la firma en notaría.",
    phone: "+58 414-7712209",
    phoneDigits: "584147712209",
    email: "mf.rangel@inmobiliariaverax.example.com",
  },
  {
    id: "jose-luis-contreras",
    name: "José Luis Contreras",
    role: "Asesor comercial e industrial",
    license: "Registro interno VX-022",
    since: 2016,
    zones: ["Caneyes", "La Ermita", "Barrio Obrero"],
    specialties: ["Galpones y depósitos", "Locales comerciales", "Contratos de arrendamiento"],
    languages: ["Español"],
    bio: "Atiende empresas y emprendedores que buscan espacios operativos: evalúa vialidad de carga, altura libre y uso permitido antes de mostrar el inmueble.",
    phone: "+58 412-6604318",
    phoneDigits: "584126604318",
    email: "jl.contreras@inmobiliariaverax.example.com",
  },
  {
    id: "andreina-parra",
    name: "Andreína Parra",
    role: "Asesora de alquileres",
    license: "Registro interno VX-031",
    since: 2018,
    zones: ["Barrio Obrero", "Colinas de Pirineos", "Pueblo Nuevo"],
    specialties: ["Arrendamiento residencial", "Evaluación de inquilinos", "Administración de cánones"],
    languages: ["Español"],
    bio: "Gestiona la cartera de alquileres: verifica referencias del inquilino, redacta el contrato y da seguimiento a los pagos mensuales.",
    phone: "+58 424-7185036",
    phoneDigits: "584247185036",
    email: "a.parra@inmobiliariaverax.example.com",
  },
  {
    id: "rafael-moreno",
    name: "Rafael Moreno",
    role: "Asesor de terrenos y desarrollos",
    license: "Registro interno VX-038",
    since: 2019,
    zones: ["Palo Gordo", "Cordero", "Táriba"],
    specialties: ["Parcelas y lotes", "Uso de suelo", "Proyectos mixtos"],
    languages: ["Español"],
    bio: "Trabaja captaciones en municipios Cárdenas y Andrés Bello, con foco en documentación, topografía y potencial de desarrollo.",
    phone: "+58 416-3390174",
    phoneDigits: "584163390174",
    email: "r.moreno@inmobiliariaverax.example.com",
  },
  {
    id: "daniela-suarez",
    name: "Daniela Suárez",
    role: "Asesora digital y captaciones",
    license: "Registro interno VX-045",
    since: 2021,
    zones: ["Pueblo Nuevo", "La Castellana", "Santa Cecilia"],
    specialties: ["Captación de propietarios", "Contenido y publicación", "Primer contacto por WhatsApp"],
    languages: ["Español", "Inglés"],
    bio: "Coordina la publicación diaria del inventario en redes y filtra los primeros contactos para que cada cliente llegue al asesor correcto.",
    phone: "+58 414-5528871",
    phoneDigits: "584145528871",
    email: "d.suarez@inmobiliariaverax.example.com",
  },
];

export function getAdvisor(id: string) {
  return advisors.find((advisor) => advisor.id === id);
}

export function advisorProperties(id: string): Property[] {
  return properties.filter((property) => property.advisorId === id);
}

export function advisorOf(property: Property) {
  return advisors.find((advisor) => advisor.id === property.advisorId);
}

export function advisorWhatsappLink(advisor: Advisor, message: string) {
  return `https://wa.me/${advisor.phoneDigits}?text=${encodeURIComponent(message)}`;
}
