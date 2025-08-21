import { useState } from "react";
import type { ProjectType } from "../types/project.types";

export const useProjectsGrid = () => {
    // Proyectos
    const [projects] = useState<ProjectType[]>([
        {
            id: 1,
            title: "E-commerce Fashion Store",
            description:
                "Plataforma completa de comercio electrónico para una tienda de moda con gestión de inventario, pasarela de pagos, panel administrativo y sistema de recomendaciones basado en IA.",
            shortDescription: "Tienda online moderna con IA integrada",
            image: "https://imagenes.20minutos.es/uploads/imagenes/2024/05/15/una-imagen-creada-por-la-herramienta-imagen-3-de-google.jpeg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "TensorFlow"],
            category: "web",
            demoUrl: "https://demo-fashion-store.com",
            githubUrl: "https://github.com/zenkai/fashion-store",
            date: "2024",
            client: "Fashion Boutique SA",
            duration: "4 meses",
            teamSize: 4,
            features: [
                "Catálogo de productos con filtros avanzados",
                "Carrito de compras y checkout optimizado",
                "Sistema de recomendaciones con IA",
                "Panel administrativo completo",
                "Integración con múltiples pasarelas de pago",
                "Sistema de reviews y calificaciones",
            ],
            challenges: [
                "Optimización de rendimiento para catálogo extenso",
                "Implementación de recomendaciones en tiempo real",
                "Integración compleja con sistemas de inventario",
            ],
            results: [
                "Aumento del 45% en conversiones",
                "Reducción del 60% en tiempo de carga",
                "Incremento del 30% en valor promedio de pedido",
            ],
        },
        {
            id: 2,
            title: "App Móvil de Delivery",
            description:
                "Aplicación móvil nativa para servicio de delivery con tracking en tiempo real, sistema de pagos integrado, chat con repartidores y gamificación para usuarios frecuentes.",
            shortDescription: "App de delivery con tracking en tiempo real",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["React Native", "Firebase", "Google Maps API", "Stripe", "Socket.io"],
            category: "mobile",
            demoUrl: "https://play.google.com/store/apps/details?id=com.zenkai.delivery",
            date: "2023",
            client: "QuickFood Delivery",
            duration: "6 meses",
            teamSize: 5,
            features: [
                "Tracking GPS en tiempo real",
                "Chat integrado con repartidores",
                "Sistema de puntos y recompensas",
                "Múltiples métodos de pago",
                "Notificaciones push inteligentes",
                "Calificación y feedback de pedidos",
            ],
            challenges: [
                "Optimización de batería para tracking GPS",
                "Sincronización en tiempo real entre múltiples usuarios",
                "Manejo de conectividad intermitente",
            ],
            results: [
                "50,000+ descargas en 3 meses",
                "Rating de 4.8 estrellas en stores",
                "Reducción del 40% en tiempo de entrega",
            ],
        },
        {
            id: 3,
            title: "Sistema de Gestión Hospitalaria",
            description:
                "Sistema integral para gestión hospitalaria con módulos de pacientes, citas médicas, historiales clínicos, facturación, inventario farmacéutico y reportes analíticos avanzados.",
            shortDescription: "ERP hospitalario con módulos integrados",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Vue.js", "Laravel", "PostgreSQL", "Docker", "Redis", "Chart.js"],
            category: "web",
            client: "Hospital San Rafael",
            date: "2023",
            duration: "8 meses",
            teamSize: 6,
            features: [
                "Gestión completa de pacientes",
                "Sistema de citas y agenda médica",
                "Historiales clínicos digitales",
                "Módulo de facturación y seguros",
                "Control de inventario farmacéutico",
                "Reportes y analytics avanzados",
            ],
            challenges: [
                "Cumplimiento de normativas de privacidad médica",
                "Integración con sistemas legacy existentes",
                "Manejo de grandes volúmenes de datos sensibles",
            ],
            results: [
                "Reducción del 70% en tiempo de consulta",
                "Eliminación del 95% del papeleo",
                "Mejora del 50% en satisfacción del paciente",
            ],
        },
        {
            id: 4,
            title: "Plataforma de Learning Management",
            description:
                "LMS completo para educación online con videoconferencias integradas, sistema de evaluaciones automáticas, gamificación, certificaciones y analytics de progreso estudiantil.",
            shortDescription: "LMS con videoconferencias y gamificación",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Next.js", "Prisma", "WebRTC", "FFmpeg", "Moodle API", "Zoom SDK"],
            category: "web",
            demoUrl: "https://demo-lms.zenkai.com",
            githubUrl: "https://github.com/zenkai/lms-platform",
            date: "2024",
            client: "EduTech Institute",
            duration: "5 meses",
            teamSize: 4,
            features: [
                "Videoconferencias HD integradas",
                "Sistema de evaluaciones automáticas",
                "Gamificación y badges",
                "Certificaciones digitales",
                "Analytics de progreso detallados",
                "Biblioteca de recursos multimedia",
            ],
            challenges: [
                "Optimización de streaming de video",
                "Escalabilidad para miles de usuarios concurrentes",
                "Sincronización de contenido multimedia",
            ],
            results: [
                "10,000+ estudiantes activos",
                "95% de satisfacción en encuestas",
                "Reducción del 60% en costos operativos",
            ],
        },
        {
            id: 5,
            title: "App de Fitness y Nutrición",
            description:
                "Aplicación móvil para tracking de ejercicios, planes nutricionales personalizados, integración con wearables, comunidad social y coaching virtual con IA.",
            shortDescription: "App fitness con IA y comunidad social",
            image: "/placeholder.svg?height=300&width=400",
            technologies: ["Flutter", "Python", "TensorFlow", "HealthKit", "Firebase", "OpenAI API"],
            category: "mobile",
            demoUrl: "https://apps.apple.com/app/zenkai-fitness",
            date: "2024",
            client: "FitLife Solutions",
            duration: "7 meses",
            teamSize: 5,
            features: [
                "Tracking automático de ejercicios",
                "Planes nutricionales con IA",
                "Integración con Apple Health/Google Fit",
                "Comunidad social y challenges",
                "Coach virtual personalizado",
                "Análisis de progreso avanzado",
            ],
            challenges: [
                "Precisión en reconocimiento de ejercicios",
                "Personalización de planes nutricionales",
                "Integración compleja con múltiples wearables",
            ],
            results: ["25,000+ usuarios activos mensuales", "4.9 estrellas en App Store", "85% de retención a 30 días"],
        },
    ]);

    // Categorías de proyectos
    const categories = [
        { id: "all", name: "Todos los Proyectos" },
        { id: "web", name: "Desarrollo Web" },
        { id: "mobile", name: "Apps Móviles" },
        { id: "desktop", name: "Software Desktop" },
    ];

    return {
        data_info: {
            projects,
            categories
        }
    }
}
