import { Code, Briefcase, GraduationCap } from "lucide-react";

export const AboutUsPage = () => {

    const experience = [
        {
            company: "AlbaHolding SAS",
            role: "Desarrollador Full Stack",
            period: "Oct 2024 - Presente",
            description: "Mantenimiento y desarrollo de funcionalidades para distintas aplicaciones corporativas, usando .NET/Nest.js como servidor y React para el cliente.",
            technologies: [".NET", "React", "Nest.js", "Typescript", "PHP", "PostgreSQL", "Docker", "Material UI", "Tailwind CSS", "Azure DevOps"]
        },
        {
            company: "Optimus Latinoamérica SAS",
            role: "Desarrollador Full Stack",
            period: "Feb 2024 - Oct 2024",
            description: "Desarrollo de nuevas funcionalidades y mantenimiento a una aplicación web para la industria alimentaria.",
            technologies: ["Python", "Django", "Django API REST", "AWS", "PostgreSQL", "Typescript", "Expo", "React Native", "Bootstrap", "Tailwind CSS", "UX/UI", "Git Flow", "Modular Monolithic Architecture"],
        },
        {
            company: "Docty Colombia",
            role: "Desarrollador Full Stack - MERN Stack",
            period: "Sep 2024 - Mar 2025",
            description: "Colaboración en desarrollo de plataforma web para telemedicina, realizando funcionalidades tanto en frontend como backend. Integrando servicios como AWS para almacenamiento de diferentes archivos, Twilio para envío de correos y mensajes, Voice API para llamadas desde el navegador.",
            technologies: ["React", "Tailwind CSS", "Shadcn", "MongoDB", "Express", "Node.js", "JWT", "AWS", "Vercel", "Twilio", "SendGrid", "Voice API", "Agora.io"],
        },
        {
            company: "Semillero DinnerSys",
            role: "Líder Semillero - Desarrollador Full Stack",
            period: "2024",
            description: "Liderazgo de equipo en el desarrollo de un sistema para la digitalización de toma de pedidos en restaurantes pymes. Usando como frontend React y Tailwind, un backend con Node.js, Express y MySQL.\nPara el despliegue se usa Vercel para alojar tanto el front como el servidor y Google Cloud para la base de datos.",
            technologies: ["React", "Tailwind CSS", "Node.js", "Express", "JWT", "MySQL", "Google Cloud", "Vercel"],
        },
    ]

    const education = [
        {
            institution: "Fundación Universitaria Católica Lúmen Gentium",
            degree: "Tecnólogo en Desarrollo de Software",
            period: "2022 - 2025",
        },
        {
            institution: "Misión TIC 2022 (Universidad de Caldas)",
            degree: "Desarrollador de Software con énfasis en aplicaciones web",
            period: "2021 - 2022",
        },
        {
            institution: "Misión TIC 2022 (Universidad de Caldas)",
            degree: "Desarrollador de Software con énfasis en aplicaciones móviles",
            period: "2021 - 2022",
        },
        {
            institution: "Oracle + Alura Latam",
            degree: "Oracle ONE (Oracle Next Education)",
            period: "2024",
        },
    ]

    const stats = [
        { number: "10+", label: "Tecnologías Dominadas" },
        { number: "2+", label: "Años de Experiencia" },
        { number: "100%", label: "Dedicación" },
    ]

    return (
        <div className="bg-white dark:bg-gray-950">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-slate-950 dark:via-gray-950 dark:to-black text-white py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <div className="inline-block mb-6">
                            <span className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                                Desarrollador Full Stack
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                            Juan José Marín
                        </h1>
                        <div className="text-2xl text-red-400 font-semibold mb-6">ZENKAI SOFT</div>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            Apasionado por construir soluciones digitales que resuelven problemas reales,
                            desde aplicaciones web hasta sistemas complejos, siempre con foco en calidad e impacto.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href="https://github.com/JJMarin-08345"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
                            >
                                <Code className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jjmarindev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
                            >
                                <Briefcase className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-slate-900/20 border border-gray-200 dark:border-slate-700">
                                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 dark:text-slate-300 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sobre Mí */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre Mí</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6 text-gray-600 dark:text-slate-300 leading-relaxed text-lg">
                                <p>
                                    Convierto ideas en productos digitales que funcionan: rápidos, escalables y fáciles de mantener.
                                </p>
                                <p>
                                    Me especializo en entender el problema antes de escribir una sola línea de código.
                                    Eso significa menos retrabajo, entregas más predecibles y software que realmente
                                    resuelve lo que necesita resolver.
                                </p>
                                <p>
                                    He colaborado en sistemas de gestión, plataformas web modernas y arquitecturas
                                    cloud — siempre con foco en que el producto sea sostenible a largo plazo, no solo
                                    que funcione hoy.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Habilidades Blandas</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Trabajo en equipo",
                                    "Comunicación asertiva",
                                    "Capacidad analítica",
                                    "Resolución de problemas",
                                    "Responsabilidad y puntualidad",
                                    "Gestión del tiempo",
                                    "Aprendizaje rápido",
                                    "Pensamiento estratégico",
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-slate-300">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiencia Laboral */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Experiencia Profesional
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Proyectos y empresas donde he colaborado
                        </p>
                    </div>

                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <div
                                key={index}
                                className="relative pl-8 md:pl-32 group hover:transform hover:scale-[1.02] transition-all duration-300"
                            >
                                {index !== experience.length - 1 && (
                                    <div className="absolute left-[15px] md:left-[60px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-600"></div>
                                )}
                                <div className="absolute left-0 md:left-[45px] top-0">
                                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Briefcase className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl dark:hover:shadow-red-500/10 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{job.company}</h3>
                                            <p className="text-lg text-red-500 dark:text-red-400 font-medium">{job.role}</p>
                                        </div>
                                        <span className="text-gray-500 dark:text-slate-400 mt-2 md:mt-0">{job.period}</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-4 whitespace-pre-line">{job.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-slate-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Educación */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Formación Académica</h2>
                        <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Mi preparación profesional y certificaciones
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-slate-900/30 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.institution}</h3>
                                <p className="text-gray-600 dark:text-slate-300 mb-2">{edu.degree}</p>
                                <p className="text-gray-500 dark:text-slate-400 text-sm">{edu.period}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack Tecnológico */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Stack Tecnológico Principal
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Las tecnologías con las que estoy más familiarizado y que uso regularmente en mis proyectos.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
                        {[
                            "React", "Nest.js", "Express", "TypeScript", ".NET", "Java", "Django",
                            "Tailwind CSS", "PostgreSQL", "SQL SERVER", "MongoDB", "Git",
                            "API Integration", "Docker", "AWS", "Vercel", "AI Agents", "Figma"
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900 rounded-xl p-4 text-center border border-gray-200 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-400 hover:shadow-lg transition-all duration-300 group"
                            >
                                <span className="text-gray-700 dark:text-slate-300 font-medium group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}