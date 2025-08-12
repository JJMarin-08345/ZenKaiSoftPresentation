import { Layers, Layers2, Lightbulb, LockKeyholeIcon, ShieldCheck } from "lucide-react";
import { useWhyChooseUs } from "../hooks/useWhyChooseUs"

export const WhyChooseUs = () => {

    const {
        data_info: { reasons }
    } = useWhyChooseUs();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        ¿Por qué elegir&nbsp;
                        <span className="font-anta">ZENKAI SOFT</span>?
                    </h2>
                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6">Lo que nos hace destacar</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <ShieldCheck className="mx-auto" />
                                <div className="font-bold">Alto Rendimiento</div>
                                <p className="text-red-100 text-sm">Aplicaciones rápidas y optimizadas.</p>
                            </div>
                            <div className="text-center">
                                <LockKeyholeIcon className="mx-auto" />
                                <div className="font-bold">Seguridad Avanzada</div>
                                <p className="text-red-100 text-sm">Protección total de datos.</p>
                            </div>
                            <div className="text-center">
                                <Layers className="mx-auto" />
                                <div className="font-bold">Escalabilidad</div>
                                <p className="text-red-100 text-sm">Crecemos junto a tu negocio.</p>
                            </div>
                            <div className="text-center">
                                <Lightbulb className="mx-auto" /> 
                                <div className="font-bold">Innovación Constante</div>
                                <p className="text-red-100 text-sm">Siempre con lo último en tecnología.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
