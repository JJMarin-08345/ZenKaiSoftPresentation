export interface ProjectType {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    image: string;
    technologies: string[];
    category: string;
    demoUrl?: string;   // opcional por si no todos tienen demo
    githubUrl?: string; // opcional por si no todos tienen repo público
    date: string;       // podría tiparse como Date si lo usas así
    client?: string;
    duration?: string;
    teamSize?: number;
    features?: string[];
    challenges?: string[];
    results?: string[];
}
