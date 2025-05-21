import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Acceso a la Información Pública | Municipalidad Distrital de Pillco Marca',
  description: 'Solicita información pública de la Municipalidad de Pillco Marca conforme a la Ley N.º 27806 de Transparencia y Acceso a la Información.',
  keywords: [ 'Acceso a la información', 'Transparencia municipal', 'Ley 27806',
    'Solicitud de información pública', 'Municipalidad Distrital de Pillco Marca', 'Pillco Marca',
    'Derecho a la información', 'Formulario de acceso a la información', 'Transparencia y acceso',
    'Información pública del Estado', 'Obligación de transparencia', 'Acceso ciudadano',
    'Municipalidad de Huánuco', 'Datos públicos', 'Gestión transparente'
  ],
};

export default function AccesoInformacionPage() {
  return (
        <div className="p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        <div className="col-span-1 text-left md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-500 mb-4">
            Acceso a la Información
          </h2>
          <p>
            Puedes acceder a la información de las instituciones del Estado según el principio de transparencia y el Texto Único Ordenado de la
            <a href="https://www.gob.pe/institucion/congreso-de-la-republica/normas-legales/118374-27806" className="text-blue-500 underline ml-1">Ley N° 27806, Ley de Transparencia y Acceso a la Información pública. </a>
          </p>
          <p>
           Las entidades públicas tienen hasta 10 días hábiles para responderte. Si no pudieran atenderte en ese tiempo por casos excepcionales (como información difícil de conseguir), 
           tienen 2 días hábiles contados desde que presentaste tu solicitud para decirte la fecha en que te puedes acercar a recoger la información y darte los motivos por los que no pueden atenderte dentro del plazo. 
          </p>
          <p> 
            <strong>Recuerde enviar el formato de su solicitud a mesa de partes de forma presencial o digital.</strong>
          </p>
            <br />
            <a
              href="/documents/Solicitud.pdf"
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
            src="/documents/Solicitud.pdf"
            className="w-full h-[500px] rounded border border-gray-500 shadow"
            title="Formulario Único de Trámite"
          ></iframe>
        </div>

      </div>
    </div>
  );
}