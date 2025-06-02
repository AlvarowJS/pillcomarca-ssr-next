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
                console.error(error)
            }
        }
        fetchConvocatoria()
    }, [])

    return (
        <div className='flex gap-4 flex-col mx-4 flex-wrap'>
            {
                convocatorias?.slice().reverse().map((convocatoria) => (
                    <ItemConvocatoria
                        key={convocatoria.id}
                        convocatoria={convocatoria}
                    />
                ))
            }
        </div>
    )
}

