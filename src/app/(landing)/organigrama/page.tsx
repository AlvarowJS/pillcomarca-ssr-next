import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Organigrama Institucional | Municipalidad Distrital de Pillco Marca',
  description: 'Consulta el organigrama estructural de la Municipalidad Distrital de Pillco Marca y conoce cómo se organiza la gestión pública local.',
  keywords: [ 'Organigrama institucional', 'Estructura organizacional',
    'Municipalidad Distrital de Pillco Marca', 'Áreas municipales', 'Gestión pública',
    'Organización municipal', 'Gobierno local', 'Jerarquía institucional',
    'Funciones municipales', 'Direcciones y oficinas', 'Pillco Marca', 'División de funciones',
    'Autoridades municipales', 'Mapa organizacional',"Organigramas"
  ],
};

export default function OrganigramaPage() {
  return (
        <div className="p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        <div className="col-span-1 text-left md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-500 mb-4">
            Organigrama Institucional
          </h2>
          <p >
            El organigrama vigente es de 2013, el cual se encuentra en el ROF y lo puede encontrar en los
            <a href="/documentos" className="text-blue-500 underline ml-1">documentos de gestión</a> de la página.
          </p>
          <p >
            Este documento permite visualizar la estructura jerárquica de la Municipalidad, incluyendo las áreas y funciones específicas asignadas a cada unidad.
          </p>
          <br />
            <a
              href="/documents/Organigrama.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition"
            >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
            </svg>
              Descargar
            </a>
        </div>

        <div className="col-span-1 md:col-span-3">
          <iframe
            src="/documents/Organigrama.pdf"
            className="w-full h-[800px] rounded border border-gray-500 shadow"
            title="Organigrama"
          ></iframe>
        </div>

      </div>
    </div>
  );
}