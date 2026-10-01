import { Link } from "react-router-dom";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";

export const HomePage = () => {

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="mb-4 text-sm font-bold uppercase text-red-400">
                                Desarrollo de software en Colombia
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Desarrollo de software a medida para
                                <span className="text-red-500"> impulsar tu empresa</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                En Zenkaisoft diseñamos aplicaciones web, móviles y sistemas personalizados que digitalizan procesos,
                                conectan información y están preparados para crecer con tu negocio.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="mailto:zenkaisoft.col@gmail.com?subject=Quiero cotizar un proyecto de software"
                                    className="bg-red-500 text-center text-white hover:bg-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
                                >
                                    Cuéntanos tu proyecto
                                </a>
                                <Link to="/proyectos" className="border-2 border-white text-white hover:bg-white active:bg-white hover:text-gray-900 active:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                                    Ver proyectos
                                </Link>
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

            <section className="border-b border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
                    <div><strong className="block text-2xl text-red-500">Web</strong><span className="text-gray-600 dark:text-gray-400">Plataformas y productos SaaS</span></div>
                    <div><strong className="block text-2xl text-red-500">Móvil</strong><span className="text-gray-600 dark:text-gray-400">Aplicaciones Android y iOS</span></div>
                    <div><strong className="block text-2xl text-red-500">Cloud</strong><span className="text-gray-600 dark:text-gray-400">APIs, datos e integraciones</span></div>
                </div>
            </section>

            {/* Sección de servicios ofrecidos */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <Services />
            </section>

            {/* Sección de por qué nosotros */}
            <section className="py-20 bg-gray-100 dark:bg-gradient-to-t dark:from-gray-800 dark:to-gray-900">
                <WhyChooseUs />
            </section>

        </div>
    )
}
