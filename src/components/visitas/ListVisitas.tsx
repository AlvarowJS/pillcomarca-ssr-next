import React from 'react'
import { Visita } from '@/interfaces';
import { ListVisitaItem } from './ListVisitasItem';

interface Props{
    documents: Visita[];
}

export const ListVisita = ({ documents }: Props) => {
    return (
        <div>
            {
                documents.map((document) => (
                    <ListVisitaItem 
                        key={document.id}
                        document={document}
                    />
                ))
            }
        </div>
    )
}