export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ZENKAI SOFT. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition">Zen</a>
          <a href="#" className="hover:text-white transition">Kai</a>
          <a href="#" className="hover:text-white transition">Soft</a>
        </div>
      </div>
    </footer>
  )
}
