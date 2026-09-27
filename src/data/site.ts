/**
 * Shared, editable copy and navigation for OviTech.
 * Keep public facts here so the site does not need to repeat them across routes.
 */

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: readonly NavigationItem[];
};

export type FooterColumn = {
  title: string;
  items: readonly NavigationItem[];
};

export type Cta = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  country: string;
  locale: string;
  email: string;
  url: string | null;
  description: string;
  product: string;
  technologyStatus: string;
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: readonly string[];
  };
};

export const siteConfig: SiteConfig = {
  name: "OviTech",
  country: "Colombia",
  locale: "es-CO",
  email: "oviitech@oceanotech.site",
  // Set this only when the production domain is confirmed. It intentionally
  // remains null to avoid publishing an invented canonical URL.
  url: null,
  description:
    "OviTech desarrolla Gemelos Digitales para representar, analizar, simular y anticipar sistemas agroindustriales y operaciones complejas.",
  product: "OviTech Digital Twin",
  technologyStatus:
    "Tecnología en desarrollo y validación mediante prototipos y casos de aplicación especializados.",
  seo: {
    titleTemplate: "%s | OviTech",
    defaultTitle: "OviTech | Gemelos Digitales para la agroindustria",
    defaultDescription:
      "Software para representar, analizar, simular y anticipar sistemas reales en agroindustria, agricultura, caficultura y acuicultura.",
    keywords: [
      "OviTech",
      "Gemelos Digitales Colombia",
      "Digital Twin Colombia",
      "Gemelos Digitales agroindustria",
      "Digital Twin agroindustria",
      "Gemelos Digitales agricultura",
      "Digital Twin agricultura",
      "Gemelos Digitales café",
      "Digital Twin caficultura",
      "software agroindustrial",
      "simulación agroindustrial",
      "IA agroindustrial",
      "tecnología para agroindustria",
      "software para caficultura",
      "innovación agroindustrial Colombia",
    ],
  },
};

export const primaryNavigation = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Soluciones",
    href: "/soluciones",
    children: [
      {
        label: "Digital Twin",
        href: "/soluciones/digital-twin",
        description: "Tecnología central de OviTech.",
      },
      {
        label: "AgTwins",
        href: "/soluciones/agtwins",
        description: "Aplicación para agroindustria y agricultura.",
      },
      {
        label: "BlueTwins",
        href: "/soluciones/bluetwins",
        description: "Aplicación en desarrollo para salmonicultura.",
      },
      {
        label: "Coffee Twins",
        href: "/soluciones/coffee-twins",
        description: "Línea de investigación para caficultura.",
      },
    ],
  },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Investigación", href: "/investigacion" },
] as const satisfies readonly NavigationItem[];

export const headerCta: Cta = {
  label: "Hablar con OviTech",
  href: "/contacto",
};

