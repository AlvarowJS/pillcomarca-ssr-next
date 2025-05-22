import { Convocatoria } from '@/interfaces'
import React from 'react'

interface Props {
    convocatoria: Convocatoria;
}
export const ItemConvocatoria = ({
    convocatoria
}: Props) => {

    console.log(convocatoria, " ?asdasd")
    return (
        <div>ItemConvocatoria</div>
    )
}
