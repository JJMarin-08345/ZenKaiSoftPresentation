import { useState } from "react";
import { useProjectsGrid } from "../hooks/useProjectsGrid";
import { EyeIcon, GithubIcon, InfoIcon } from "lucide-react";
import type { ProjectType } from "../types/project.types";
import { ModalProject } from "./ModalProject";

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
        setSelectedProject(project);
    }

    const closeModal = () => {
        setSelectedProject(null);
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        className={`px-6 py-3 cursor-pointer rounded-full font-medium transition-all duration-300 ${filter === category.id
                            ? "bg-red-500 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-red-50 active:bg-red-50 hover:text-red-500 active:text-red-500 shadow-md dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-700 dark:hover:text-red-500 dark:active:text-red-500"
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
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl active:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2 group"
                    >
                        {/* Project Image */}
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-48 object-contain p-2 group-hover:scale-110 group-active:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/15 group-hover:bg-opacity-40 group-active:bg-opacity-40 transition-all duration-300 ">
                                <button
                                    onClick={() => openModal(project)}
                                    className="opacity-0 absolute bottom-2 right-2 group-hover:opacity-100 group-active:opacity-100 text-white p-1 bg-red-500 hover:bg-red-600 active:bg-red-600 rounded-full transition-all duration-300 transform scale-75 group-hover:scale-100 items-center"
                                >
                                    <InfoIcon size={25} />
                                </button>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {project.category === "web" ? "Web" : project.category === "mobile" ? "Móvil" : "Aplicación de escritorio"}
                                </span>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-slate-200 mb-2 dark:group-hover:text-red-400 group-hover:text-red-500 dark:active:text-red-400 active:text-red-500 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400 mb-4 line-clamp-2">{project.shortDescription}</p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 5).map((tech, index) => (
                                    <span key={index} className="bg-gray-100 dark:bg-black/40 text-gray-700 dark:text-slate-500 px-2 py-1 rounded text-sm">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 5 && (
                                    <span className="bg-gray-100 dark:bg-black/40 text-gray-700 dark:text-slate-500 px-2 py-1 rounded text-sm">
                                        +{project.technologies.length - 5}
                                    </span>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => openModal(project)}
                                    className="flex items-center space-x-2 text-red-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-white active:text-red-600 dark:active:text-white font-medium transition-colors duration-300"
                                >
                                    <EyeIcon className="w-4 h-4" />
                                    <span>Ver Detalles</span>
                                </button>
                                <div className="flex space-x-2">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-gray-500 hover:text-red-500 active:text-red-500 transition-colors duration-300"
                                        >
                                            <GithubIcon className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <ModalProject selectedProject={selectedProject} onCloseModal={closeModal} />
            )}
        </>
    )
}
