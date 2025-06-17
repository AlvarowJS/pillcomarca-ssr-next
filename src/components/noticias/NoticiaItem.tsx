import { Noticia } from '@/interfaces/noticia.interface'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
    noticia: Noticia;
}

export const NoticiaItem = ({ noticia }: Props) => {
    const fecha = new Date(noticia.fecha).toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-md group border border-gray-200 hover:shadow-lg transition-all duration-300">
            {/* Imagen (igual que antes) */}
            <Image
                src={noticia.noticia_imagenes[0].imagen}
                alt={noticia.titulo}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={300}
            />

            {/* Contenido base (igual que tu versión original) */}
            <div className="bg-white p-4 h-40">
                <h5 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {noticia.titulo}
                </h5>
                <p className="text-sm text-gray-600">{fecha}</p>
            </div>

            {/* Overlay hover (AJUSTADO para levantarse solo la mitad) */}
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500 to-sky-600 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between transform translate-y-full group-hover:translate-y-0">
    <p className="text-l font-extrabold text-white drop-shadow-sm leading-snug mb-1">
        {noticia.titulo}
    </p>
    <p className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2 w-fit">
        {fecha}
    </p>
    <p className="text-white/90 text-sm leading-relaxed line-clamp-3 mb-2">
        {noticia.nota}
    </p>
    <div className="text-right">
        <Link
            href={`noticias/${noticia.id}`}
            className="inline-flex items-center gap-1 text-white font-semibold hover:underline"
        >
            Leer Más <FaArrowRight className="w-4 h-4" />
        </Link>
    </div>
</div>
        </div>
    );
};