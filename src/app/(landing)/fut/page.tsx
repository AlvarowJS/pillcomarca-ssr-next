import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FUT | Municipalidad Distrital de Pillco Marca',
  description: 'FUT (formulario unico de tramite) que brinda la Municipalidad Distrital de Pillco Marca',
  keywords: ['FUT', 'Mesa de partes',"Formulario", "Tramite","Solicito","DNI","Solicitud","Firma",
    'Seguimiento de tramites', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Tramites', 'Documentos', 'Servicios al ciudadano',
    'Seguridad Ciudadana'
  ],
};

export default function FutPage() {
  return (
    <div>
      <h1>FUT</h1>
    </div>
  );
}