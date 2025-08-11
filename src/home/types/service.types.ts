import * as LucideIcon from "lucide-react";

export type ServiceType = {
    title: string;
    description: string;
    iconName: keyof typeof LucideIcon;
}