import type { RouteObject } from "react-router-dom";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";

export const tuVehiculoCheckRoutes: RouteObject[] = [
    {
        path: "/tu_vehiculo_check/politica-privacidad",
        element: <PrivacyPolicyPage />,
    },
];
