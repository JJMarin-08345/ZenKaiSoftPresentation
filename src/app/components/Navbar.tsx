import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import ZenkaiLogo from "/src/assets/images/ZenkaiSoftLogo.png";
import type { NavItemType } from "app/types/navbar.types";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    const location = useLocation();

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
        { name: "Proyectos", path: "/proyectos" },
        { name: "Quiénes somos", path: "/quienes-somos" },
    ];

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <nav className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-xs shadow-lg sticky top-0 z-50 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center">
                                <img src={ZenkaiLogo} alt="Zenkai Soft" className="h-10 bg-white rounded-md px-2 w-auto" />
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
                                                        ? "text-red-500 bg-red-50 dark:text-red-400 dark:bg-gray-800"
                                                        : "text-gray-700 hover:text-red-500 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-red-400"
                                                        }`}
                                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                                    onMouseLeave={() => setActiveDropdown(null)}
                                                >
                                                    {item.name}
                                                    <ChevronDown className="ml-1 h-4 w-4" />
                                                </button>

                                                {/* Dropdown Menu */}
                                                <div
                                                    className={`absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === item.name
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
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 
                                                                dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-red-400 transition-colors duration-200"
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
                                                    ? "text-red-500 bg-red-50 dark:text-red-400 dark:bg-gray-800"
                                                    : "text-gray-700 hover:text-red-500 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-red-400"
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cambiar modo (claro - oscuro) */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="flex cursor-pointer items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                                {darkMode ? "Modo Claro" : "Modo Oscuro"}
                            </button>
                        </div>


                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-100"
                            >
                                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden bg-white transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 dark:bg-gray-950/90 border-t">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path)
                                                ? "text-red-500 bg-red-100 dark:text-red-400 dark:bg-gray-800"
                                                : "text-gray-700 active:text-red-500 active:bg-white dark:text-gray-100 dark:active:text-red-400 dark:active:bg-gray-800 transition-colors duration-200"
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
                                                        className="block px-3 py-2 rounded-md text-sm text-gray-600 active:text-red-500 active:bg-white
                                                        dark:text-gray-200 dark:active:text-red-400 dark:active:bg-gray-800 transition-colors duration-200"
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
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path) ?
                                            "text-red-500 bg-red-50 dark:text-red-400 dark:bg-gray-800"
                                            : "text-gray-700 hover:text-red-500 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-red-400"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile Cambiar Modo (claro - oscuro) Button */}
                        <div className="pt-4 pb-2">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="flex w-full justify-center gap-2 bg-red-500 active:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md active:shadow-lg"
                            >
                                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                                {darkMode ? "Modo Claro" : "Modo Oscuro"}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}