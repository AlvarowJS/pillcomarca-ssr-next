import { ListVisita } from "@/components/visitas/ListVisitas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Registro de Visitas | Municipalidad Distrital de Pillco Marca',
  description: 'Consulta el registro de personas que ingresaron a la Municipalidad Distrital de Pillco Marca y las áreas que visitaron.',
  keywords: [
    'Registro de visitas', 'Control de ingreso',
    'Personas que visitaron la municipalidad', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Transparencia institucional', 'Áreas visitadas',
    'Historial de visitas', 'Acceso a oficinas municipales', 'Gestión de visitantes',
    'Ingreso de ciudadanos', 'Visitas a la municipalidad', 'Seguimiento de visitas',
    'Gobierno local Huánuco', 'Registro de atención al ciudadano'
  ],
};

export default function RegistroVisitaPage() {
  return (
    <main className="max-w-7xl mx-auto p-6 bg-white shadow-md mt-4">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Registro de visitas</h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Consulta el registro actualizado de personas que ingresaron a la Municipalidad Distrital de Pillco Marca,
          con detalles sobre las áreas visitadas y horarios de ingreso y salida.
        </p>
      </header>

      <section>
        <ListVisita />
      </section>

      <footer className="mt-10 text-center text-sm text-gray-400">
        Municipalidad Distrital de Pillco Marca &copy; {new Date().getFullYear()}
      </footer>
    </main>
  );
}
