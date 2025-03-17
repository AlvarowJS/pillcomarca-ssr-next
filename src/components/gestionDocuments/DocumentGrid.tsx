import { Gestion } from '@/interfaces'
import { DocumentGridItem } from './DocumentGridItem'
import { DocumentPrueba } from './DocumentPrueba'

interface Props {
    gestions: Gestion[]
}

export const DocumentGrid = ({ gestions }: Props) => {
    return (
        <>
            <h1 className="my-5 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Documentos de Gestión
            </h1>
            <div className='flex'>
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
