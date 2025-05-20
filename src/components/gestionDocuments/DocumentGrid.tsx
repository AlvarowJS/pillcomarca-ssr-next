import { Gestion } from '@/interfaces'
import { DocumentGridItem } from './DocumentGridItem'
import { DocumentPrueba } from './DocumentPrueba'

interface Props {
    gestions: Gestion[]
}

export const DocumentGrid = ({ gestions }: Props) => {
    return (
        <>            
            <div className='flex flex-wrap gap-4 mt-6 mx-4 justify-center'>
                {
                    gestions.map(gestion => (
                        <DocumentGridItem
                            key={gestion.id}
                            gestion={gestion}
                        />
                    ))
                }
            </div>
        </>
    )
}
