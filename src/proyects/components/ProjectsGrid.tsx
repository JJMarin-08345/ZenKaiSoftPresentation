import { useState } from "react";
import { useProjectsGrid } from "../hooks/useProjectsGrid";
import { CalendarIcon, CodeIcon, ExternalLinkIcon, EyeIcon, InfoIcon, UsersIcon, XIcon } from "lucide-react";
import type { ProjectType } from "../types/project.types";

export const ProjectsGrid = () => {
    const {
        data_info: {
            projects,
            categories,
        }
    } = useProjectsGrid();

    const [filter, setFilter] = useState<string>("all");
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

    const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

    const openModal = (project: ProjectType) => {
        setSelectedProject(project)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setSelectedProject(null)
        document.body.style.overflow = "unset"
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.id
                            ? "bg-red-500 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-500 shadow-md"
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        {/* Project Image */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => openModal(project)}
                                    className="opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 transform scale-75 group-hover:scale-100"
                                >
                                    <InfoIcon className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {project.category === "web" ? "Web" : project.category === "mobile" ? "Móvil" : "Desktop"}
                                </span>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => openModal(project)}
                                    className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-medium transition-colors duration-300"
                                >
                                    <EyeIcon className="w-4 h-4" />
                                    <span>Ver Detalles</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="relative">
                            <img
                                src={selectedProject.image || "/placeholder.svg"}
                                alt={selectedProject.title}
                                className="w-full h-64 object-cover rounded-t-2xl"
                            />
                            <button
                                onClick={closeModal}
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
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>

                                    {/* Features */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Características Principales</h3>
                                        <ul className="space-y-2">
                                            {selectedProject?.features?.map((feature, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Challenges */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Desafíos Técnicos</h3>
                                        <ul className="space-y-2">
                                            {selectedProject?.challenges?.map((challenge, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-600">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Resultados Obtenidos</h3>
                                        <ul className="space-y-2">
                                            {selectedProject?.results?.map((result, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-600">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    {/* Project Info */}
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Proyecto</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <CalendarIcon className="w-5 h-5 text-red-500" />
                                                <div>
                                                    <div className="text-sm text-gray-500">Año</div>
                                                    <div className="font-medium">{selectedProject.date}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <UsersIcon className="w-5 h-5 text-red-500" />
                                                <div>
                                                    <div className="text-sm text-gray-500">Equipo</div>
                                                    <div className="font-medium">{selectedProject.teamSize} personas</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <CalendarIcon className="w-5 h-5 text-red-500" />
                                                <div>
                                                    <div className="text-sm text-gray-500">Duración</div>
                                                    <div className="font-medium">{selectedProject.duration}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <CodeIcon className="w-5 h-5 text-red-500" />
                                                <div>
                                                    <div className="text-sm text-gray-500">Cliente</div>
                                                    <div className="font-medium">{selectedProject.client}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías Utilizadas</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
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
                                                className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full"
                                            >
                                                <ExternalLinkIcon className="w-5 h-5" />
                                                <span>Ver Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
