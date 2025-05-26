'use client';
import { getNormativas } from '@/app/lib/api/normativa'
import { DocumentoNormativoResponse } from '@/interfaces'
import React, { useEffect, useState } from 'react'

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
        <div>
            {
                data?.data.map((normativa) => (
                    <div key={normativa.id} className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold">{normativa.nombre}</h2>
                        <p className="text-sm text-gray-600">{normativa.descripcion}</p>
                        <p className="text-xs text-gray-500">Fecha: {new Date(normativa.fecha).toLocaleDateString()}</p>
                    </div>
                ))
            }
        </div>
    )
}
