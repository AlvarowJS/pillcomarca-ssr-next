'use client'
import { getNoticias } from '@/app/lib/api/noticia'
import React, { useEffect, useState } from 'react'
import { NoticiaItem } from './NoticiaItem';
import { Noticia, NoticiaResponse } from '@/interfaces/noticia.interface';
import { Pagination } from '../normativas/Pagination';

export const ListNoticias = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [noticias, setNoticias] = useState<Noticia[]>()
    const [data, setData] = useState<NoticiaResponse>()
    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const data = await getNoticias({ page: currentPage })
                setNoticias(data.data)
                setData(data)
            } catch (error) {
                console.error("Error al obtener documentos", error);
            }
        }
        fetchNoticias()
    }, [])

    return (
        <div>
            <div className='flex flex-wrap gap-6 justify-center p-4'>
                {
                    noticias?.map((noticia) => (
                        <NoticiaItem
                            key={noticia.id}
                            noticia={noticia}
                        />
                    ))
                }
            </div>
            {data && (
                <Pagination
                    currentPage={data.current_page}
                    totalPages={data.last_page}
                    onPageChange={(page) => setCurrentPage(page)}
                    from={data.from}
                    to={data.to}
                    total={data.total}
                />
            )}
        </div>
    )
}
