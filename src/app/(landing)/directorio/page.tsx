import { ListDirectorio } from "@/components/directorio/ListDirectorio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Directorio | Municipalidad Distrital de Pillco Marca',
  description: 'Muestra el directorio municipal de la Municipalidad Distrital de Pillco Marca',
  keywords: ['Servicios', 'Mesa de partes',
    'Seguimiento de tramites', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Contacto', 'Información institucional', 'Funcionarios públicos',
    'Áreas municipales', "Telefono", "Oficina", "Areas", "Funcionarios"
  ],
};

export default function DirectorioPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Directorio Institucional</h2>

      <ListDirectorio

      />
    </div>
  );
}