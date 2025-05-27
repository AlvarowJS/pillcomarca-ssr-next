import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Agenda Institucional | Municipalidad Distrital de Pillco Marca',
  description: 'Consulta la agenda institucional de la Municipalidad Distrital de Pillco Marca.',
  keywords: ['Agenda institucional', 'Calendario municipal', 'Fechas festivas',
    'Eventos oficiales', 'Municipalidad Distrital de Pillco Marca', 'Pillco Marca',
    'Actividades municipales', 'Días festivos en Huánuco', 'Cronograma institucional',
    'Planificación municipal', 'Calendario de actividades', 'Eventos en Pillco Marca',
    'Agenda pública', 'Municipalidad de Huánuco', 'Fechas importantes del distrito'
  ],
};

export default function AgendaInstitucionalPage() {
  return (
    <div>
        <h2 className="text-gray-900 text-4xl font-bold my-4">
          Agenda Institucional
        </h2>
      <div className="mb-4 mx-4">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=municipalidaddepillcomarca2023%40gmail.com&ctz=America%2FLima"
          width="100%"
          height="800"
          // frameborder="0"
          // scrolling="no"
          style={{ minHeight: 0 }}
        ></iframe>
      </div>
    </div>
  );
}