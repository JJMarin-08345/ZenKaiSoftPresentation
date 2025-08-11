import type { RouteObject } from "react-router-dom";

export const routesIndex: RouteObject[] = ([
    {
        path: "/",
        element: (
            <div className="h-[200vh]">
                <p>HOLA COMO VAS</p>
            </div>
        )
    }
])