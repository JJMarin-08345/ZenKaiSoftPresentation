import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoPage, SITE_URL, structuredData } from "./seo";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getSeoPage(pathname);
    const url = page.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;
    const image = `${SITE_URL}/icons/web-app-manifest-512x512.png`;

    document.documentElement.lang = "es";
    document.title = page.title;
    setMeta('meta[name="description"]', "name", "description", page.description);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      page.index ? "index, follow, max-image-preview:large" : "noindex, follow",
    );
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:title"]', "property", "og:title", page.title);
    setMeta('meta[property="og:description"]', "property", "og:description", page.description);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "es_CO");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Zenkaisoft");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", page.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", page.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let schema = document.head.querySelector<HTMLScriptElement>("#structured-data");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "structured-data";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(structuredData(page));
  }, [pathname]);

  return null;
}
