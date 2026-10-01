import { build } from "vite";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDirectory, "..");

console.log("Building SSR bundle...");
await build({
  root,
  build: {
    ssr: "src/entry-server.tsx",
    outDir: "dist/server",
  },
  logLevel: "warn",
});

const serverBundle = pathToFileURL(join(root, "dist/server/entry-server.js")).href;
const { render, SEO_PAGES, SITE_URL, structuredData } = await import(serverBundle);
const template = readFileSync(join(root, "dist/index.html"), "utf8");

function canonicalUrl(path) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function injectSeo(html, page) {
  const url = canonicalUrl(page.path);
  const title = escapeAttribute(page.title);
  const description = escapeAttribute(page.description);
  const robots = page.index ? "index, follow, max-image-preview:large" : "noindex, follow";
  const schema = JSON.stringify(structuredData(page), null, 2).replaceAll("<", "\\u003c");

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="structured-data" type="application/ld+json">\n${schema}\n  </script>`);
}

console.log("Rendering HTML...");
for (const page of SEO_PAGES) {
  const appHtml = render(page.path);
  const html = injectSeo(
    template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
    page,
  );
  const output = join(root, "dist", page.output);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, html);
  console.log(`  rendered ${page.path}`);
}

const sitemapPages = SEO_PAGES.filter((page) => page.index);
const sitemapEntries = sitemapPages.map((page) => {
  const priority = page.path === "/" ? "1.0" : page.type === "service" ? "0.9" : "0.8";
  const changefreq = page.path === "/" ? "weekly" : "monthly";
  return `  <url>
    <loc>${canonicalUrl(page.path)}</loc>
    <lastmod>2026-09-30</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;
writeFileSync(join(root, "dist/sitemap.xml"), sitemap);

console.log(`Prerender complete: ${SEO_PAGES.length} pages generated`);
