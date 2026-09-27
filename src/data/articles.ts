/**
 * Editorial content is deliberately file-based at this stage so it can be
 * reviewed and changed without introducing a CMS. The featured configuration
 * below is the only place that controls the three cards on the home page.
 */

export type ArticleCategoryId =
  | "agroindustria"
  | "caficultura"
  | "digital-twins"
  | "ia"
  | "simulacion"
  | "datos"
  | "innovacion";

export type ArticleId =
  | "gemelo-digital-agroindustria"
  | "dashboard-no-es-gemelo-digital"
  | "datos-historicos-punto-partida"
  | "simulacion-escenarios-sistemas-productivos"
  | "digital-twins-caficultura"
  | "validar-gemelo-digital"
  | "ia-predictiva-agroindustria"
  | "interoperabilidad-agroindustria";

export type ArticleCategory = {
  id: ArticleCategoryId;
  label: string;
  description: string;
};

export type ArticleContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      title?: string;
      items: readonly string[];
    }
  | {
      type: "callout";
      title: string;
      text: string;
      tone: "accent" | "neutral";
    };

export type ArticleImage = {
  alt: string;
  treatment:
    | "system-map"
    | "data-grid"
    | "timeline"
    | "simulation"
    | "coffee"
    | "validation"
    | "prediction"
    | "integration";
};

export type ArticleReference = {
  type: "editorial-note" | "methodological-note";
  label: string;
  description: string;
};

export type Article = {
  id: ArticleId;
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategoryId;
  date: string;
  readTime: string;
  image?: ArticleImage;
  featured: boolean;
  content: readonly ArticleContentBlock[];
  reference: ArticleReference;
};

export const articleCategories = [
  {
    id: "agroindustria",
    label: "Agroindustria",
    description: "Sistemas productivos, procesos y operaciones agroindustriales.",
  },
  {
    id: "caficultura",
    label: "Caficultura",
    description: "Preguntas, datos y posibilidades de modelamiento para el café.",
  },
  {
    id: "digital-twins",
    label: "Digital Twins",
    description: "Conceptos, arquitectura y uso responsable de Gemelos Digitales.",
  },
  {
    id: "ia",
    label: "IA",
    description: "Inteligencia artificial aplicada con contexto, datos y validación.",
  },
  {
    id: "simulacion",
    label: "Simulación",
    description: "Escenarios para explorar decisiones antes de intervenir el sistema real.",
  },
  {
    id: "datos",
    label: "Datos",
    description: "Fuentes, calidad, contexto e integración de información.",
  },
  {
    id: "innovacion",
    label: "Innovación",
    description: "Prototipado, experimentación y validación de tecnología aplicada.",
  },
] as const satisfies readonly ArticleCategory[];

/**
 * Change this ordered list to change the three featured cards on the home
 * page. Keep exactly three IDs so the desktop layout remains intentional.
 */
export const featuredArticles = [
  "gemelo-digital-agroindustria",
  "dashboard-no-es-gemelo-digital",
  "validar-gemelo-digital",
] as const satisfies readonly ArticleId[];

const editorialReference: ArticleReference = {
  type: "editorial-note",
  label: "Nota editorial de OviTech",
  description:
    "Contenido de orientación B2B y tecnológica. No constituye un estudio científico ni garantiza resultados para un caso de uso específico.",
};

const methodologicalReference: ArticleReference = {
  type: "methodological-note",
  label: "Nota de método",
  description:
    "Las posibilidades descritas dependen del dominio, las fuentes disponibles, el modelo y la validación técnica de cada caso.",
};

const isFeatured = (id: ArticleId) =>
  featuredArticles.some((featuredArticleId) => featuredArticleId === id);

