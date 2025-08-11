
// Componentes de ejemplo para las páginas
export const Home = () => (
    <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Transformamos tus
                            <span className="text-red-500"> ideas</span> en
                            <span className="text-red-500"> soluciones digitales</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Somos ZENKAI SOFT, expertos en desarrollo de software personalizado, aplicaciones web y móviles que
                            impulsan el crecimiento de tu negocio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Comenzar Proyecto
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                                Ver Portafolio
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-r from-red-500 to-red-800 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div className="bg-white rounded-lg p-6 text-gray-900">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    <div className="h-4 bg-red-200 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Desarrollo Web",
                            description: "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
                            icon: "🌐",
                        },
                        {
                            title: "Aplicaciones Móviles",
                            description: "Apps nativas e híbridas para iOS y Android que conectan con tu audiencia.",
                            icon: "📱",
                        },
                        {
                            title: "Software Personalizado",
                            description: "Sistemas a medida que se adaptan perfectamente a los procesos de tu empresa.",
                            icon: "⚙️",
                        },
                        {
                            title: "E-commerce",
                            description: "Tiendas online completas con pasarelas de pago y gestión de inventario.",
                            icon: "🛒",
                        },
                        {
                            title: "Consultoría IT",
                            description: "Asesoramiento estratégico para optimizar tu infraestructura tecnológica.",
                            icon: "💡",
                        },
                        {
                            title: "Soporte Técnico",
                            description: "Mantenimiento y soporte continuo para garantizar el funcionamiento óptimo.",
                            icon: "🔧",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">¿Por qué elegir ZENKAI SOFT?</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Experiencia Comprobada",
                                    description: "Más de 5 años desarrollando soluciones exitosas para empresas de todos los tamaños.",
                                },
                                {
                                    title: "Tecnología de Vanguardia",
                                    description: "Utilizamos las últimas tecnologías y mejores prácticas del desarrollo de software.",
                                },
                                {
                                    title: "Soporte Personalizado",
                                    description: "Acompañamiento completo desde la idea inicial hasta el lanzamiento y más allá.",
                                },
                                {
                                    title: "Resultados Medibles",
                                    description: "Nos enfocamos en crear soluciones que generen un impacto real en tu negocio.",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Estadísticas que nos respaldan</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">150+</div>
                                    <div className="text-red-100">Proyectos Completados</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">98%</div>
                                    <div className="text-red-100">Clientes Satisfechos</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">24/7</div>
                                    <div className="text-red-100">Soporte Técnico</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">5+</div>
                                    <div className="text-red-100">Años de Experiencia</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Solicitar Cotización Gratuita
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                        Agendar Consulta
                    </button>
                </div>
            </div>
        </section>
    </div>
)
