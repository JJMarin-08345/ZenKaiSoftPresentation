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

            {/* Sección de servicios ofrecidos */}
            <section className="py-20 bg-white">
                <Services />
            </section>

            {/* Sección de por qué nosotros */}
            <section className="py-20 bg-gray-100">
                <WhyChooseUs />
            </section>

        </div>
    )
}
