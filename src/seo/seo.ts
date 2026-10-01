export const SITE_URL = "https://zenkaisoft-col.com";

export type SeoPage = {
  path: string;
  output: string;
  title: string;
  description: string;
  eyebrow: string;
  type: "home" | "service" | "portfolio" | "about" | "legal";
  index: boolean;
};

export const SEO_PAGES: SeoPage[] = [
  {
    path: "/",
    output: "index.html",
    title: "Desarrollo de software a medida en Colombia | Zenkaisoft",
    description:
      "Desarrollamos software a medida, aplicaciones web y móviles para empresas en Colombia. Soluciones escalables, soporte cercano y tecnología moderna.",
    eyebrow: "Desarrollo de software en Colombia",
    type: "home",
    index: true,
  },
  {
    path: "/desarrollo-software-a-medida-colombia",
    output: "desarrollo-software-a-medida-colombia/index.html",
    title: "Desarrollo de software a medida en Colombia | Zenkaisoft",
    description:
      "Creamos software personalizado para digitalizar procesos, centralizar información y hacer crecer empresas en Colombia.",
    eyebrow: "Software a medida",
    type: "service",
    index: true,
  },
  {
    path: "/desarrollo-aplicaciones-web",
    output: "desarrollo-aplicaciones-web/index.html",
    title: "Desarrollo de aplicaciones web en Colombia | Zenkaisoft",
    description:
      "Diseñamos aplicaciones web rápidas, seguras y escalables: plataformas empresariales, SaaS, paneles administrativos e integraciones.",
    eyebrow: "Aplicaciones web",
    type: "service",
    index: true,
  },
  {
    path: "/desarrollo-aplicaciones-moviles",
    output: "desarrollo-aplicaciones-moviles/index.html",
    title: "Desarrollo de aplicaciones móviles en Colombia | Zenkaisoft",
    description:
      "Desarrollamos aplicaciones móviles para Android y iOS conectadas con los procesos, datos y objetivos de tu empresa.",
    eyebrow: "Aplicaciones móviles",
    type: "service",
    index: true,
  },
  {
    path: "/proyectos",
    output: "proyectos/index.html",
    title: "Proyectos de software y aplicaciones | Zenkaisoft",
    description:
      "Conoce proyectos reales de Zenkaisoft en salud, restaurantes, industria alimentaria, inventarios y plataformas digitales.",
    eyebrow: "Portafolio de software",
    type: "portfolio",
    index: true,
  },
  {
    path: "/quienes-somos",
    output: "quienes-somos/index.html",
    title: "Quiénes somos | Zenkaisoft Colombia",
    description:
      "Conoce a Zenkaisoft, estudio colombiano de desarrollo de software enfocado en productos digitales mantenibles, rápidos y escalables.",
    eyebrow: "Sobre Zenkaisoft",
    type: "about",
    index: true,
  },
  {
    path: "/tu_vehiculo_check/politica-privacidad",
    output: "tu_vehiculo_check/politica-privacidad/index.html",
    title: "Política de privacidad de Tu Vehículo Check | Zenkaisoft",
    description: "Política de privacidad y tratamiento de datos de la aplicación Tu Vehículo Check.",
    eyebrow: "Privacidad",
    type: "legal",
    index: false,
  },
];

export function normalizePath(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/+$/, "") || "/";
}

export function getSeoPage(pathname: string) {
  const path = normalizePath(pathname);
  return SEO_PAGES.find((page) => page.path === path) ?? {
    path,
    output: "",
    title: "Página no encontrada | Zenkaisoft",
    description: "La página solicitada no existe o cambió de ubicación.",
    eyebrow: "Página no encontrada",
    type: "legal",
    index: false,
  };
}

export function structuredData(page: SeoPage) {
  const url = page.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Zenkaisoft",
      alternateName: "ZenKaiSoft",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icons/web-app-manifest-512x512.png`,
      email: "zenkaisoft.col@gmail.com",
      areaServed: { "@type": "Country", name: "Colombia" },
      founder: {
        "@type": "Person",
        name: "Juan José Marín",
        sameAs: [
          "https://github.com/JJMarin-08345",
          "https://www.linkedin.com/in/jjmarindev/",
        ],
      },
      knowsAbout: [
        "Desarrollo de software a medida",
        "Aplicaciones web",
        "Aplicaciones móviles",
        "Arquitectura de software",
        "Computación en la nube",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "Zenkaisoft",
      url: `${SITE_URL}/`,
      publisher: { "@id": organizationId },
      inLanguage: "es-CO",
    },
    {
      "@type":
        page.type === "about"
          ? "AboutPage"
          : page.type === "portfolio"
            ? "CollectionPage"
            : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: "es-CO",
    },
  ];

  if (page.type === "service") {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.eyebrow,
      description: page.description,
      url,
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "Colombia" },
      serviceType: page.eyebrow,
    });
  }

  if (page.path !== "/" && page.index) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.eyebrow,
          item: url,
        },
      ],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
