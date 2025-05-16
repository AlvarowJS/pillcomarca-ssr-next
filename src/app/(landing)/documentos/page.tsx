import { DocumentGrid } from "@/components";
import { Gestion } from "@/interfaces";
import { Metadata } from "next";
const getGestionDocuments = async (): Promise<Gestion[]> => {
    const response = await fetch(`https://sv-yptplguxwm.cloud.elastika.pe/api/v1/gestion`);
    const data: Gestion[] = await response.json();

    return data.map(gestion => ({
        id: gestion.id,
        nombre: gestion.nombre,
        gestiondetalle: gestion.gestiondetalle
    }));

}

export const metadata: Metadata= {
    title: 'Documentos | Municipalidad Distrital de Pillco Marca',
    description: 'Documentos que brinda la Municipalidad Distrital de Pillco Marca',
    keywords: ['Documentos', 'POI', 'MAPRO', 'Clasificador de cargos', 'TUPA', 'CAP',
        'Organigrama', 'MOF', 'RIS', 'RIT', 'PAP', 'RIC', 'ROF', 'Documentos', 'Servicios al ciudadano',
        'Seguridad Ciudadana','plan','mejora de la gestion','riesgo de desastres'
    ],
};
export default async function DocumentosPage() {
        const gestions = await getGestionDocuments();

return (
    <div>
        <DocumentGrid
            gestions={gestions}
        />
    </div>
);
}