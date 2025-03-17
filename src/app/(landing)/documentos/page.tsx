import { DocumentGrid } from "@/components";
import { Gestion } from "@/interfaces";
const getGestionDocuments = async (): Promise<Gestion[]> => {
    const response = await fetch(`https://sv-yptplguxwm.cloud.elastika.pe/api/v1/gestion`);
    const data: Gestion[] = await response.json();

    return data.map(gestion => ({
        id: gestion.id,
        nombre: gestion.nombre,
        gestiondetalle: gestion.gestiondetalle
    }));

}


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