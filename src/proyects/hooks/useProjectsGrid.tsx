import { useState } from "react";
import type { ProjectType } from "../types/project.types";

export const useProjectsGrid = () => {
    // Proyectos
    const [projects] = useState<ProjectType[]>([
        {
            id: 1,
            title: "Salutio Red",
            description: "",
            shortDescription: "Plataforma de salud digital",
            image: "https://salutiored.com/wp-content/uploads/2024/12/sal_logo.png",
            technologies: ["React", "Tailwind", "Node.js", "MongoDB", "AWS", "Twilio", "ePayco"],
            category: "web",
            demoUrl: "https://plataforma.salutiored.com/dashboard",
            date: "2024",
            client: "La Red Colombiana de Prestación y Cuidados en Salud S.A.S.",
            duration: "6 meses",
            teamSize: 4,
            features: [
                "Panel administrativo y logs completo",
                "Creación de horario personalizada para cada profesional de la plataforma",
                "Gestión y manejo de archivos en la nube usando AWS S3",
                "Módulo de agendación de citas",
                "Integración con Twilio para envio de correos y mensajes a WhatsApp",
                "Autenticación con doble factor",
                "Integración con pasarela de pago ePayco",
            ],
            challenges: [
                "Función global para creación de registro de log en cualquier acción en la aplicación",
                "Sistema de creación de horario personalizado agrupado por intervalos de 20 minutos",
                "Integración con pasarela de pago ePayco",
            ],
            results: [
                "Mejora visual completa de la plataforma, con un diseño más profesional y sencillo de usar",
                "Sistema de agendamientos 100% funcional y fácil de usar",
                "Registros de logs para auditoría y seguimiento de acciones",
            ],
        },
        {
            id: 2,
            title: "Sistema de Control y Ventas para Comida Rápida",
            description: "Aplicación de escritorio pensada para gestionar pequeños puestos de comidas rápidas, contando con un sistema básico de inventario y registro de ventas. Todo esto acompañado de visuales fáciles de usar.",
            shortDescription: "Software de gestión para puestos pequeños de comidas rápidas",
            image: "https://cdn-icons-png.flaticon.com/512/5222/5222189.png",
            technologies: ["Java 11", "JSwing", "JDBC", "MariaDB", "XAMPP"],
            category: "desktop",
            demoUrl: "https://youtu.be/1zRn5QkG4Ak",
            githubUrl: "https://github.com/JJMarin-08345/.NET-Java-y-Python/tree/Java/Gestion_Salchipapas",
            date: "2022",
            client: "Ninguno (proyecto personal)",
            duration: "1 mes",
            teamSize: 1,
            features: [
                "Gestión completa de inventario y suministros",
                "Administración de productos (nombre, descripción, precios)",
                "Registro e historial de ventas",
                "Generación y visualización de facturas simuladas",
            ],
            challenges: [
                "Diseño de un modelo de datos eficiente para inventario y ventas",
                "Implementación de facturación simulada sin depender de servicios externos",
                "Garantizar integridad de datos entre productos, inventario y ventas",
            ],
        },
        {
            id: 4,
            title: "CRUD Inventario Tecnológico",
            description:
                "Sistema de información desarrollado en Java con JDBC, JSwing y MariaDB (XAMPP) para la gestión integral del inventario tecnológico de una institución educativa, aplicando POO y la arquitectura MVC. Incluye control de hardware, software, cuentadantes, proveedores, ubicaciones y reportes detallados.",
            shortDescription: "Sistema MVC en Java para inventario educativo",
            image: "https://cdn-icons-png.flaticon.com/512/2897/2897785.png",
            technologies: ["Java JDBC", "JSwing", "MVC", "MariaDB (XAMPP)"],
            category: "desktop",
            demoUrl: "https://youtu.be/qdQvV73Uy_g",
            githubUrl: "https://github.com/JJMarin-08345/.NET-Java-y-Python/tree/Java/InventarioTecnologico",
            client: "Institución Educativa (Proyecto MisiónTIC-2022)",
            date: "2022",
            duration: "2 meses",
            teamSize: 1,
            features: [
                "CRUD de equipos, componentes y software",
                "Gestión de cuentadantes y asignación de equipos",
                "Registro de proveedores, compras y garantías",
                "Clasificación de equipos (administrativos y de formación)",
                "Ubicación en oficinas y ambientes de formación",
                "Reportes dinámicos (equipos por cuentadante, equipos en garantía, proveedores, fichas técnicas, etc.)",
            ],
            challenges: [
                "Modelar relaciones complejas entre equipos, componentes, software y cuentadantes",
                "Aplicar correctamente el patrón MVC en Java con JDBC",
                "Manejo de persistencia de datos en MariaDB (XAMPP)",
                "Diseño de interfaz gráfica amigable en JSwing",
            ],
            results: [
                "Sistema funcional para gestión de inventario tecnológico",
                "Acceso a varias consultas y reportes con algo de detalles",
            ],
        },
        {
            id: 5,
            title: "Aplicación móvil (proyecto confidencial)",
            description:
                "Desarrollo de una aplicación móvil multiplataforma con enfoque en gestión de información sensible. El proyecto está bajo acuerdo de confidencialidad, por lo cual solo se comparten detalles técnicos y metodológicos.",
            shortDescription: "App móvil multiplataforma (confidencial)",
            image: "https://cdn-images-1.medium.com/v2/resize:fit:1200/1*em2XHNcs3cB1fBkd1TF1bQ.png",
            technologies: ["React Native", "Expo", "Formik", "Axios", "Tailwind", "PostgreSQL", "Python"],
            category: "mobile",
            client: "Confidencial",
            date: "2025",
            duration: "En desarrollo",
            teamSize: 4,
            features: [
                "Autenticación segura con JWT",
                "Formularios dinámicos con validación avanzada",
                "Integración con cámara y galería del dispositivo",
                "Almacenamiento y sincronización de datos en la nube",
            ],
            challenges: [
                "Garantizar la seguridad y privacidad de la información",
                "Formularios complejos con múltiples validaciones con Formik y Zod",
                "Optimización de rendimiento en dispositivos de gama baja",
            ],
            results: [
                "Aplicación actualmente en desarrollo bajo metodologías ágiles",
                "Entrega de módulos iniciales en ciclos iterativos",
                "Arquitectura escalable para futuras funcionalidades",
                "Diseño de UI/UX intuitiva y accesible",
            ],
        }
        // {
        //     id: 6,
        //     title: "App de Fitness y Nutrición",
        //     description:
        //         "Aplicación móvil para tracking de ejercicios, planes nutricionales personalizados, integración con wearables, comunidad social y coaching virtual con IA.",
        //     shortDescription: "App fitness con IA y comunidad social",
        //     image: "/placeholder.svg?height=300&width=400",
        //     technologies: ["Flutter", "Python", "TensorFlow", "HealthKit", "Firebase", "OpenAI API"],
        //     category: "mobile",
        //     demoUrl: "https://apps.apple.com/app/zenkai-fitness",
        //     date: "2024",
        //     client: "FitLife Solutions",
        //     duration: "7 meses",
        //     teamSize: 5,
        //     features: [
        //         "Tracking automático de ejercicios",
        //         "Planes nutricionales con IA",
        //         "Integración con Apple Health/Google Fit",
        //         "Comunidad social y challenges",
        //         "Coach virtual personalizado",
        //         "Análisis de progreso avanzado",
        //     ],
        //     challenges: [
        //         "Precisión en reconocimiento de ejercicios",
        //         "Personalización de planes nutricionales",
        //         "Integración compleja con múltiples wearables",
        //     ],
        //     results: ["25,000+ usuarios activos mensuales", "4.9 estrellas en App Store", "85% de retención a 30 días"],
        // },
    ]);

    // Categorías de proyectos
    const categories = [
        { id: "all", name: "Todos los Proyectos" },
        { id: "web", name: "Desarrollo Web" },
        { id: "mobile", name: "Apps Móviles" },
        { id: "desktop", name: "Aplicaciones de escritorio" },
    ];

    return {
        data_info: {
            projects,
            categories
        }
    }
}
