/**
 * OviTech has one central product: OviTech Digital Twin.
 * The remaining entries are application lines of that technology, not
 * independent companies or unrelated products.
 */

export type SolutionId = "digital-twin" | "agtwins" | "bluetwins" | "coffee-twins";

export type SolutionKind = "central-product" | "application";

export type SolutionStatus = {
  label: string;
  description: string;
};

export type Capability = {
  id: string;
  label: string;
  description: string;
};

export type ArchitectureLayer = {
  id: string;
  label: string;
  description: string;
};

export type ApplicationArea = {
  title: string;
  description: string;
};

export type Solution = {
  id: SolutionId;
  slug: string;
  href: string;
  kind: SolutionKind;
  name: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  overview: string;
  card: {
    title: string;
    description: string;
    visual: "core" | "agriculture" | "aquaculture" | "coffee";
  };
  status: SolutionStatus;
  capabilities?: readonly Capability[];
  architecture?: readonly ArchitectureLayer[];
  applicationAreas?: readonly ApplicationArea[];
  variables?: readonly string[];
  outcomes?: readonly string[];
  integrationSources?: readonly string[];
  conceptualModel?: readonly string[];
  audiences: readonly string[];
  considerations: readonly string[];
  cta: {
    label: string;
    href: string;
  };
};

export const digitalTwinCapabilities = [
  {
    id: "data-integration",
    label: "Data Integration",
    description:
      "Conectar y contextualizar fuentes disponibles para leer el sistema como un conjunto.",
  },
  {
    id: "modeling",
    label: "Modeling",
    description:
      "Representar variables, estados, relaciones y reglas relevantes para el caso de uso.",
  },
  {
    id: "simulation",
    label: "Simulation",
    description:
      "Explorar escenarios y supuestos de forma controlada antes de actuar sobre el sistema real.",
  },
  {
    id: "predictive-intelligence",
    label: "Predictive Intelligence",
    description:
      "Estimar comportamientos o desviaciones a partir de los datos, el modelo y su validación.",
  },
  {
    id: "decision-support",
    label: "Decision Support",
    description:
      "Comparar alternativas y presentar información útil para apoyar decisiones contextualizadas.",
  },
  {
    id: "optimization",
    label: "Optimization",
    description:
      "Buscar configuraciones o escenarios de interés cuando la calidad del caso y su validación lo permitan.",
  },
] as const satisfies readonly Capability[];

export const digitalTwinArchitecture = [
  {
    id: "physical-system",
    label: "Sistema físico",
    description: "El proceso, activo, operación o sistema productivo que se busca comprender.",
  },
  {
    id: "data-sources",
    label: "Fuentes de datos",
    description: "Históricos, eventos, sistemas existentes, sensores y otras fuentes disponibles.",
  },
  {
    id: "data-layer",
    label: "Data layer",
    description: "Integración, organización y trazabilidad de la información relevante.",
  },
  {
    id: "digital-twin",
    label: "Digital Twin",
    description: "Modelo digital que representa el estado, las relaciones y el comportamiento del sistema.",
  },
  {
    id: "simulation",
    label: "Simulation",
    description: "Entorno para explorar preguntas, condiciones y escenarios posibles.",
  },
  {
    id: "prediction",
    label: "Prediction",
    description: "Estimaciones condicionadas por los datos, el modelo y el contexto de validación.",
  },
  {
    id: "decision-support",
    label: "Decision Support",
    description: "Resultados comparables para apoyar decisiones en el sistema real.",
  },
  {
    id: "verification",
    label: "Verification",
    description: "Contraste posterior entre lo observado y lo modelado para aprender y mejorar.",
  },
] as const satisfies readonly ArchitectureLayer[];

export const integrationSources = [
  "APIs",
  "Bases de datos",
  "Sistemas empresariales",
  "Archivos históricos",
  "Plataformas IoT",
  "Sensores existentes",
  "PLC",
  "Otras fuentes disponibles",
] as const;

