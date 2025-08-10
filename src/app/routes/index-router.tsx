import type { RouteObject } from "react-router-dom";

export const routesIndex: RouteObject[] = ([
    {
        path: "/",
        element: (
            <div className="bg-red-500 h-screen">
                <p>HOLA COMO VAS</p>
            </div>
        )
    }
])