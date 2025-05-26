export interface SeguridadCategoria {
    id: number;
    categoria: string;
    created_at: string;
    updated_at: string;
    seguridad_coleccions: SeguridadColeccion[];
  }
  
  export interface SeguridadColeccion {
    id: number;
    nombre_coleccion: string;
    seguridad_categoria_id: number;
    created_at: string;
    updated_at: string;
    seguridad_archivos: SeguridadArchivo[];
  }
  
  export interface SeguridadArchivo {
    id: number;
    nombre_archivo: string;
    documento: string;
    seguridad_coleccion_id: number;
    created_at: string;
    updated_at: string;
  }
  