import { DirectorioItem } from '@/interfaces/directorio.interface';
import Image from 'next/image';
import React from 'react';

interface Props {
    directorio: DirectorioItem;
}

export const ListDirectorioItem = ({ directorio }: Props) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-42 h-64 rounded-full overflow-hidden border border-gray-200 mb-4 bg-gray-100">
                <Image
                    src={`https://sv-yptplguxwm.cloud.elastika.pe/storage/directorio/${directorio.foto}`}
                    alt={`${directorio.nombres} ${directorio.apellidos}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
                {directorio.nombres} {directorio.apellidos}
            </h3>
            <p className="text-sm text-gray-600 italic">{directorio.cargo}</p>
            <p className="text-sm text-gray-500">{directorio.dependencia}</p>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>
                    Email: <a href={`mailto:${directorio.correo}`} className="text-blue-600 underline">{directorio.correo}</a>
                </p>
                <p>
                    Celular: <a href={`tel:${directorio.cel}`} className="text-blue-600 underline">{directorio.cel}</a>
                </p>
            </div>
        </div>
    );
};
