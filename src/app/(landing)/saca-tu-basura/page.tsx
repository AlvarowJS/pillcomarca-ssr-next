import { Metadata } from 'next';
import { ListReciclaje } from '@/components/reciclaje/ListReciclaje';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Saca Tu Basura | Municipalidad Distrital de Pillco Marca',
  description: 'Conoce los días y tipos de residuos que puedes sacar en Pillco Marca. ¡Juntos mantenemos limpio el distrito!',
  keywords: [
    'Reciclaje Pillco Marca', 'Saca tu basura', 'Horario de residuos',
    'Municipalidad Distrital de Pillco Marca', 'Residuos sólidos Huánuco',
    'Recolección de basura Pillco Marca', 'Residuos reciclables', 'Agenda ambiental',
    'Tacho verde', 'Tacho marrón', 'Tacho negro', 'Educación ambiental', 'Eco Pillco'
  ],
};

export default function SacaTuBasuraPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* COMPONENTE DE RECICLAJE */}
        <div>
          <ListReciclaje />
        </div>

        {/* DIVISIÓN */}
        <div className="border-t border-gray-300 my-8 w-full" />

        {/* COLUMNA DOBLE CENTRADA Y CONTROLADA */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* COLUMNA 1 - TEXTO */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              ¡Saca tu basura a tiempo!
            </h1>
            <p className="text-gray-600 text-justify text-base md:text-lg">
              Conoce qué tipo de residuos sacar según el día. Colabora con la limpieza de nuestro distrito respetando el horario: <strong>6:00 am - 12:00 pm</strong>.
            </p>
          </div>

          {/* COLUMNA 2 - IMAGEN Y TEXTO */}
          <div className="text-center space-y-4">
            <Image
              src="https://cdn.www.gob.pe/uploads/document/file/8307149/1202002-prohibido.png"
              alt="Reciclaje en Pillco Marca"
              width={200}
              height={200}
              className="mx-auto object-contain"
            />
            <h3 className="font-semibold text-red-700">¡Separa correctamente!</h3>
            <p className="text-sm text-gray-600">
              Cada residuo en su lugar contribuye a un Pillco Marca más limpio y sostenible.
            </p>
          </div>
        </div>
        
      </div>
    </main>
  );
}
