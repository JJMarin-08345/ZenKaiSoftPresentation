import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "@/home/routes/home.routes";
import { MainLayout } from "../components/MainLayout";
import { projectRoutes } from "@/proyects/routes/project.routes";
import { Error404 } from "../components/Error404";


export const routes = createBrowserRouter([
    {
        path: "*",
        element: <Error404 />
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            ...homeRoutes,
            ...projectRoutes,
        ]
    }
])