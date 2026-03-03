import { Heart, Code, Coffee, Zap, CheckCircle, Briefcase, GraduationCap } from "lucide-react";

export const AboutUsPage = () => {
    const values = [
        {
            icon: Zap,
            title: "Innovación Constante",
            description:
                "Siempre explorando las últimas tecnologías y tendencias para ofrecer soluciones modernas y escalables.",
            color: "from-yellow-500 to-orange-500",
        },
        {
            icon: CheckCircle,
            title: "Calidad Garantizada",
            description:
                "Cada línea de código es escrita con atención al detalle y siguiendo las mejores prácticas de la industria.",
            color: "from-blue-500 to-indigo-500",
        },
        {
            icon: Heart,
            title: "Pasión por el Código",
            description:
                "Amo lo que hago y eso se refleja en cada proyecto que desarrollo, desde el backend hasta el frontend.",
            color: "from-red-500 to-pink-500",
        },
        {
            icon: Coffee,
            title: "Dedicación Total",
            description:
                "Comprometido 100% con el éxito de cada proyecto y la satisfacción del cliente, trabajando con metodologías ágiles.",
            color: "from-green-500 to-emerald-500",
        },
    ]

    const skills = [
        { name: "React & Next.js", level: 95 },
        { name: "Node.js & Express", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python & Django", level: 88 },
        { name: "PostgreSQL & MongoDB", level: 90 },
        { name: "AWS & Cloud Services", level: 85 },
    ]

    const experience = [
        {
            company: "Optimus Latinoamérica SAS",
            role: "Desarrollador Full Stack",
            period: "Feb 2025 - Presente",
            description: "Desarrollo de nuevas funcionalidades y mantenimiento a una aplicación web para la industria alimentaria.",
            technologies: ["Python", "Django", "Django API REST", "AWS", "PostgreSQL", "Typescript", "Expo", "React Native", "Bootstrap", "Tailwind CSS", "UX/UI", "Git Flow", "Modular Monolithic Architecture"],
        },
        {
            company: "Docty Colombia",
            role: "Desarrollador Full Stack - MERN Stack",
            period: "Sep 2024 - Mar 2025",
            description: "Colaboración en desarrollo de plataforma web para telemedicina, realizando funcionalidades tanto en frontend como backend. Integrando servicios como AWS para almacenamieto de diferentes archivos, Twilio para envio de correos y mensajes, Voice API para llamadas desde el navegador.",
            technologies: ["React", "Tailwind CSS", "Shadcn", "MongoDB", "Express", "Node.js", "JWT", "AWS", "Vercel", "Twilio", "SendGrid", "Voice API", "Agora.io"],
        },
        {
            company: "Semillero DinnerSys",
            role: "Líder Semillero - Desarrollador Full Stack",
            period: "2024",
            description: "Liderazgo de equipo en el desarrollo de un sistema para la digitalización de toma de pedidos en restaurantes pymes. Usando como frontend React y Tailwind, un backend con Node.js, Express y MySQL. \n Para el despliegue se usa vercel para alojar tanto el front como el servidor y Google Cloud para la base de datos.",
            technologies: ["React", "Tailwind CSS", "Node.js", "Express", "JWT", "MySQL", "Google Cloud", "Vercel"],
        },
    ]

    const education = [
        {
            institution: "Fundación Unversitaria Católica Lúmen Gentium",
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
    ]

    const stats = [
        { number: "50+", label: "Proyectos Completados" },
        { number: "5+", label: "Tecnologías Dominadas" },
        { number: "6+", label: "Años de Experiencia" },
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block mb-6">
                                <span className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                                    Desarrollador Full Stack
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                                Juan José Marín
                            </h1>
                            <div className="text-2xl text-red-400 font-semibold mb-6">ZENKAI SOFT</div>
                            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                                Ingeniero de Sistemas especializado en desarrollo full stack con React, Node.js, Python y servicios en
                                la nube.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                Apasionado por crear soluciones digitales eficientes y escalables. Con experiencia en startups y
                                empresas consolidadas, transformo ideas en aplicaciones web y móviles de alto impacto.
                            </p>
                            <div className="flex flex-wrap gap-3">
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
                                    href="https://linkedin.com/in/jjmarin2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
                                >
                                    <Briefcase className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-2xl"></div>
                                <img
                                    src="/placeholder.svg?height=500&width=500&text=Juan+José+Marín"
                                    alt="Juan José Marín"
                                    className="relative rounded-2xl shadow-2xl dark:shadow-red-500/10 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                        <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Mi trayectoria como desarrollador profesional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6 text-gray-600 dark:text-slate-300 leading-relaxed text-lg">
                                <p>
                                    Soy un desarrollador full stack apasionado por crear soluciones digitales eficientes y escalables. Con
                                    sólida formación en Ingeniería de Sistemas y experiencia práctica en múltiples tecnologías,
                                    especializo en el stack MERN y desarrollo con Python.
                                </p>
                                <p>
                                    Mi enfoque se centra en escribir código limpio y mantenible, aplicando las mejores prácticas de la
                                    industria. Tengo experiencia trabajando con servicios cloud (AWS), arquitectura de microservicios, y
                                    desarrollo de aplicaciones tanto del lado del cliente como del servidor.
                                </p>
                                <p>
                                    He trabajado en proyectos para startups y empresas establecidas, desde sistemas de gestión complejos
                                    hasta aplicaciones web modernas. Mi capacidad de aprendizaje rápido y pensamiento estratégico me
                                    permiten adaptarme a diferentes tecnologías y resolver problemas de manera efectiva.
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
                            Proyectos y empresas donde he aplicado mi expertise
                        </p>
                    </div>

                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <div
                                key={index}
                                className="relative pl-8 md:pl-32 group hover:transform hover:scale-[1.02] transition-all duration-300"
                            >
                                {/* Línea vertical */}
                                {index !== experience.length - 1 && (
                                    <div className="absolute left-[15px] md:left-[60px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-600"></div>
                                )}

                                {/* Punto */}
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
                            Las tecnologías con las que trabajo día a día
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                        {skills.map((skill, index) => (
                            <div key={index} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                                    <span className="text-red-500 dark:text-red-400 font-bold">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
                        {[
                            "React",
                            "Node.js",
                            "Express",
                            "Python",
                            "Django",
                            "Java",
                            "C#",
                            ".NET",
                            "TypeScript",
                            "JavaScript",
                            "HTML/CSS",
                            "Tailwind CSS",
                            "PostgreSQL",
                            "MySQL",
                            "SQL SERVER",
                            "MongoDB",
                            "AWS",
                            "Git",
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

            {/* Valores */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Lo Que Me Define</h2>
                        <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
                            Los principios que guían mi trabajo
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon
                            return (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-gray-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 hover:shadow-2xl dark:hover:shadow-slate-900/30 transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                                    <p className="text-gray-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}