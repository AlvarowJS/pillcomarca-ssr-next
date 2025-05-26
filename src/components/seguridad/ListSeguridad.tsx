'use client';
import { getSeguridad } from '@/app/lib/api/seguridad';
import { SeguridadCategoria } from '@/interfaces/seguridad.interface'
import React, { use, useEffect, useState } from 'react'
import { ListSeguridadItem } from './ListSeguridadItem';


export const ListSeguridad = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<SeguridadCategoria[]>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSeguridad();
                setData(data);
            } catch (error) {
                console.error("Error fetching seguridad data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* {data?.categoria} */}
            {
                data?.map((categoria) => (
                    <ListSeguridadItem 
                        key={categoria.id}
                        categoria={categoria} 
                    />
                ))
            }
        </div>
    )
}
