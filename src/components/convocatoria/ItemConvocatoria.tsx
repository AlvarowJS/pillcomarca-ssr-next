import { Convocatoria } from '@/interfaces'
import React from 'react'

interface Props {
    convocatoria: Convocatoria;    
}

export const ItemConvocatoria = ({ convocatoria }: Props) => {

    return (
        <div className='bg-gray-400 rounded-2xl p-4'>
            {convocatoria.nombre}
        </div>
    )
}

