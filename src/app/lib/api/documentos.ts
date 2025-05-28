import { Gestion } from '@/interfaces';

export const getDocumentosGestion = async (): Promise<Gestion[]> => {
    const response = await fetch(`https://sv-yptplguxwm.cloud.elastika.pe/api/v1/gestion`, {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error("Error al obtener las gestiones");
    }

    const data: Gestion[] = await response.json();

    return data.map(gestion => ({
        id: gestion.id,
        nombre: gestion.nombre,
        gestiondetalle: gestion.gestiondetalle
    }));
}