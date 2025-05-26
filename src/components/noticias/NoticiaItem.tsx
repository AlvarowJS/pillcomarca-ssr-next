import { Noticia } from '@/interfaces/noticia.interface'
import Link from 'next/link';
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
                <img src={noticia.noticia_imagenes[0].imagen} alt={noticia.titulo}
                    className='h-48 w-96 sm:w-100 s object-cover'

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
                    className="block px-4 py-2 text-black hover:text-sky-400"
                >
                    Leer Mas
                </Link>
            </div>
        </div>
    )
}
