export interface SubmenuItem {
    path: string;
    text: string;
}

export interface NavItem {
    path: string;
    text: string;
    submenus?: SubmenuItem[];
}