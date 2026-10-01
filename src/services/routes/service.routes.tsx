import type { RouteObject } from "react-router-dom";
import { ServicePage } from "../pages/ServicePage";

export const serviceRoutes: RouteObject[] = [
  {
    path: "/desarrollo-software-a-medida-colombia",
    element: <ServicePage service="software" />,
  },
  {
    path: "/desarrollo-aplicaciones-web",
    element: <ServicePage service="web" />,
  },
  {
    path: "/desarrollo-aplicaciones-moviles",
    element: <ServicePage service="mobile" />,
  },
];
