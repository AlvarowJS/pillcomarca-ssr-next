
export interface Gestion {
    id: number;
    nombre: string;    
    gestiondetalle: GestionDetalle[];
}
export interface GestionDetalle {
    id: number;
    nombre: string;
    link: string;
    gestion_id: number;    
}
