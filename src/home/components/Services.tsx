import * as LucideIcons from "lucide-react";
import { useServices } from "../hooks/useServices";

export const Services = () => {
    const {
        data_info: {
            services
        }
    } = useServices();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Servicios</h2>
                <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
                    Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {

                    const LucideIconRender: any = LucideIcons[service.iconName] || "CircleQuestionMarkIcon";

                    return (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-slate-900 rounded-xl p-8 hover:shadow-lg active:shadow-lg transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 group"
                        >
                            <div className="text-4xl dark:text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <LucideIconRender />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-red-400 mb-4">{service.title}</h3>
                            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
