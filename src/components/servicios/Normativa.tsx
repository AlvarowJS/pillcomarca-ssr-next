'use client';
import { getNormativas } from '@/app/lib/api/normativa'
import { DocumentoNormativoResponse } from '@/interfaces'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaFile } from 'react-icons/fa';

export const Normativa = () => {
    const [data, setData] = useState<DocumentoNormativoResponse>()

    useEffect(() => {
        const fetchNormativa = async () => {
            try {
                const response = await getNormativas();
                setData(response);
            } catch (error) {
                console.error("Error fetching normativa data:", error);
            }
        };
        fetchNormativa();
    }, [])

    return (
        <div className='flex justify-center gap-4 flex-wrap'>
            {
                data?.data.slice(0, 3).map((normativa) => (
                    <div key={normativa.id} className="p-4 border-b border-gray-200 h-auto w-64 flex flex-col items-center">
                        <FaFile className="text-6xl text-gray-600 mb-2" />
                        {normativa.attributes.nombre && (
                            <h2 className="text-lg font-semibold mb-2">{normativa.attributes.nombre}</h2>
                        )}
                        {normativa.attributes.fecha && (
                            <p className="text-sm text-gray-500 mb-2">{new Date(normativa.attributes.fecha).toLocaleDateString()}</p>
                        )}
                        {normativa.attributes.descripcion && (
                            <p className="text-sm text-gray-700 mb-2 line-clamp-3">{normativa.attributes.descripcion}</p>
                        )}
                        <Link
                            href={`/normativas/${normativa.id}`}
                            className="block px-4 py-2 text-black hover:text-sky-400"
                        >
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                                Descargar
                            </button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
