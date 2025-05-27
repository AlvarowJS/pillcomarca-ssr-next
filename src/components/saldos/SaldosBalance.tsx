'use client'
import { getNormativas } from '@/app/lib/api/normativa'
import { DocumentoNormativoResponse } from '@/interfaces'
import React, { useEffect, useState } from 'react'
import { ListNormativaItem } from '../normativas/ListNormativaItem'
import { Pagination } from '../normativas/Pagination'

export const SaldosBalance = () => {

    const [documents, setDocuments] = useState<DocumentoNormativoResponse>()
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const params = { page: currentPage, tipodedocumento_id: 40 };
                const response = await getNormativas(params);
                setDocuments(response);
            }
            catch (error) {
                console.error("Error al obtener documentos", error);
            }
        };
        fetchDocuments()
    }, [currentPage])

    return (
        <div>
            {
                documents?.data.map((document) => (
                    <ListNormativaItem
                        key={document.id}
                        document={document}
                    />
                ))
            }
            {documents && (
                <Pagination
                    currentPage={documents.meta.current_page}
                    totalPages={documents.meta.last_page}
                    onPageChange={(page) => setCurrentPage(page)}
                    from={documents.links.pagination.from}
                    to={documents.links.pagination.to}
                    total={documents.links.pagination.total}
                />
            )}
        </div>
    )
}
