import type { RouteObject } from "react-router-dom";
import { AboutUsPage } from "../pages/AboutUsPage";

export const aboutUsRoutes: RouteObject[] = [
    {
        path: "/quienes-somos",
        element: <AboutUsPage />,
    },
]