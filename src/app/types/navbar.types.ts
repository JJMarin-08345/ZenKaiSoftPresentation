type NavType = {
    name: string;
    path: string;
}

export type NavItemType = NavType & {
    dropdown?: NavType[];
}