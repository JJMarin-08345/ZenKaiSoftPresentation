import { useEffect } from 'react';
import type { ProjectType } from '../types/project.types';
import { CalendarIcon, CodeIcon, ExternalLinkIcon, GithubIcon, UsersIcon, XIcon } from 'lucide-react';

interface ModalProjectProps {
    selectedProject: ProjectType;
    onCloseModal: () => void;
}

export const ModalProject = ({ selectedProject, onCloseModal }: ModalProjectProps) => {

    useEffect(() => {
        // 🔹 Bloquear scroll del body cuando el modal abre
        document.body.style.overflow = "hidden";
        return () => {
            // 🔹 Restaurar scroll al cerrar modal
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={onCloseModal}
        >
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="relative">
                    <img
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        className="w-full h-64 object-contain p-3 rounded-t-2xl"
                    />
                    <button
                        onClick={onCloseModal}
                        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
                    >
                        <XIcon className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-4">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full font-medium">
                            {selectedProject.category === "web"
                                ? "Desarrollo Web"
                                : selectedProject.category === "mobile"
                                    ? "App Móvil"
                                    : "Software Desktop"}
                        </span>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">{selectedProject.title}</h2>
                            <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">{selectedProject.description}</p>

                            {/* Features */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-3">Características Principales</h3>
                                <ul className="space-y-2">
                                    {selectedProject?.features?.map((feature, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600 dark:text-slate-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Challenges */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-3">Desafíos Técnicos</h3>
                                <ul className="space-y-2">
                                    {selectedProject?.challenges?.map((challenge, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600 dark:text-slate-400">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Results */}
                            {selectedProject?.results && selectedProject?.results.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-3">Resultados Obtenidos</h3>
                                    <ul className="space-y-2">
                                        {selectedProject?.results?.map((result, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-600 dark:text-slate-400">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Project Info */}
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200 mb-4">Información del Proyecto</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <CalendarIcon className="w-5 h-5 shrink-0 text-red-500 dark:text-red-400" />
                                        <div>
                                            <div className="font-medium text-sm text-gray-500 dark:text-red-400">Año</div>
                                            <div className="dark:text-slate-500">{selectedProject.date}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <UsersIcon className="w-5 h-5 shrink-0 text-red-500 dark:text-red-400" />
                                        <div>
                                            <div className="font-medium text-sm text-gray-500 dark:text-red-400">Equipo</div>
                                            <div className="dark:text-slate-500">{selectedProject.teamSize} personas</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CalendarIcon className="w-5 h-5 shrink-0 text-red-500 dark:text-red-400" />
                                        <div>
                                            <div className="font-medium text-sm text-gray-500 dark:text-red-400">Duración</div>
                                            <div className="dark:text-slate-500">{selectedProject.duration}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CodeIcon className="w-5 h-5 shrink-0 text-red-500 dark:text-red-400" />
                                        <div>
                                            <div className="font-medium text-sm text-gray-500 dark:text-red-400">Cliente</div>
                                            <div className="dark:text-slate-500">{selectedProject.client}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-200 mb-4">Tecnologías Utilizadas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                {selectedProject.demoUrl && (
                                    <a
                                        href={selectedProject.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 active:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full"
                                    >
                                        <ExternalLinkIcon className="w-5 h-5 shrink-0" />
                                        <span>Ver Demo</span>
                                    </a>
                                )}
                                {selectedProject.githubUrl && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 border-2 dark:bg-white border-gray-300 hover:bg-gray-200 active:bg-gray-200 px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full"
                                    >
                                        <GithubIcon className="w-5 h-5" />
                                        <span>Ver Código</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
