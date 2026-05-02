export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ZENKAISOFT. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition">zenkaisoft</a>
        </div>
      </div>
    </footer>
  )
}
