import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FUT | Municipalidad Distrital de Pillco Marca',
  description: 'FUT (formulario unico de tramite) que brinda la Municipalidad Distrital de Pillco Marca',
  keywords: ['FUT', 'Mesa de partes', "Formulario", "Tramite", "Solicito", "DNI", "Solicitud", "Firma",
    'Seguimiento de tramites', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Tramites', 'Documentos', 'Servicios al ciudadano',
    'Seguridad Ciudadana'
  ],
};

export default function FutPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

        <div className="col-span-1 text-left md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-500 mb-4">
            Formulario Único de Trámite (FUT)
          </h2>
          <p>
            El Formulario Único de Trámite sirve para solicitar los trámites disponibles que ofrece la Municipalidad Distrital de Pillco Marca.
            <br />
            Una vez impreso debe rellenar y escanear el FUT junto a los requisitos que debe presentar a la
            <a href="/mesa-partes" className="text-blue-500 underline ml-1">mesa de partes virtual</a> o acercarse a la mesa de partes física en la Municipalidad Distrital de Pillco Marca.
          </p>
        </div>

        <div className="col-span-1 md:col-span-3">
          <iframe
            src="/documents/FUT.pdf"
            className="w-full h-[700px] rounded border border-gray-500 shadow"
            title="Formulario Único de Trámite"
          ></iframe>
        </div>

      </div>
    </div>
  );
}