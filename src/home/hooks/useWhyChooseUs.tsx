import { useState } from "react"
import type { WhyChooseUsType } from "../types/service.types"

export const useWhyChooseUs = () => {
    const [reasons] = useState<WhyChooseUsType[]>([
        {
            title: "Pasión por crear",
            description: "Nos encanta convertir retos en productos digitales que sorprenden.",
        },
        {
            title: "Tecnología de Vanguardia",
            description: "Utilizamos las últimas tecnologías y mejores prácticas del desarrollo de software.",
        },
        {
            title: "Soporte Personalizado",
            description: "Acompañamiento completo desde la idea inicial hasta el lanzamiento y más allá.",
        },
        {
            title: "Resultados Medibles",
            description: "Nos enfocamos en crear soluciones que generen un impacto real en tu negocio.",
        },
    ]);

    return {
        data_info: {
            reasons
        }
    }
}
