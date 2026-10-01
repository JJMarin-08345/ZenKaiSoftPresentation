import type { RouteObject } from "react-router-dom";
import { Error404 } from "../components/Error404";
import { MainLayout } from "../components/MainLayout";
import { homeRoutes } from "@/home/routes/home.routes";
import { projectRoutes } from "@/proyects/routes/project.routes";
import { aboutUsRoutes } from "@/about_us/routes/about_us.routes";
import { tuVehiculoCheckRoutes } from "@/tu_vehiculo_check/routes/tu_vehiculo_check.routes";
import { serviceRoutes } from "../../services/routes/service.routes";
import { SeoOutlet } from "../../seo/SeoOutlet";

export const routeConfig: RouteObject[] = [
  {
    element: <SeoOutlet />,
    children: [
      {
        path: "*",
        element: <Error404 />,
      },
      ...tuVehiculoCheckRoutes,
      {
        path: "/",
        element: <MainLayout />,
        children: [
          ...homeRoutes,
          ...serviceRoutes,
          ...projectRoutes,
          ...aboutUsRoutes,
        ],
      },
    ],
  },
];
