import { Regidor } from '@/interfaces/regidor.interface';
import Image from 'next/image';
import React from 'react';

interface Props {
  regidor: Regidor;
}

export const ListRegidorItem = ({ regidor }: Props) => {
  console.log('Regidor:', regidor);
    return (

    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-42 h-64 rounded-full overflow-hidden border border-gray-200 mb-4 bg-gray-100">
        <Image
          src={`https://sv-yptplguxwm.cloud.elastika.pe/storage/directorio/${regidor.foto}`}
          alt={`${regidor.nombres} ${regidor.apellidos}`}
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        {regidor.nombres} {regidor.apellidos}
      </h3>
      <p className="text-sm text-gray-600 italic">{regidor.cargo}</p>
      <p className="text-sm text-gray-500">{regidor.dependencia}</p>

      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p>
          Email:{' '}
          <a href={`mailto:${regidor.correo}`} className="text-blue-600 underline">
            {regidor.correo}
          </a>
        </p>
        <p>
          Celular:{' '}
          <a href={`tel:${regidor.cel}`} className="text-blue-600 underline">
            {regidor.cel}
          </a>
        </p>
      </div>
    </div>
  );
};
