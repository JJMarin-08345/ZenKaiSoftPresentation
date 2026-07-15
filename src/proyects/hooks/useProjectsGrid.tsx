import { useState } from "react";
import type { ProjectType } from "../types/project.types";

export const useProjectsGrid = () => {
    // Proyectos
    const [projects] = useState<ProjectType[]>([
        {
            id: 1,
            title: "Redplika - Juntos para cuidarnos",
            description: "",
            shortDescription: "Plataforma de salud digital",
            image: "https://media.licdn.com/dms/image/v2/D4E03AQEqkQ-dx3dz5w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712784625560?e=2147483647&v=beta&t=ejWBzDBiwFQwnWo_zEw2v4K30wWmTtEUTiA18jDxRgA",
            technologies: ["React", "Tailwind", "Node.js", "MongoDB", "AWS", "Twilio", "ePayco"],
            category: "web",
            demoUrl: "https://app.salutio.mozartia.com/dashboard",
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
            title: "GIPA ONE - Software GIPA",
            description:
                "GIPA One es la app móvil del Software GIPA — Gestión Inteligente de Procesos Alimentarios — una plataforma enfocada en el control y aseguramiento de la calidad en el sector alimentario. Diseñada para plantas de alimentos, permite simular visitas del INVIMA, obtener diagnósticos detallados de fabricación y verificar el cumplimiento de protocolos sanitarios, todo desde un iPhone o iPad. Gestiona cronogramas, inspecciones, reportes de calidad e inventarios desde una sola plataforma. Construida con React Native y Expo, incluye autenticación segura con JWT, formularios dinámicos validados con Formik y Zod, integración con cámara y galería, sincronización en la nube y un sistema de roles y permisos por tipo de usuario.",
            shortDescription: "App móvil para la gestión inteligente de procesos alimentarios",
            image: "https://gipabucket.s3.us-east-2.amazonaws.com/static/logos/gipa_one_dark_logo.png",
            demoUrl: "https://play.google.com/store/apps/details?id=com.optimuslatinoamerica.gipa&hl=es_CO",
            technologies: ["React Native", "Expo", "Formik", "Zod", "Axios", "Tailwind", "PostgreSQL", "Python"],
            category: "mobile",
            client: "Confidencial",
            date: "2025",
            duration: "Finalizada",
            teamSize: 4,
            features: [
                "Gestión de reportes, cronogramas e inspecciones desde el móvil",
                "Monitoreo de variables y procesos en tiempo real",
                "Control de inventarios y seguimiento de tareas operativas",
                "Sistema de roles y permisos por tipo de usuario",
                "Alertas y notificaciones sobre tareas pendientes o eventos críticos",
                "Integración con cámara y galería para registro visual de evidencias",
                "Sincronización automática de datos en la nube",
                "Integración de plataforma IASKOOL dentro de la app para capacitación con certificados",
                "Autenticación segura con JWT",
                "Formularios dinámicos con validación avanzada usando Formik y Zod",
            ],
            challenges: [
                "Diseño de formularios complejos y dinámicos que fueran fáciles de usar en dispositivos móviles",
                "Implementación de un sistema de roles flexible que se adaptara a distintos tipos de operación",
                "Integración de la plataforma de capacitación IASKOOL dentro de la app móvil, usando WebViews, permisos de cámara y almacenamiento local para certificados",
            ],
            results: [
                "Aplicación publicada y disponible en App Store (iOS) y Play Store (Android)",
                "Supervisores y técnicos pueden gestionar operaciones completas sin depender del escritorio",
                "UI/UX clara e intuitiva que facilita la adopción por parte de usuarios no técnicos",
                "Arquitectura escalable lista para nuevas funcionalidades",
            ],
        },
        {
            id: 7,
            title: "Menux - Plataforma de menús digitales",
            description:
                "Menux es una plataforma SaaS para restaurantes que reemplaza la carta física por un menú digital accesible vía QR, junto con un panel administrativo completo para gestionarlo. Soporta múltiples sedes por restaurante (cada una con su propio horario, contacto y ubicación), categorías y productos con variantes de precio e ingredientes, promociones, y un editor visual de tema (Theme Studio) estilo Shopify para personalizar colores, tipografías y secciones del menú público sin tocar código, todo respaldado por planes con límites configurables (sedes, productos, etc.).",
            shortDescription: "SaaS de menús digitales con QR y panel administrativo multi-sede",
            image: "https://ooqpnjiuywgwrdcokubm.supabase.co/storage/v1/object/public/menux_products/menux.png",
            technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Supabase", "TanStack Query", "React Router v7"],
            category: "web",
            demoUrl: "https://menux-platform.zenkaisoft-col.com/",
            date: "2026",
            client: "Zenkaisoft",
            duration: "En desarrollo activo",
            teamSize: 1,
            features: [
                "Menú público digital accesible por QR, con URL propia por restaurante (slug)",
                "Panel administrativo con gestión de categorías, productos, variantes de precio e ingredientes",
                "Soporte multi-sede: cada sede con su propio horario, contacto, dirección y ubicación en el mapa",
                "Gestión de promociones y horarios de atención",
                "Theme Studio: editor visual estilo Shopify para personalizar el menú público (colores, tipografías, secciones) con vista previa en vivo",
                "Planes con límites configurables (número de sedes, productos, etc.)",
                "Autenticación y onboarding simplificado con Google",
            ],
            challenges: [
                "Modelar correctamente los datos multi-sede sin duplicar información propia de la marca",
                "Editor de tema en vivo (theme draft) que refleja cambios al instante sin persistirlos hasta guardar",
                "Mantener un único componente de renderizado del menú público (LandingPreview) reutilizable entre el admin y el sitio público",
            ],
            results: [
                "Plataforma funcional en producción, con restaurantes reales usando el panel administrativo",
                "Arquitectura separada entre panel admin y sitio público, cada uno desplegado de forma independiente",
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
