"use client"

import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Home, ArrowLeft } from "lucide-react"

export const Error404 = () => {
    const navigate = useNavigate()
    const [isAnimating, setIsAnimating] = useState(false)

    // Animación del número 404
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 500)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    const handleGoHome = () => {
        navigate("/")
    }

    const handleGoBack = () => {
        window.history.back()
    }

    const frases404 = useMemo(() => [
        "Parece que esta página decidió irse a otra dimensión digital.",
        "Te perdiste en el mapa de internet, pero tranquilo: siempre hay un camino de regreso.",
        "Esta página se perdió en la órbita. Vuelve a la base antes de quedarte sin oxígeno.",
        "Buscamos por todos lados, pero aquí no hay nada que mostrar.",
        "Ups, parece que esta ruta no fue compilada correctamente.",
        "Archivo no encontrado… quizá nunca fue guardado en el disco duro del universo.",
        "Esta página está explorando el ciberespacio… y aún no regresa.",
        "Contenido inaccesible… como un nivel secreto bloqueado en tu videojuego favorito.",
        "Cargamos, cargamos… pero la página nunca apareció.",
        "404: La página que buscas decidió tomarse un descanso.",
        "El bot encargado de esta página se quedó dormido. Disculpa el inconveniente.",
        "Parece que a este puzzle de internet le falta una pieza.",
        "La página que buscas está más allá de la galaxia de este sitio web.",
        "Un hechizo la hizo desaparecer. “Expelliarmus página”.",
        "Error detectado: esta página fue devorada por un bug."
    ], []);
    
    const fraseAleatoria = useMemo(() => frases404[Math.floor(Math.random() * frases404.length)], []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-red-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-red-600 rounded-full opacity-5 animate-pulse delay-2000"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-300 rounded-full opacity-10 animate-pulse delay-500"></div>

                {/* Líneas decorativas */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20"></div>
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-15"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Número 404 animado */}
                    <div className="mb-8">
                        <h1
                            className={`text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 leading-none transition-all duration-500 ${isAnimating ? "scale-110 rotate-2" : "scale-100 rotate-0"
                                }`}
                            style={{
                                textShadow: "0 0 50px rgba(239, 68, 68, 0.3)",
                            }}
                        >
                            404
                        </h1>
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500 blur-xl opacity-20 animate-pulse"></div>
                            <p className="relative text-2xl md:text-3xl font-bold text-gray-300 mb-4">¡Oops! Página no encontrada</p>
                        </div>
                    </div>

                    {/* Mensaje principal */}
                    <div className="mb-12 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                            {fraseAleatoria}
                        </p>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex flex-col items-center sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={handleGoHome}
                            className="flex cursor-pointer items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                        >
                            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            <span>Ir al Inicio</span>
                        </button>

                        <button
                            onClick={handleGoBack}
                            className="flex cursor-pointer items-center justify-center space-x-2 border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                            <span>Volver Atrás</span>
                        </button>
                    </div>

                    {/* Mensaje motivacional */}
                    <div className="mt-12">
                        <p className="text-gray-500 italic">
                            "En ZENKAI SOFT, convertimos los errores en oportunidades de mejora."
                        </p>
                    </div>
                </div>
            </div>

            {/* Partículas flotantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-500 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite alternate`,
                        }}
                    />
                ))}
            </div>
            <style>
                {`
                    @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    100% { transform: translateY(-20px) rotate(180deg); }
                    }
                `}
            </style>
        </div>
    )
}