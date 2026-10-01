import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-anta text-xl font-bold text-white">ZENKAISOFT</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
            Desarrollo de software a medida, aplicaciones web y móviles para empresas en Colombia.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-white">Servicios</h2>
          <nav className="mt-4 flex flex-col gap-2 text-sm" aria-label="Servicios en el pie de página">
            <Link to="/desarrollo-software-a-medida-colombia" className="hover:text-red-400">Software a medida</Link>
            <Link to="/desarrollo-aplicaciones-web" className="hover:text-red-400">Aplicaciones web</Link>
            <Link to="/desarrollo-aplicaciones-moviles" className="hover:text-red-400">Aplicaciones móviles</Link>
          </nav>
        </div>
        <div>
          <h2 className="font-bold text-white">Contacto</h2>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href="mailto:zenkaisoft.col@gmail.com" className="hover:text-red-400">zenkaisoft.col@gmail.com</a>
            <Link to="/proyectos" className="hover:text-red-400">Proyectos</Link>
            <Link to="/quienes-somos" className="hover:text-red-400">Quiénes somos</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Zenkaisoft. Todos los derechos reservados.
      </div>
    </footer>
  )
}
