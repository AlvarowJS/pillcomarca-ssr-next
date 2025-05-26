import { ListNoticias } from "@/components/noticias/ListNoticias";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Noticias | Municipalidad Distrital de Pillco Marca',
  description: 'Las noticias de los eventos y acciones que realiza Municipalidad Distrital de Pillco Marca',
  keywords: ['Noticias', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Ing. Diana Plejo', 'Campaña', 'Beneficiarios',
    'Seguridad Ciudadana', 'Donacion', 'limpieza', 'Juramentacion', 'izamiento'
  ],
};

export default function NoticiasPage() {
  return (
    <div>
      <h2 className="text-gray-900 text-4xl font-bold mt-4">
        Noticias
      </h2>
      <div>
        <ListNoticias />
      </div>
      <h2>
        Mas noticias
      </h2>
    </div>
  );
}