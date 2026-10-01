import { Code2, Laptop, Layers, Settings, Smartphone, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useServices } from "../hooks/useServices";

const serviceIcons = {
    Code2,
    Laptop,
    Layers,
    Settings,
    Smartphone,
    Wrench,
};

export const Services = () => {
    const {
        data_info: {
            services
        }
    } = useServices();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-slate-200 mb-4">Servicios de desarrollo de software</h2>
                <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
                    Construimos productos digitales completos para empresas que necesitan algo más que una plantilla.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {

                    const LucideIconRender = serviceIcons[service.iconName];

                    return (
                        <Link
                            key={index}
                            to={service.path}
                            className="border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-lg active:-translate-y-2 active:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-red-500/50 dark:hover:shadow-red-950/20 rounded-xl group"
                        >
                            <div className="mb-4 text-4xl text-red-500 transition-transform duration-300 group-hover:scale-110 dark:text-red-400">
                                <LucideIconRender />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-slate-200">{service.title}</h3>
                            <p className="leading-relaxed text-gray-600 dark:text-slate-400">{service.description}</p>
                            <span className="mt-5 inline-block font-bold text-red-500 dark:text-red-400">Conocer el servicio</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