export const technologyFoundations = [
  {
    id: "digital-twins",
    label: "Digital Twins",
    description: "El núcleo que organiza la representación de un sistema real.",
  },
  {
    id: "data-engineering",
    label: "Data Engineering",
    description: "Integración y preparación de información procedente de fuentes disponibles.",
  },
  {
    id: "simulation",
    label: "Simulation",
    description: "Exploración de escenarios, reglas y comportamientos modelados.",
  },
  {
    id: "predictive-intelligence",
    label: "Predictive Intelligence",
    description: "Capas de análisis y predicción aplicadas de forma contextual.",
  },
  {
    id: "machine-learning",
    label: "Machine Learning",
    description: "Técnicas que pueden aportar al modelo cuando el caso de uso lo justifica.",
  },
  {
    id: "apis",
    label: "APIs",
    description: "Interfaces para interoperar con sistemas y fuentes existentes.",
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Infraestructura de software adaptable a las necesidades del caso.",
  },
  {
    id: "databases",
    label: "Databases",
    description: "Persistencia y consulta de información relevante para el gemelo.",
  },
  {
    id: "web-applications",
    label: "Web Applications",
    description: "Experiencias para consultar, comparar y operar con el modelo.",
  },
  {
    id: "data-visualization",
    label: "Data Visualization",
    description: "Lecturas visuales del sistema y sus escenarios sin reducirlo a un dashboard.",
  },
] as const;

