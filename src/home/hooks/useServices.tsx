import { useState } from "react";
import type { ServiceType } from "../types/service.types";

export const useServices = () => {
    const [services] = useState<ServiceType[]>(
        [
            {
                title: "Desarrollo Web",
                description: "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
                iconName: "Laptop",
            },
            {
                title: "Aplicaciones Móviles",
                description: "Apps nativas e híbridas para iOS y Android que conectan con tu audiencia.",
                iconName: "Smartphone",
            },
            {
                title: "Software Personalizado",
                description: "Sistemas a medida que se adaptan perfectamente a los procesos de tu empresa.",
                iconName: "Settings",
            },
            {
                title: "E-commerce",
                description: "Tiendas online completas con pasarelas de pago y gestión de inventario.",
                iconName: "ShoppingCart",
            },
            {
                title: "Consultoría IT",
                description: "Asesoramiento estratégico para optimizar tu infraestructura tecnológica.",
                iconName: "CircleQuestionMark",
            },
            {
                title: "Soporte Técnico",
                description: "Mantenimiento y soporte continuo para garantizar el funcionamiento óptimo.",
                iconName: "Wrench",
            },
        ]
    );

    return {
        data_info: {
            services
        }
    }
}
