'use client'
import React, { useEffect, useState } from 'react'
import { SearchNormativa } from './SearchNormativa'
import { ListNormativa } from './ListNormativa'
import { getNormativas, getTiposDoc } from '@/app/lib/api/normativa';
import { DocumentoNormativo, DocumentoNormativoResponse, TipoDeDocumento } from '@/interfaces';
import { Pagination } from './Pagination';


export const Normativa = () => {
    const [filters, setFilters] = useState({});
    const [tipos, setTipos] = useState<TipoDeDocumento[]>()
    const [documents, setDocuments] = useState<DocumentoNormativo[]>([]);
    const [data, setData] = useState<DocumentoNormativoResponse>()
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchTiposDocumentos = async () => {
            try {
                const data = await getTiposDoc();
                setTipos([data]);
            } catch (error) {
                console.error("Error", error)
            }
        }
        fetchTiposDocumentos()
    }, [])

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const params = { ...filters, page: currentPage }
                const data = await getNormativas(params);
                setDocuments(data.data);
                setData(data)
            } catch (error) {
                console.error("Error al obtener documentos", error);
            }
        };

        fetchDocuments();
    }, [filters, currentPage]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 h-auto md:h-[120vh]">
            <div className="md:col-span-3">
                <SearchNormativa
                    tipos={tipos}
                    setFilters={setFilters}
                    setCurrentPage={setCurrentPage}
                />

            </div>
            <div className="md:col-span-9 md:overflow-y-auto md:h-full">
                {data && (
                    <Pagination
                        currentPage={data.meta.current_page}
                        totalPages={data.meta.last_page}
                        onPageChange={(page) => setCurrentPage(page)}
                        from={data.links.pagination.from}
                        to={data.links.pagination.to}
                        total={data.links.pagination.total}
                    />
                )}
                <ListNormativa documents={documents} />
                {data && (
                    <Pagination
                        currentPage={data.meta.current_page}
                        totalPages={data.meta.last_page}
                        onPageChange={(page) => setCurrentPage(page)}
                        from={data.links.pagination.from}
                        to={data.links.pagination.to}
                        total={data.links.pagination.total}
                    />
                )}
            </div>
        </div>

    )
}
