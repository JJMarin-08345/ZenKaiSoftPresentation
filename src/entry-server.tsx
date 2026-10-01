import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "./app/routes/routeConfig";

export { SEO_PAGES, SITE_URL, structuredData } from "./seo/seo";

export function render(pathname: string) {
  const router = createMemoryRouter(routeConfig, {
    initialEntries: [pathname],
  });

  return renderToString(<RouterProvider router={router} />);
}
