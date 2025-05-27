import { Normativa } from "@/components/normativas/Normativa";


export const metadata = {
 title: 'Documentos Normativos | Municipalidad Distrital de Pillco Marca',
 description: 'Documentos Normativos de la Municipalidad Distrital de Pillco Marca',
 keyofords: ['Normativas', 'Resoluciones', 'Acuerdos de consejo', 'Decretos', 'Documentos normativos',
   'Servicios al ciudadano', 'Seguridad Ciudadana', 'Pillco Marca'],
};
export default function NormativasPage() {

  return (
    <>
      <div className="mb-4 mx-4">
        <h2 className="text-gray-900 text-4xl font-bold mt-4">
          Documentos Normativos
        </h2>
        <p className="">
          Documentos normativos como resoluciones, acuerdos de consejo, decretos, entre otros.
        </p>
      </div>
      <Normativa />
    </>
  );
}