import { DocumentoNormativo, DocumentoNormativoResponse } from '@/interfaces/normativa.interface';
import React from 'react'
import { ListNormativaItem } from './ListNormativaItem';

interface Props {
    documents: DocumentoNormativo[];
}

export const ListNormativa = ({ documents }: Props) => {
    return (
        <div>
            {
                documents.map((document) => (
                    <ListNormativaItem 
                        key={document.id}
                        document={document}
                    />
                ))
            }
        </div>
    )
}
