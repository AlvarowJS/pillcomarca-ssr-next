import { Alcalde } from '@/interfaces/alcalde.interface';
import Image from 'next/image';
import React from 'react';

interface Props {
  alcalde: Alcalde;
}

export const ListAlcaldeItem = ({ alcalde }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-42 h-64 rounded-full overflow-hidden border border-gray-200 mb-4 bg-gray-100">
        <Image
          src={`https://sv-yptplguxwm.cloud.elastika.pe/storage/directorio/${alcalde.foto}`}
          alt={`${alcalde.nombres} ${alcalde.apellidos}`}
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        {alcalde.nombres} {alcalde.apellidos}
      </h3>
      <p className="text-sm text-gray-600 italic">{alcalde.cargo}</p>
      <p className="text-sm text-gray-500">{alcalde.dependencia}</p>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p>
          Email:{' '}
          <span className="text-blue-600 underline">
            {alcalde.correo !== 'sin correo' ? (
              <a href={`mailto:${alcalde.correo}`}>{alcalde.correo}</a>
            ) : (
              'No disponible'
            )}
          </span>
        </p>
        <p>
          Celular:{' '}
          <a href={`tel:${alcalde.cel}`} className="text-blue-600 underline">
            {alcalde.cel}
          </a>
        </p>
      </div>
    </div>
  );
};
