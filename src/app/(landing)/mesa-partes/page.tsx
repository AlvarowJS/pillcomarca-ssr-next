import { Metadata } from "next";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Mesa de Partes | Municipalidad Distrital de Pillco Marca",
  description:
    "Solicitar y realizar seguimiento a tus trámites de la Municipalidad Distrital de Pillco Marca",
  keywords: [
    "Mesa de partes virtual", "Mesa de partes", "Seguimiento de trámites",
    "Municipalidad Distrital de Pillco Marca", "Pillco Marca", "Trámites",
    "Documentos", "Servicios al ciudadano", "Gestión", "Trámites",
    "Envío de documentos", "Plataforma de trámites",
    "Trámites municipales", "Expedientes"
  ],
};

export default function MesaPartesPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 sm:p-10 space-y-8 bg-white rounded-xl shadow">
      {/* Título y descripción */}
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Mesa de Partes Virtual
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          A través de esta plataforma podrás enviar documentos y realizar seguimiento a tus trámites sin necesidad de acudir presencialmente.
          El servicio está disponible las 24 horas del día, todos los días del año.
        </p>
      </section>

      {/* Botón de acceso */}
      <section>
        <a
          href="https://facilita.gob.pe/t/5689"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Ir a la Mesa de Partes Virtual
          <FaExternalLinkAlt className="w-4 h-4" />
        </a>
        <p className="mt-2 text-sm text-gray-500">
          Serás redirigido al portal oficial de Facilita.
        </p>
      </section>
    </main>
  );
}
