import { ProjectsGrid } from "../components/ProjectsGrid";

export const ProjectsPage = () => {

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Explora algunos de nuestros trabajos más destacados.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </div>
  )
}