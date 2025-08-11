import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { homeRoutes } from "@/home/routes/home.routes";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            ...homeRoutes,
        ]
    }
])