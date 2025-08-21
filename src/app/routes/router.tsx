import { createBrowserRouter } from "react-router-dom";
import { homeRoutes } from "@/home/routes/home.routes";
import { MainLayout } from "../components/MainLayout";
import { projectRoutes } from "@/proyects/routes/project.routes";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            ...homeRoutes,
            ...projectRoutes,
        ]
    }
])