import type { RouteObject } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";

export const homeRoutes: RouteObject[] = ([
    {
        path: "/",
        element: <HomeLayout />,
    }
])