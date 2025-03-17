import { Gestion } from '@/interfaces'
import { DocumentGridItem } from './DocumentGridItem'

interface Props {
    gestions: Gestion[]   
}

export const DocumentGrid = ({ gestions }: Props) => {
    return (
        <>
            {
                gestions.map(gestion => (
                    <DocumentGridItem
                        key={gestion.id}
                        gestion={gestion}
                    />
                ))
            }
        </>
    )
}
