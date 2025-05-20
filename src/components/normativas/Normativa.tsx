'use client'
import React, { useEffect, useState } from 'react'
import { SearchNormativa } from './SearchNormativa'
import { ListNormativa } from './ListNormativa'
import { getNormativas } from '@/app/lib/api/normativa';
import { DocumentoNormativo, DocumentoNormativoResponse } from '@/interfaces/normativa.interface';

export const Normativa = () => {
    const [filters, setFilters] = useState({});
    const [total, setTotal] = useState()
    const [documents, setDocuments] = useState<DocumentoNormativo[]>([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const data = await getNormativas(filters);
                console.log(data.links.pagination.total, "Total")
                setTotal(data.links.pagination.total);
                setDocuments(data.data);
            } catch (error) {
                console.error("Error al obtener documentos", error);
            }
        };

        fetchDocuments();
    }, []);
    console.log(documents, "Documentos")
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 h-auto md:h-[80vh]">
            <div className="md:col-span-3">
                <SearchNormativa />

            </div>
            <div className="md:col-span-9 md:overflow-y-auto md:h-full">
                <p className='px-4'>Total: {total} Elementos encontrados</p>
                <ListNormativa documents={documents} />
            </div>
        </div>

    )
}
