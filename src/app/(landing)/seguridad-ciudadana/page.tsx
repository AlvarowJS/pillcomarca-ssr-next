import { ListSeguridad } from "@/components/seguridad/ListSeguridad";
import { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Seguridad Ciudadana | Municipalidad Distrital de Pillco Marca",
  description:
    "Página que brinda toda la información y número de contacto de Seguridad Ciudadana de la Municipalidad Distrital de Pillco Marca",
  keywords: [
    "Serenazgo", "Número", "Matar", "Robo",
    "CODISEC", "Municipalidad Distrital de Pillco Marca",
    "Pillco Marca", "Ratero", "Asesino", "Llamar",
    "Seguridad Ciudadana", "Allanamiento", "Seguridad",
    "Número de Sereno", "Llamar Serenazgo"
  ],
};

export default function SeguridadCiudadanaPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 sm:p-10 space-y-8 bg-white shadow">
      {/* Título principal */}
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Seguridad Ciudadana
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Aquí encontrarás toda la información y números de contacto relacionados con Seguridad Ciudadana de la Municipalidad Distrital de Pillco Marca.
        </p>
      </section>

      {/* Contacto por WhatsApp */}
      <section className="flex items-center gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
        <FaWhatsapp className="text-green-600 text-2xl" />
        <div>
          <p className="text-sm text-gray-700">Número de contacto inmediato:</p>
          <a
            href="https://wa.me/51900659235"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 text-lg font-semibold hover:underline"
          >
            900 659 235
          </a>
        </div>
      </section>

      {/* Mensaje adicional */}
      <p className="text-gray-700 text-sm sm:text-base">
        Si necesitas asistencia inmediata, no dudes en comunicarte con los números de contacto proporcionados. Estamos aquí para garantizar tu seguridad y bienestar.
      </p>

      {/* Listado de documentos o información */}
      <ListSeguridad />
    </main>
  );
}
