import { Noticia } from '@/interfaces/noticia.interface'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
    noticia: Noticia;
}

export const NoticiaItem = ({ noticia }: Props) => {
    const [año, mes, dia] = noticia.fecha.split("-");
    const fechaFormateada = `${dia}-${mes}-${año}`;

    return (
        <div className="bg-white shadow-md mb-6 border border-gray-200 sm:w-32 md:w-64 lg:w-64">
            <Link
                key={noticia.id}
                href={`noticias/${noticia.id}`}                
            >
                <Image
                    src={noticia.noticia_imagenes[0].imagen}
                    alt={noticia.titulo}
                    className="h-48 w-96 sm:w-100 object-cover"
                    width={400}
                    height={300}
                />
            </Link>
            <div className="p-4 space-y-3">
                <h5 className="text-2xl font-semibold text-gray-900">
                    {noticia.titulo}
                </h5>

                <p className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Publicado: {fechaFormateada}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {noticia.nota}
                </p>

                <Link
                    key={noticia.id}
                    href={`noticias/${noticia.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 mt-2 text-sm font-medium text-white bg-sky-600 rounded-full hover:bg-sky-700 transition-all shadow-md"
                >
                    Leer más
                    <FaArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};