export const solutions = [
  {
    id: "digital-twin",
    slug: "digital-twin",
    href: "/soluciones/digital-twin",
    kind: "central-product",
    name: "OviTech Digital Twin",
    navLabel: "Digital Twin",
    eyebrow: "Tecnología central",
    title: "OviTech Digital Twin",
    subtitle: "Software para representar, simular y anticipar sistemas reales.",
    overview:
      "Un Digital Twin no es simplemente un dashboard. Integra datos, estado, modelo, comportamiento y simulación para construir una representación digital útil de un sistema real.",
    card: {
      title: "Digital Twin",
      description:
        "Producto central para representar sistemas, explorar escenarios y apoyar decisiones.",
      visual: "core",
    },
    status: {
      label: "Tecnología en desarrollo y validación",
      description:
        "OviTech desarrolla y valida su tecnología mediante prototipos y casos de aplicación especializados; la plataforma no se presenta como universalmente validada.",
    },
    capabilities: digitalTwinCapabilities,
    architecture: digitalTwinArchitecture,
    integrationSources,
    applicationAreas: [
      {
        title: "Agroindustria",
        description: "Procesos, operaciones y sistemas productivos con múltiples variables relacionadas.",
      },
      {
        title: "Caficultura",
        description: "Escenarios de producción, transformación y trazabilidad propios del café.",
      },
      {
        title: "Acuicultura",
        description: "Aplicaciones que relacionan biomasa, condiciones de cultivo y variables productivas.",
      },
      {
        title: "Procesos productivos",
        description: "Representación de etapas, capacidad, eventos y desempeño operacional.",
      },
      {
        title: "Activos y operaciones complejas",
        description: "Contextos donde los datos aislados no bastan para explicar el sistema.",
      },
    ],
    outcomes: [
      "Representación digital",
      "Monitoreo contextual",
      "Detección de desviaciones",
      "Simulación de escenarios",
      "Predicciones específicas",
      "Recomendaciones",
      "Comparación entre escenarios",
      "Seguimiento de resultados",
    ],
    audiences: [
      "Equipos de operaciones",
      "Líderes de innovación",
      "Ingeniería y tecnología",
      "Investigación y desarrollo",
    ],
    considerations: [
      "La utilidad y precisión dependen del caso de uso, la calidad de los datos, el modelo, el conocimiento del dominio y la validación.",
      "La integración se define a partir de las fuentes que realmente existen en cada operación.",
      "Un Gemelo Digital se construye de forma progresiva: una pregunta clara suele ser más útil que un alcance indiscriminado.",
    ],
    cta: { label: "Hablar sobre un caso de uso", href: "/contacto" },
  },
  {
    id: "agtwins",
    slug: "agtwins",
    href: "/soluciones/agtwins",
    kind: "application",
    name: "AgTwins",
    navLabel: "AgTwins",
    eyebrow: "Aplicación de OviTech Digital Twin",
    title: "AgTwins",
    subtitle: "Gemelos Digitales para sistemas agroindustriales.",
    overview:
      "AgTwins es una línea de aplicación de OviTech Digital Twin para agroindustria, agricultura y sistemas productivos. Se enfoca en representar relaciones entre variables productivas, ambientales y operacionales según el caso de uso.",
    card: {
      title: "AgTwins",
      description:
        "Aplicación potencial para agroindustria, agricultura y sistemas productivos.",
      visual: "agriculture",
    },
    status: {
      label: "Línea de desarrollo",
      description:
        "Las posibilidades descritas corresponden a aplicaciones potenciales, escenarios de validación y casos de uso que deben delimitarse técnicamente.",
    },
    applicationAreas: [
      {
        title: "Agricultura",
        description: "Modelamiento de variables productivas y ambientales relevantes para un sistema definido.",
      },
      {
        title: "Caficultura",
        description:
          "Representación digital de producción, condiciones ambientales y procesos relacionados con el café.",
      },
      {
        title: "Agroindustria",
        description: "Modelamiento de procesos de transformación y operaciones productivas.",
      },
      {
        title: "Plantas",
        description: "Representación de determinados procesos, activos o líneas de operación.",
      },
      {
        title: "Cadena productiva",
        description:
          "Integración y análisis de información relacionada con diferentes etapas del sistema.",
      },
    ],
    variables: [
      "Variables productivas",
      "Variables ambientales",
      "Condiciones operacionales",
      "Históricos",
      "Eventos",
      "Capacidad",
      "Rendimiento",
      "Desviaciones",
    ],
    outcomes: [
      "Simulación",
      "Predicción",
      "Alertas",
      "Recomendaciones",
      "Escenarios",
      "Indicadores",
    ],
    audiences: [
      "Empresas agroindustriales",
      "Productores y organizaciones agrícolas",
      "Plantas de transformación",
      "Equipos de innovación, operaciones y tecnología",
    ],
    considerations: [
      "AgTwins no implica que todos los casos estén implementados; cada aplicación potencial requiere definición y validación.",
      "Puede comenzar con información histórica y fuentes existentes si son pertinentes para la pregunta de negocio.",
      "La selección de variables depende del proceso y de las decisiones que se desean apoyar.",
    ],
    cta: { label: "Explorar un caso agroindustrial", href: "/contacto" },
  },
  {
    id: "bluetwins",
    slug: "bluetwins",
    href: "/soluciones/bluetwins",
    kind: "application",
    name: "BlueTwins",
    navLabel: "BlueTwins",
    eyebrow: "Aplicación de OviTech Digital Twin",
    title: "BlueTwins",
    subtitle: "Digital Twin aplicado a la salmonicultura.",
    overview:
      "BlueTwins es un prototipo y aplicación de la tecnología de Gemelos Digitales orientada a representar biomasa y condiciones relevantes de cultivo. Funciona como un caso de demostración tecnológica de OviTech.",
    card: {
      title: "BlueTwins",
      description:
        "Prototipo de aplicación para relacionar biomasa, cultivo, modelo y simulación.",
      visual: "aquaculture",
    },
    status: {
      label: "Prototipo / aplicación en desarrollo",
      description:
        "Se presenta como demostración tecnológica y escenario de validación, sin afirmar despliegues comerciales o clientes no verificados.",
    },
    conceptualModel: [
      "Biomasa",
      "Variables ambientales",
      "Variables productivas",
      "Modelo",
      "Simulación",
      "Predicción",
    ],
    variables: [
      "Biomasa",
      "Condiciones ambientales relevantes",
      "Variables productivas",
      "Eventos de cultivo",
      "Información histórica disponible",
    ],
    outcomes: [
      "Representación contextual del cultivo",
      "Escenarios de simulación",
      "Lectura de cambios y desviaciones",
      "Predicciones sujetas a validación del modelo",
    ],
    audiences: [
      "Organizaciones vinculadas a acuicultura y salmonicultura",
      "Equipos de producción",
      "Operaciones, datos e innovación",
    ],
    considerations: [
      "BlueTwins debe evaluarse frente al dominio, las fuentes de datos y las condiciones reales de cada caso.",
      "La representación y cualquier predicción dependen del modelo y de su validación técnica.",
      "No se presentan clientes, despliegues ni resultados comerciales no confirmados.",
    ],
    cta: { label: "Conocer la tecnología", href: "/soluciones/digital-twin" },
  },
  {
    id: "coffee-twins",
    slug: "coffee-twins",
    href: "/soluciones/coffee-twins",
    kind: "application",
    name: "Coffee Twins",
    navLabel: "Coffee Twins",
    eyebrow: "Aplicación de OviTech Digital Twin",
    title: "Coffee Twins",
    subtitle: "Gemelos Digitales para caficultura.",
    overview:
      "Coffee Twins es una línea de investigación y aplicación potencial de OviTech Digital Twin para representar sistemas productivos del café y sus relaciones relevantes.",
    card: {
      title: "Coffee Twins",
      description:
        "Línea de investigación para modelar variables y procesos de la caficultura.",
      visual: "coffee",
    },
    status: {
      label: "Línea de investigación",
      description:
        "Los escenarios se presentan como aplicaciones potenciales y casos de uso en validación; no se afirma una implementación comercial.",
    },
    applicationAreas: [
      {
        title: "Condiciones del cultivo",
        description: "Lectura contextual de variables que pueden afectar un sistema de producción.",
      },
      {
        title: "Variables ambientales",
        description: "Integración de información ambiental relevante según el alcance definido.",
      },
      {
        title: "Desarrollo y productividad",
        description: "Modelamiento de relaciones que permitan analizar estados y tendencias del sistema.",
      },
      {
        title: "Cosecha y postcosecha",
        description: "Posibles casos de uso para representar etapas, eventos y decisiones operacionales.",
      },
      {
        title: "Transformación y trazabilidad",
        description: "Exploración de conexiones entre procesos, información y etapas de la cadena.",
      },
    ],
    variables: [
      "Condiciones del cultivo",
      "Variables ambientales",
      "Desarrollo",
      "Productividad",
      "Cosecha",
      "Postcosecha",
      "Transformación",
      "Trazabilidad",
    ],
    outcomes: [
      "Representación de un caso de uso definido",
      "Análisis de relaciones y escenarios",
      "Apoyo a preguntas operacionales o productivas",
      "Aprendizaje para la validación del modelo",
    ],
    audiences: [
      "Organizaciones cafeteras",
      "Productores y grupos empresariales",
      "Procesadores y transformadores",
      "Equipos de innovación e investigación",
    ],
    considerations: [
      "Coffee Twins se comunica como línea de investigación, aplicación potencial y caso de uso en validación.",
      "El alcance debe definirse con las variables, procesos y fuentes de información disponibles.",
      "La tecnología no reemplaza el conocimiento del dominio: lo articula con datos y modelos para analizar preguntas concretas.",
    ],
    cta: { label: "Conversar sobre caficultura", href: "/contacto" },
  },
] as const satisfies readonly Solution[];

export const centralSolution = solutions[0];

export const applicationSolutions = solutions.slice(1);

// Alias kept intentionally simple for pages that only need the three domain
// applications and should not treat the central Digital Twin as a separate one.
export const applications = applicationSolutions;

export const getSolutionBySlug = (slug: string) =>
  solutions.find((solution) => solution.slug === slug);

export const getSolutionById = (id: SolutionId) =>
  solutions.find((solution) => solution.id === id);