export const footerNavigation = [
  {
    title: "OviTech",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Tecnología", href: "/tecnologia" },
    ],
  },
  {
    title: "Soluciones",
    items: [
      { label: "Digital Twin", href: "/soluciones/digital-twin" },
      { label: "AgTwins", href: "/soluciones/agtwins" },
      { label: "BlueTwins", href: "/soluciones/bluetwins" },
      { label: "Caficultura", href: "/soluciones/coffee-twins" },
    ],
  },
  {
    title: "Investigación",
    items: [
      { label: "Artículos", href: "/investigacion" },
      { label: "Investigación y desarrollo", href: "/investigacion#desarrollo" },
    ],
  },
  {
    title: "Contacto",
    items: [{ label: siteConfig.email, href: `mailto:${siteConfig.email}` }],
  },
  {
    title: "Legal",
    items: [
      { label: "Política de privacidad", href: "/politica-de-privacidad" },
      { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
] as const satisfies readonly FooterColumn[];

export const homeContent = {
  hero: {
    eyebrow: "Tecnología aplicada para sistemas productivos",
    title: "Gemelos Digitales para la agroindustria",
    subtitle: "Software para representar, analizar, simular y anticipar sistemas reales.",
    description:
      "OviTech desarrolla tecnología de Gemelos Digitales para convertir datos productivos y operacionales en modelos digitales capaces de representar sistemas reales, explorar escenarios y apoyar decisiones.",
    primaryCta: { label: "Explorar Digital Twin", href: "/soluciones/digital-twin" },
    secondaryCta: { label: "Conocer AgTwins", href: "/soluciones/agtwins" },
  },
  whatWeDo: {
    eyebrow: "Qué hacemos",
    title: "Un modelo digital que conecta lo que ocurre con lo que podría ocurrir.",
    description:
      "Un Gemelo Digital integra información, estado y comportamiento de un sistema para hacerlo observable, modelable y comparable. No es solo una visualización: permite formular hipótesis, simular escenarios y contrastar los resultados.",
  },
  centralTechnology: {
    eyebrow: "Tecnología central",
    title: "OviTech Digital Twin",
    description:
      "Una base de software para integrar datos disponibles, representar el sistema relevante y construir ciclos de simulación, predicción, decisión y verificación.",
    cta: { label: "Conocer la tecnología", href: "/soluciones/digital-twin" },
  },
  applications: {
    eyebrow: "Aplicaciones",
    title: "La misma tecnología, distintos contextos de operación.",
    description:
      "OviTech Digital Twin puede orientarse a dominios donde los datos, las condiciones operacionales y las decisiones necesitan leerse como un sistema.",
  },
  sector: {
    eyebrow: "Foco inicial",
    title: "Tecnología para entender sistemas agroindustriales.",
    description:
      "El foco de OviTech está en agroindustria, agricultura, caficultura, producción, transformación y otros sistemas productivos que requieren integrar información y validar decisiones en contexto.",
  },
  research: {
    eyebrow: "¿En qué estamos?",
    title: "Investigación, desarrollo, prototipado y validación.",
    description:
      "Somos una startup en desarrollo tecnológico activo. Avanzamos mediante preguntas de dominio, arquitectura de datos, prototipos y validación responsable de cada caso de uso.",
    cta: { label: "Ver investigaciones y artículos", href: "/investigacion" },
  },
  finalCta: {
    title: "¿Qué sistema quieres modelar?",
    description:
      "Cuéntanos sobre el sistema, proceso o problema que quieres comprender, simular o anticipar.",
    cta: { label: "Hablar con OviTech", href: "/contacto" },
  },
} as const;

export const twinLifecycle = [
  {
    id: "observe",
    label: "Observe",
    title: "Observar",
    description: "Identificar el sistema, sus variables relevantes y las fuentes de información disponibles.",
  },
  {
    id: "model",
    label: "Model",
    title: "Modelar",
    description: "Representar estados, relaciones y reglas de comportamiento que importan para el caso.",
  },
  {
    id: "simulate",
    label: "Simulate",
    title: "Simular",
    description: "Explorar escenarios y cambios posibles antes de aplicarlos al sistema real.",
  },
  {
    id: "predict",
    label: "Predict",
    title: "Anticipar",
    description: "Estimar comportamientos o desviaciones según los datos y el modelo disponible.",
  },
  {
    id: "decide",
    label: "Decide",
    title: "Decidir",
    description: "Comparar alternativas con contexto para apoyar decisiones operacionales o estratégicas.",
  },
  {
    id: "verify",
    label: "Verify",
    title: "Verificar",
    description: "Contrastar los resultados y mejorar el modelo a partir de lo observado.",
  },
] as const;

export const discoveryJourney = [
  {
    id: "discovery",
    title: "Discovery",
    description: "Delimitar el sistema, la pregunta de negocio y las condiciones de validación.",
  },
  {
    id: "data",
    title: "Data",
    description: "Revisar datos históricos, fuentes existentes, calidad e integración posible.",
  },
  {
    id: "prototype",
    title: "Prototype",
    description: "Construir una primera representación orientada a un caso de uso concreto.",
  },
  {
    id: "validate",
    title: "Validate",
    description: "Comparar el comportamiento del modelo con el contexto y los datos del dominio.",
  },
  {
    id: "pilot",
    title: "Pilot",
    description: "Probar una aplicación acotada con objetivos y criterios de aprendizaje definidos.",
  },
  {
    id: "scale",
    title: "Scale",
    description: "Ampliar solo cuando el caso de uso y la validación técnica lo permitan.",
  },
] as const;

export const b2bQuestions = [
  {
    question: "¿Qué hacen?",
    answer:
      "Desarrollamos Gemelos Digitales: software para representar, analizar, simular y anticipar sistemas reales.",
  },
  {
    question: "¿Para qué sirve?",
    answer:
      "Para integrar información relevante, comprender el estado de un sistema, explorar escenarios y apoyar decisiones.",
  },
  {
    question: "¿Qué datos necesita?",
    answer:
      "Depende del caso de uso. Un proyecto puede comenzar con históricos y fuentes existentes, siempre que se evalúen su contexto y calidad.",
  },
  {
    question: "¿Necesitamos comprar hardware?",
    answer:
      "No necesariamente. La tecnología puede integrar APIs, bases de datos, sistemas empresariales, archivos históricos, plataformas IoT, sensores existentes, PLC y otras fuentes disponibles.",
  },
  {
    question: "¿Puede integrarse con sistemas existentes?",
    answer:
      "Sí. La arquitectura se plantea para integrar fuentes disponibles; la viabilidad se define al revisar cada entorno técnico.",
  },
  {
    question: "¿Está validado?",
    answer:
      "OviTech está en desarrollo y validación tecnológica. Cada aplicación debe validarse técnicamente según su dominio, datos y modelo.",
  },
] as const;

export const companyContent = {
  title: "Nosotros",
  intro:
    "OviTech es una startup colombiana de innovación tecnológica aplicada a la agroindustria, agricultura y caficultura.",
  description:
    "Desarrollamos software especializado para representar sistemas reales mediante Gemelos Digitales y convertir datos operacionales y productivos en modelos capaces de ser analizados, simulados y utilizados como apoyo para la toma de decisiones.",
  mission: "Desarrollar tecnología que permita comprender y anticipar sistemas productivos complejos.",
  vision:
    "Construir una nueva generación de software para representar digitalmente sistemas reales de la agroindustria y otros sectores productivos.",
  approaches: [
    "Software-first",
    "Research-driven",
    "Data-driven",
    "Simulation",
    "Applied AI",
    "Digital Twins",
  ],
  principles: [
    "Rigor tecnológico",
    "Experimentación",
    "Validación",
    "Interoperabilidad",
    "Responsabilidad",
    "Escalabilidad",
  ],
} as const;
