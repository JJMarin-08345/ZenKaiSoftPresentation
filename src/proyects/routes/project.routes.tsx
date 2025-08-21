import type { RouteObject } from "react-router-dom";
import { ProjectsPage } from "../pages/ProjectsPage";

export const projectRoutes: RouteObject[] = ([
    {
        path: "/proyectos",
        element: <ProjectsPage/>
    }
])