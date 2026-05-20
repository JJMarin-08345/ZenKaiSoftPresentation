import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../components/Error404";
import { MainLayout } from "../components/MainLayout";
import { homeRoutes } from "@/home/routes/home.routes";
import { projectRoutes } from "@/proyects/routes/project.routes";
import { aboutUsRoutes } from "@/about_us/routes/about_us.routes";
import { tuVehiculoCheckRoutes } from "@/tu_vehiculo_check/routes/tu_vehiculo_check.routes";


export const routes = createBrowserRouter([
    {
        path: "*",
        element: <Error404 />
    },
    ...tuVehiculoCheckRoutes,
    {
        path: "/",
        element: <MainLayout />,
        children: [
            ...homeRoutes,
            ...projectRoutes,
            ...aboutUsRoutes,
        ]
    }
])