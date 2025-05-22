'use client'
import { getConvocatoria } from '@/app/lib/api/convocatoria';
import { ItemConvocatoria } from './ItemConvocatoria';
import { useEffect, useState } from 'react';
import { Convocatoria } from '@/interfaces';

export const ListConvocatoria = () => {
    const [convocatorias, setConvocatorias] = useState<Convocatoria[]>()

    useEffect(() => {
        const fetchConvocatoria = async () => {
            try {
                const data = await getConvocatoria();
                console.log(data, "Asdasds")
                setConvocatorias(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchConvocatoria()
    }, [])

    return (
        <>
            {
                convocatorias?.map((convocatoria) => (
                    <ItemConvocatoria
                        key={convocatoria.id}
                        convocatoria={convocatoria}
                    />
                ))
            }
        </>
    )
}

