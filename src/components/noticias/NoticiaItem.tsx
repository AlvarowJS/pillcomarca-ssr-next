import { Noticia } from '@/interfaces/noticia.interface'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
    noticia: Noticia;
}
export const NoticiaItem = ({ noticia }: Props) => {
    return (
        <div className="bg-white shadow-md mb-6 border border-gray-200 sm:w-32 md:w-64 lg:w-64">
            <Link
                key={noticia.id}
                href={`noticias/${noticia.id}`}                
            >
                <Image src={noticia.noticia_imagenes[0].imagen} alt={noticia.titulo}
                    className='h-48 w-96 sm:w-100 s object-cover'
                    width={400}
                    height={300}
                />
            </Link>
            <div className='p-4'>
                <h5 className='text-xl font-bold text-gray-800'>
                    {noticia.titulo}
                </h5>
                <p className='my-4 line-clamp-3'>
                    {noticia.nota}
                </p>
                <Link
                key={noticia.id}
                href={`noticias/${noticia.id}`}
                className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-sky-600 rounded-full hover:bg-sky-700 transition-all"
                >
                Leer más
                <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
    )
}