export const articles: readonly Article[] = [
  {
    id: "gemelo-digital-agroindustria",
    title: "¿Qué es un Gemelo Digital y cómo puede aplicarse a la agroindustria?",
    slug: "que-es-un-gemelo-digital-agroindustria",
    excerpt:
      "Un Gemelo Digital permite representar un sistema real para observarlo, modelarlo y explorar escenarios con mayor contexto.",
    category: "digital-twins",
    date: "2026-09-18",
    readTime: "6 min de lectura",
    image: {
      alt: "Representación abstracta de un sistema agroindustrial conectado a su modelo digital.",
      treatment: "system-map",
    },
    featured: isFeatured("gemelo-digital-agroindustria"),
    content: [
      {
        type: "paragraph",
        text: "Un Gemelo Digital es una representación digital dinámica de un sistema real. Su valor no está en duplicar visualmente una operación, sino en conectar información, estado, relaciones y comportamiento para poder hacer mejores preguntas sobre ella.",
      },
      {
        type: "heading",
        text: "De datos aislados a un sistema representado",
      },
      {
        type: "paragraph",
        text: "En agroindustria, los datos suelen estar repartidos entre historiales, registros operacionales, hojas de cálculo, sensores, sistemas empresariales y conocimiento de quienes operan el proceso. Un Gemelo Digital busca organizar lo que es relevante para un caso y representar cómo esas piezas se relacionan.",
      },
      {
        type: "list",
        title: "Una representación puede integrar",
        items: [
          "variables productivas y ambientales",
          "eventos y condiciones operacionales",
          "reglas o hipótesis del dominio",
          "históricos y fuentes disponibles",
          "escenarios de simulación y verificación",
        ],
      },
      {
        type: "paragraph",
        text: "Con esa base, un equipo puede observar el estado del sistema, comparar escenarios y apoyar decisiones. El alcance no debe ser universal: empieza por una pregunta concreta, una operación delimitada y criterios claros para validar lo aprendido.",
      },
      {
        type: "callout",
        title: "No es una promesa automática",
        text: "La utilidad de un Gemelo Digital depende de la calidad de los datos, la pertinencia del modelo, el conocimiento del dominio y la validación responsable del caso de uso.",
        tone: "accent",
      },
    ],
    reference: editorialReference,
  },
  {
    id: "dashboard-no-es-gemelo-digital",
    title: "Por qué un dashboard no es un Gemelo Digital",
    slug: "por-que-un-dashboard-no-es-un-gemelo-digital",
    excerpt:
      "Visualizar indicadores es útil, pero un Gemelo Digital también necesita representar estados, relaciones, comportamiento y escenarios.",
    category: "digital-twins",
    date: "2026-09-11",
    readTime: "5 min de lectura",
    image: {
      alt: "Interfaz abstracta que contrasta indicadores aislados con un modelo conectado.",
      treatment: "data-grid",
    },
    featured: isFeatured("dashboard-no-es-gemelo-digital"),
    content: [
      {
        type: "paragraph",
        text: "Un dashboard responde bien a una necesidad concreta: hacer visibles indicadores, tendencias y alertas. Es una pieza valiosa de una arquitectura de datos, pero por sí solo no representa cómo cambia un sistema ni qué ocurriría bajo otras condiciones.",
      },
      {
        type: "heading",
        text: "La diferencia está en el modelo",
      },
      {
        type: "paragraph",
        text: "Un Gemelo Digital incorpora una interpretación estructurada del sistema. Relaciona fuentes de datos con estados, variables y reglas de comportamiento relevantes para una pregunta de negocio u operación.",
      },
      {
        type: "list",
        title: "Un dashboard suele mostrar; un Gemelo Digital busca además",
        items: [
          "representar el estado del sistema en contexto",
          "hacer explícitas relaciones y supuestos",
          "simular cambios o escenarios",
          "comparar lo estimado con lo que posteriormente ocurre",
        ],
      },
      {
        type: "paragraph",
        text: "No se trata de reemplazar visualizaciones útiles. Se trata de ubicarlas dentro de una capa de modelo que permita pasar de mirar un dato a explorar una decisión.",
      },
      {
        type: "callout",
        title: "Una pregunta práctica",
        text: "Si una herramienta solo muestra qué pasó, puede ser un dashboard. Si además ayuda a representar por qué pudo pasar y qué podría pasar bajo distintos escenarios, se acerca a la lógica de un Gemelo Digital.",
        tone: "neutral",
      },
    ],
    reference: editorialReference,
  },
  {
    id: "datos-historicos-punto-partida",
    title: "Datos históricos: un punto de partida para modelar sistemas productivos",
    slug: "datos-historicos-punto-de-partida-gemelo-digital",
    excerpt:
      "Antes de pensar en nuevas fuentes o hardware, conviene revisar qué información histórica existe y qué pregunta puede ayudar a responder.",
    category: "datos",
    date: "2026-08-28",
    readTime: "5 min de lectura",
    image: {
      alt: "Capas abstractas de información histórica organizadas a lo largo del tiempo.",
      treatment: "timeline",
    },
    featured: isFeatured("datos-historicos-punto-partida"),
    content: [
      {
        type: "paragraph",
        text: "Un proyecto de Gemelo Digital no siempre empieza con una infraestructura nueva. En muchos sistemas productivos ya existen registros, eventos, datos de operación y conocimiento del equipo que pueden orientar una primera representación.",
      },
      {
        type: "heading",
        text: "Empezar por una pregunta, no por una fuente",
      },
      {
        type: "paragraph",
        text: "La revisión útil de históricos comienza al delimitar una pregunta: qué proceso se quiere comprender, qué decisión se busca apoyar o qué comportamiento merece ser contrastado. A partir de ahí se evalúa si los datos disponibles tienen cobertura, consistencia, contexto y trazabilidad suficientes.",
      },
      {
        type: "list",
        title: "Una primera revisión puede considerar",
        items: [
          "origen y responsables de cada fuente",
          "periodos cubiertos y eventos faltantes",
          "unidades, definiciones y cambios de criterio",
          "relación entre datos operacionales, ambientales y productivos",
          "posibilidades de integración sin reemplazar sistemas existentes",
        ],
      },
      {
        type: "paragraph",
        text: "Los históricos no sustituyen la validación, pero ayudan a formular hipótesis y a construir un prototipo con un alcance proporcionado. La calidad de la conversación técnica mejora cuando la información se lee con el proceso, no separada de él.",
      },
    ],
    reference: methodologicalReference,
  },
  {
    id: "simulacion-escenarios-sistemas-productivos",
    title: "Simulación de escenarios para sistemas productivos: preguntas antes de respuestas",
    slug: "simulacion-de-escenarios-sistemas-productivos",
    excerpt:
      "La simulación sirve para explorar condiciones y decisiones posibles, siempre que los supuestos del modelo sean explícitos y verificables.",
    category: "simulacion",
    date: "2026-08-14",
    readTime: "6 min de lectura",
    image: {
      alt: "Ramas de escenarios de simulación que parten de un mismo sistema productivo.",
      treatment: "simulation",
    },
    featured: isFeatured("simulacion-escenarios-sistemas-productivos"),
    content: [
      {
        type: "paragraph",
        text: "Simular no es adivinar. Es una forma de explorar, bajo supuestos definidos, cómo podría comportarse un sistema si cambian ciertas condiciones. En operaciones productivas, esta capacidad puede ayudar a estructurar conversaciones antes de intervenir el proceso real.",
      },
      {
        type: "heading",
        text: "Qué hace útil a un escenario",
      },
      {
        type: "paragraph",
        text: "Un escenario es útil cuando parte de una decisión o incertidumbre concreta. Puede preguntar por una variación de capacidad, una condición ambiental, una secuencia operacional o una combinación de eventos. El modelo debe hacer explícito qué sabe, qué asume y qué no puede representar.",
      },
      {
        type: "list",
        title: "Antes de simular, conviene definir",
        items: [
          "la pregunta que se busca explorar",
          "las variables que cambian y las que permanecen estables",
          "los datos y reglas que sostienen el modelo",
          "los límites de interpretación del resultado",
          "cómo se contrastará el aprendizaje con la operación real",
        ],
      },
      {
        type: "callout",
        title: "La simulación acompaña la decisión",
        text: "Los resultados de un escenario no reemplazan el criterio del dominio. Aportan una lectura estructurada para comparar alternativas y verificar posteriormente qué ocurrió.",
        tone: "accent",
      },
    ],
    reference: methodologicalReference,
  },
  {
    id: "digital-twins-caficultura",
    title: "Digital Twins en caficultura: del dato a la anticipación",
    slug: "digital-twins-en-caficultura",
    excerpt:
      "La caficultura ofrece preguntas productivas, ambientales y de transformación donde una representación digital puede abrir nuevos escenarios de análisis.",
    category: "caficultura",
    date: "2026-07-31",
    readTime: "6 min de lectura",
    image: {
      alt: "Representación abstracta de variables cafeteras conectadas a un modelo digital.",
      treatment: "coffee",
    },
    featured: isFeatured("digital-twins-caficultura"),
    content: [
      {
        type: "paragraph",
        text: "La caficultura reúne condiciones de cultivo, decisiones de manejo, productividad, cosecha, postcosecha, transformación y trazabilidad. Un Gemelo Digital no pretende simplificar esa complejidad: busca representar una parte relevante de ella para un caso de uso específico.",
      },
      {
        type: "heading",
        text: "Una línea de investigación con preguntas concretas",
      },
      {
        type: "paragraph",
        text: "Coffee Twins se plantea como línea de investigación y aplicación potencial. Puede explorar cómo integrar variables y procesos para analizar relaciones que normalmente se observan por separado.",
      },
      {
        type: "list",
        title: "Entre los escenarios posibles están",
        items: [
          "condiciones y desarrollo del cultivo",
          "variables ambientales relevantes",
          "productividad y eventos de cosecha",
          "procesos de postcosecha y transformación",
          "trazabilidad entre etapas de una cadena definida",
        ],
      },
      {
        type: "paragraph",
        text: "La posibilidad de modelar depende de la información existente, la pregunta que se quiere resolver y la validación con el conocimiento del dominio. Por eso, el punto de partida no es una promesa comercial general, sino un caso de uso delimitado.",
      },
    ],
    reference: methodologicalReference,
  },
  {
    id: "validar-gemelo-digital",
    title: "Cómo validar un Gemelo Digital antes de escalarlo",
    slug: "como-validar-un-gemelo-digital-antes-de-escalarlo",
    excerpt:
      "La validación convierte un prototipo en aprendizaje verificable: compara el modelo con el sistema, declara límites y decide qué merece ampliarse.",
    category: "innovacion",
    date: "2026-07-17",
    readTime: "7 min de lectura",
    image: {
      alt: "Ciclo abstracto de modelamiento, verificación y aprendizaje.",
      treatment: "validation",
    },
    featured: isFeatured("validar-gemelo-digital"),
    content: [
      {
        type: "paragraph",
        text: "Escalar una representación digital sin revisar su comportamiento frente al sistema real puede amplificar supuestos equivocados. La validación no es una etapa decorativa: es la práctica que permite aprender qué representa bien el modelo, dónde necesita ajustes y cuáles son sus límites.",
      },
      {
        type: "heading",
        text: "Validar es contrastar, no solo demostrar",
      },
      {
        type: "paragraph",
        text: "Un proceso responsable define desde el inicio qué se espera observar, con qué datos se comparará y qué criterios permitirán afirmar que el prototipo aporta valor para la pregunta planteada. También debe registrar desviaciones y condiciones que el modelo no cubre.",
      },
      {
        type: "list",
        title: "Un ciclo de validación puede incluir",
        items: [
          "delimitación de un caso de uso y una hipótesis",
          "revisión de fuentes, calidad y contexto de los datos",
          "construcción de un prototipo acotado",
          "comparación entre estimaciones, eventos y observación del dominio",
          "ajustes, documentación de límites y decisión de siguiente etapa",
        ],
      },
      {
        type: "paragraph",
        text: "El objetivo no es declarar una tecnología universalmente probada. Es avanzar con evidencia apropiada al caso, aprender con transparencia y ampliar el alcance solo cuando el modelo, los datos y la operación lo justifican.",
      },
      {
        type: "callout",
        title: "La escala es una consecuencia",
        text: "Discovery, datos, prototipo, validación, piloto y escala son etapas distintas. Saltarse las primeras suele debilitar las decisiones que se toman después.",
        tone: "accent",
      },
    ],
    reference: methodologicalReference,
  },
  {
    id: "ia-predictiva-agroindustria",
    title: "IA predictiva y sistemas agroindustriales: dónde aporta valor",
    slug: "ia-predictiva-y-sistemas-agroindustriales",
    excerpt:
      "La IA predictiva aporta cuando se conecta con una pregunta operacional, datos contextualizados y un proceso de validación continuo.",
    category: "ia",
    date: "2026-07-03",
    readTime: "5 min de lectura",
    image: {
      alt: "Señales de datos que alimentan una capa predictiva dentro de un sistema digital.",
      treatment: "prediction",
    },
    featured: isFeatured("ia-predictiva-agroindustria"),
    content: [
      {
        type: "paragraph",
        text: "La IA predictiva puede ser valiosa cuando ayuda a estimar comportamientos, identificar patrones o priorizar preguntas dentro de un sistema productivo. Sin embargo, un modelo predictivo aislado no basta para explicar el contexto operacional ni para decidir por sí mismo.",
      },
      {
        type: "heading",
        text: "Predicción con contexto",
      },
      {
        type: "paragraph",
        text: "Dentro de un Gemelo Digital, una capa de IA puede trabajar junto a datos integrados, variables de estado, reglas del dominio y simulaciones. Esta combinación permite discutir no solo una estimación, sino las condiciones y supuestos que la acompañan.",
      },
      {
        type: "list",
        title: "Una aplicación responsable necesita",
        items: [
          "una pregunta específica que la predicción pueda apoyar",
          "datos con significado operativo y trazabilidad",
          "criterios para revisar calidad y posibles sesgos",
          "participación de quienes conocen el sistema",
          "validación y seguimiento después de su uso",
        ],
      },
      {
        type: "paragraph",
        text: "El interés no está en añadir IA como etiqueta. Está en identificar si una técnica predictiva aporta una señal útil, bajo qué límites y cómo se verifica su comportamiento en el tiempo.",
      },
    ],
    reference: methodologicalReference,
  },
  {
    id: "interoperabilidad-agroindustria",
    title: "Interoperabilidad en agroindustria: integrar sin reemplazarlo todo",
    slug: "interoperabilidad-en-agroindustria",
    excerpt:
      "Un Gemelo Digital puede empezar con sistemas y datos existentes si se diseña una integración que respete contexto, trazabilidad y seguridad.",
    category: "agroindustria",
    date: "2026-06-19",
    readTime: "5 min de lectura",
    image: {
      alt: "Fuentes de información heterogéneas conectadas a una capa de integración.",
      treatment: "integration",
    },
    featured: isFeatured("interoperabilidad-agroindustria"),
    content: [
      {
        type: "paragraph",
        text: "En muchas organizaciones, la información útil ya existe, aunque esté distribuida entre sistemas empresariales, archivos históricos, bases de datos, registros de operación, sensores o plataformas externas. La pregunta no siempre es qué reemplazar, sino qué integrar y para qué.",
      },
      {
        type: "heading",
        text: "Integrar también es interpretar",
      },
      {
        type: "paragraph",
        text: "La interoperabilidad no consiste únicamente en mover datos entre herramientas. Requiere conservar definiciones, unidades, origen, frecuencia y contexto para que la información pueda alimentar un modelo sin perder sentido.",
      },
      {
        type: "list",
        title: "Una arquitectura de integración puede considerar",
        items: [
          "APIs, bases de datos y sistemas empresariales existentes",
          "archivos históricos y registros que aporten contexto",
          "plataformas IoT, sensores o PLC ya disponibles",
          "controles de acceso, trazabilidad y calidad de datos",
          "una implementación progresiva según el caso de uso",
        ],
      },
      {
        type: "callout",
        title: "Software-first",
        text: "OviTech desarrolla principalmente software. Puede integrar información procedente de múltiples fuentes sin presentarse como fabricante de hardware.",
        tone: "neutral",
      },
    ],
    reference: editorialReference,
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const getArticleById = (id: ArticleId) =>
  articles.find((article) => article.id === id);

export const getArticlesByCategory = (category: ArticleCategoryId) =>
  articles.filter((article) => article.category === category);

export const getArticleCategory = (category: ArticleCategoryId) =>
  articleCategories.find((item) => item.id === category);

export const getFeaturedArticleData = (): readonly Article[] =>
  featuredArticles
    .map((id) => getArticleById(id))
    .filter((article): article is Article => article !== undefined);
