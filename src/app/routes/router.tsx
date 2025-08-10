import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { routesIndex } from "./index-router";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            ...routesIndex
        ]
    }
])