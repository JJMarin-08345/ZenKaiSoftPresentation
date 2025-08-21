import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ZenkaiLogo from "/src/assets/images/ZenkaiSoftLogo.png";
import type { NavItemType } from "app/types/navbar.types";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const location = useLocation()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }

    const isActive = (path: string) => {
        return location.pathname === path
    }

    const navItems: NavItemType[] = [
        { name: "Inicio", path: "/" },
        // {
        //     name: "Quiénes Somos",
        //     path: "/quienes-somos",
        //     dropdown: [
        //         { name: "Nuestra Historia", path: "/quienes-somos/historia" },
        //         { name: "Misión y Visión", path: "/quienes-somos/mision-vision" },
        //         { name: "Equipo", path: "/quienes-somos/equipo" },
        //     ],
        // },
        {
            name: "Servicios",
            path: "/servicios",
            dropdown: [
                { name: "Desarrollo Web", path: "/servicios/desarrollo-web" },
                { name: "Aplicaciones Móviles", path: "/servicios/apps-moviles" },
            ],
        },
        { name: "Proyectos", path: "/proyectos" },
        { name: "Blog", path: "/blog" },
        // { name: "Contacto", path: "/contacto" },
    ]

    return (
        <>
            <nav className="bg-white/90 shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center">
                                <img src={ZenkaiLogo} alt="Zenkai Soft" className="h-10 w-auto" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <div key={item.name} className="relative group">
                                        {item.dropdown ? (
                                            <div className="relative">
                                                <button
                                                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                                                        ? "text-red-500 bg-red-50"
                                                        : "text-gray-700 hover:text-red-500 hover:bg-gray-50"
                                                        }`}
                                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                                    onMouseLeave={() => setActiveDropdown(null)}
                                                >
                                                    {item.name}
                                                    <ChevronDown className="ml-1 h-4 w-4" />
                                                </button>

                                                {/* Dropdown Menu */}
                                                <div
                                                    className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === item.name
                                                        ? "opacity-100 visible transform translate-y-0"
                                                        : "opacity-0 invisible transform -translate-y-2"
                                                        }`}
                                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                                    onMouseLeave={() => setActiveDropdown(null)}
                                                >
                                                    <div className="py-1">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.path}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                                                    ? "text-red-500 bg-red-50"
                                                    : "text-gray-700 hover:text-red-500 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                to="/contacto"
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                Solicitar Cotización
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-200"
                            >
                                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path)
                                                ? "text-red-500 bg-red-100"
                                                : "text-gray-700 hover:text-red-500 hover:bg-white"
                                                }`}
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {/* Mobile Dropdown */}
                                        <div
                                            className={`transition-all duration-200 ${activeDropdown === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                                                }`}
                                        >
                                            <div className="pl-6 space-y-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-red-500 hover:bg-white transition-colors duration-200"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path) ? "text-red-500 bg-red-100" : "text-gray-700 hover:text-red-500 hover:bg-white"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile CTA Button */}
                        <div className="pt-4 pb-2">
                            <Link
                                to="/contacto"
                                className="block w-full text-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-base font-medium transition-colors duration-200 shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Solicitar Cotización
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Outlet /> */}
        </>
    )
}