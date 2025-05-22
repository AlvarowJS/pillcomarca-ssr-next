export interface ArchivoAdjunto {
    id: number;
    nombre: string;
    archivo: string;
    convocatoria_id: number;
    created_at: string;
    updated_at: string;
}

export interface Convocatoria {
    id: number;
    nombre: string;
    estado: string;
    created_at: string;
    updated_at: string;
    conv_base: ArchivoAdjunto[];
    result_cv: ArchivoAdjunto[];
    resultado: ArchivoAdjunto[];
}
