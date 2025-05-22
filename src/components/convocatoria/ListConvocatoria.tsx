'use client'
import { getConvocatoria } from '@/app/lib/api/convocatoria';
import { ItemConvocatoria } from './ItemConvocatoria';
import { useEffect, useState } from 'react';
import { Convocatoria } from '@/interfaces';

export const ListConvocatoria = () => {
    const [convocatorias, setConvocatorias] = useState<Convocatoria[]>()
    //Ni bien abre este componente se ejecuta esto
    useEffect(() => {
        const fetchConvocatoria = async () => {
            try {
                const data = await getConvocatoria();                
                setConvocatorias(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchConvocatoria()
    }, [])

    return (
        <div className='flex gap-4 flex-col'>
            {
                convocatorias?.map((convocatoria) => (
                    <ItemConvocatoria
                        key={convocatoria.id}
                        convocatoria={convocatoria}
                    />
                ))
            }
        </div>
    )
}

