import { ListConvocatoria } from "@/components/convocatoria/ListConvocatoria";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Convocatoria | Municipalidad Distrital de Pillco Marca',
  description: 'Convocatorias de la Municipalidad Distrital de Pillco Marca',
  keywords: ['Convocatoria', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Convocatorias', 'Anexos', 'resultados convocatorias mmunicipalidad de pilcomarca',
    'CAS', 'resolucion', 'Bases'
  ],
};
export default function ConvocatoriaPage() {
  return (
    <div>
      <div className="px-3 my-6">
        <h2 className="text-gray-900 text-4xl font-bold mt-4">
          Convocatoria de trabajo</h2>
        <p>
          Esta sección presenta el listado completo de las convocatorias de trabajo emitidas por la Municipalidad Distrital de Pillco Marca, disponibles para la postulación del público en general.
        </p>
      </div>
      <ListConvocatoria />
    </div>
  );
}
