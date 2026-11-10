import { expertsEn } from "@/lib/content-en";
import { contact } from "@/lib/data";
import type { Locale } from "@/lib/locale";
import { media } from "@/lib/media";

export interface Expert {
  slug: string;
  name: string;
  role: string;
  practice: string;
  location: string;
  email: string;
  teaser: string;
  bio: string;
  advises: string;
  approach: string;
  typicalMatters: string[];
  focus: string[];
  languages: string[];
  admitted: string;
  image: string;
}

export const experts: Expert[] = [
  {
    slug: "duvan-rambal",
    name: "Duvan Rambal",
    role: "Contacto principal",
    practice: "Empresa y propiedad intelectual",
    location: "Colombia",
    email: contact.email,
    teaser:
      "Primera conversación del asunto: qué proteger, qué contratar y cómo llevarlo con el equipo por WhatsApp.",
    bio: "Duvan es el punto de entrada de Gradiente Jurídico. Recibe el caso, ordena el riesgo y define si el camino es registro, contrato, sociedad, cumplimiento o controversia — o una combinación. Trabaja con empresas y proyectos que necesitan una lectura de negocio, no solo un trámite.\n\nEn una boutique el cuello de botella suele ser el diagnóstico: ¿la marca ya se usa sin titularidad clara? ¿El contrato no cubre la alianza? ¿Hay un conflicto societario o un tercero cerca del signo? Duvan traduce eso en un plan accionable.",
    advises:
      "Empresas, fundadores y equipos que van a lanzar, contratar, constituir o defender un activo o una relación comercial en Colombia.",
    approach:
      "Primero el objetivo comercial. Después el mapa: PI, contratos, sociedad y riesgo. WhatsApp es el hilo rápido; el encargo formal queda por escrito.",
    typicalMatters: [
      "Diagnóstico de portafolio de marcas, contratos y estructura societaria",
      "Priorizar qué registrar, qué documentar y qué puede esperar",
      "Coordinar vigilancia, negociación y defensa",
      "Alinear titulares, socios y proveedores para que el activo no se diluya",
    ],
    focus: [
      "Estrategia de empresa y PI",
      "Relación con el cliente",
      "Coordinación preventiva y contenciosa",
    ],
    languages: ["Español"],
    admitted: "Colombia",
    image: media.team1,
  },
  {
    slug: "helena-novoa",
    name: "Helena Novoa",
    role: "Propiedad intelectual",
    practice: "Marcas y derechos de autor",
    location: "Colombia",
    email: contact.email,
    teaser:
      "Identidad de marca, contenidos y obras: registro, uso en el mercado y reglas con terceros.",
    bio: "Helena se ocupa de la identidad que el mercado reconoce: signos distintivos, nombres, empaques y el contenido que la empresa produce. Combina el trámite ante la Superintendencia de Industria y Comercio y, en obras, las vías de derechos de autor, con una lectura de cómo se usa el activo en canales, empaque y contratos.\n\nEl error frecuente es invertir en marca o contenido sin titularidad oponible, o firmar con agencias y creadores sin cesión. Helena ordena clases, anterioridades y el perímetro de uso para que el signo y las obras aguanten crecimiento, franquicia o exportación.",
    advises:
      "Marcas de consumo, estudios, software houses y empresas que publican contenido o trabajan con agencias, influencers y colaboradores.",
    approach:
      "Búsqueda de anterioridades y riesgo de colisión antes de gastar en diseño o pauta. Luego registro, reglas de uso y licencias. Si hay un tercero cerca del signo, se evalúa oposición o coexistencia con criterio comercial.",
    typicalMatters: [
      "Registro y vigilancia de marcas en Colombia y estrategia en el exterior",
      "Titularidad de obras, software y contenido entre autores y empresa",
      "Contratos de licencia, merchandising y uso de marca por distribuidores",
      "Cesiones con agencias, freelancers y creadores",
    ],
    focus: ["Marcas", "Derechos de autor", "Licencias"],
    languages: ["Español"],
    admitted: "Colombia",
    image: media.team2,
  },
  {
    slug: "juan-pablo-uribe-prada",
    name: "Juan Pablo Uribe Prada",
    role: "Derecho empresarial",
    practice: "Insolvencia, societario y patrimonio",
    location: "Colombia",
    email: contact.email,
    teaser:
      "Reorganización, recuperación de cartera y estructuras societarias con criterio de negocio.",
    bio: "Abogado de la Universidad del Tolima y especialista en Derecho Administrativo de la Universidad Externado de Colombia, donde cursa la especialización en Derecho de los Negocios. Tiene formación en Procesos Concursales de la Universidad de los Andes.\n\nSu práctica se concentra en insolvencia empresarial, derecho societario, protección patrimonial y recuperación de cartera. Asesora a comerciantes que evalúan acogerse a un proceso de reorganización y a acreedores que buscan recuperar sus créditos cuando el deudor entra en insolvencia. Estructura compraventa de acciones, pactos de accionistas, fideicomisos, mandatos, cuentas en participación y factoring, y acompaña a familias y empresarios en la planeación patrimonial.",
    advises:
      "Comerciantes ante insolvencia, acreedores en recuperación de cartera, sociedades que estructuran operaciones de capital y familias empresarias que ordenan su patrimonio.",
    approach:
      "Primero el mapa de riesgo: deuda, activos, socios y plazos legales. Después la vía — reorganización, negociación o contrato — con documentos que se puedan cumplir.",
    typicalMatters: [
      "Procesos de reorganización empresarial y estrategia del comerciante",
      "Recuperación de cartera ante deudores en insolvencia",
      "Compraventa de acciones, acuerdos de accionistas y gobierno corporativo",
      "Fideicomisos, mandatos, cuentas en participación y factoring",
      "Planeación y protección patrimonial familiar y empresarial",
    ],
    focus: ["Insolvencia", "Derecho societario", "Patrimonio"],
    languages: ["Español"],
    admitted: "Colombia",
    image: media.team3,
  },
];

export function listExperts(locale: Locale = "es"): Expert[] {
  if (locale !== "en") return experts;
  return experts.map((expert) => ({
    ...expert,
    ...expertsEn[expert.slug],
  }));
}

export function getExpert(slug: string, locale: Locale = "es") {
  return listExperts(locale).find((expert) => expert.slug === slug);
}
