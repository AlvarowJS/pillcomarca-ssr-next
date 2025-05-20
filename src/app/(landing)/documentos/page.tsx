import { getDocumentosGestion } from "@/app/lib/api/documentos";
import { DocumentGrid } from "@/components";
import { Gestion } from "@/interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Documentos | Municipalidad Distrital de Pillco Marca',
    description: 'Documentos que brinda la Municipalidad Distrital de Pillco Marca',
    keywords: ['Documentos', 'POI', 'MAPRO', 'Clasificador de cargos', 'TUPA', 'CAP',
        'Organigrama', 'MOF', 'RIS', 'RIT', 'PAP', 'RIC', 'ROF', 'Documentos', 'Servicios al ciudadano',
        'Seguridad Ciudadana', 'plan', 'mejora de la gestion', 'riesgo de desastres'
    ],
};
export default async function DocumentosPage() {
    const gestions = await getDocumentosGestion();

    return (
        <aside className="text-center mt-4">
            <h2 className="text-gray-900 text-4xl font-bold">
                Documentos de Gestión
            </h2>
            <p>Herramientas de gestión entre otros.</p>
            <DocumentGrid
                gestions={gestions}
            />
        </aside>
    );
}