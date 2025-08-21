import { ProjectsGrid } from "../components/ProjectsGrid";

export const ProjectsPage = () => {

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explora algunos de nuestros trabajos más destacados.
          </p>

          {/* Filter Buttons */}
        </div>

        <ProjectsGrid />
      </div>
    </div>
  )
}