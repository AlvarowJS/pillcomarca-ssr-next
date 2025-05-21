import { DocumentoNormativo } from '@/interfaces/normativa.interface'
import React from 'react'
import { FaDownload, FaEye } from 'react-icons/fa';
interface Props {
    document: DocumentoNormativo;
}
export const ListNormativaItem = ({ document }: Props) => {
    return (
        <>
            <section className="bg-white shadow-lg rounded-lg py-6 px-4 mb-4 border-gray-300 border-1">
                <div className='flex gap-3 text-xs'>
                    <div className="bg-blue-500 text-white py-2 px-4 rounded-4xl">                        
                        {document.attributes.fecha}
                    </div>
                    <div className="bg-blue-500 text-white py-2 px-4 rounded-4xl">
                        {document.attributes.Tipodedocumento.nombre}
                    </div>
                </div>
                <h4 className='text-gray-900 font-bold mt-4'>
                    {document.attributes.nombre}
                </h4>
                <article className="text-gray-700 mt-2">
                    {
                        document.attributes.descripcion
                    }
                </article>
                <div className='flex gap-4 mt-4'>
                    <button className=' text-blue-400 px-4 flex gap-1'>
                        <FaEye className='mt-1' />
                        Ver
                    </button>
                    <a className=' text-blue-400 px-4 flex gap-1'
                        href={document.attributes.archivo}
                        target="_blank"
                    >
                        <FaDownload className='mt-1' />
                        Descargar
                    </a>
                </div>
            </section>
        </>
    )
}
