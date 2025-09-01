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
            image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
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
        { id: "desktop", name: "Aplicaciones de escritorio" },
    ];

    return {
        data_info: {
            projects,
            categories
        }
    }
}
