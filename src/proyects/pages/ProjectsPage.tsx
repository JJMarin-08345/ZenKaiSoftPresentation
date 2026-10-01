import { ProjectsGrid } from "../components/ProjectsGrid";

export const ProjectsPage = () => {

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="mb-3 text-sm font-bold uppercase text-red-500">Portafolio de software</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos de software y aplicaciones</h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Conoce soluciones reales desarrolladas para salud, restaurantes, industria alimentaria, inventarios y operaciones empresariales.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </div>
  )
}
