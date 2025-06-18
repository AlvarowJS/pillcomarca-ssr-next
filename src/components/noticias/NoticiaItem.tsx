'use client';
import { Noticia } from '@/interfaces/noticia.interface';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaExpand } from 'react-icons/fa';
import { useState } from 'react';

interface Props {
    noticia: Noticia;
}

export const NoticiaItem = ({ noticia }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const fecha = new Date(noticia.fecha).toLocaleDateString('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <>
            {/* Modal para imagen expandida en móviles */}
            {isExpanded && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={toggleExpand}
                >
                    <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
                        <Image
                            src={noticia.noticia_imagenes[0].imagen}
                            alt={noticia.titulo}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                        <button
                            className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand();
                            }}
                        >
                            <FaExpand className="text-xl" />
                        </button>
                    </div>
                </div>
            )}

            {/* Tarjeta de noticia */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-md group border border-gray-200 hover:shadow-lg transition-all duration-300">

                {/* Imagen con botón de expandir en móviles */}
                <div className="relative">
                    <Image
                        src={noticia.noticia_imagenes[0].imagen}
                        alt={noticia.titulo}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        width={400}
                        height={300}
                    />

                    {/* Botón expandir visible solo en móviles */}
                    <button
                        className="md:hidden absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full"
                        onClick={toggleExpand}
                    >
                        <FaExpand className="text-sm" />
                    </button>
                </div>

                {/* Contenido base */}
                <div className="bg-white p-4 h-40">
                    <h5 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {noticia.titulo}
                    </h5>
                    <p className="text-sm text-gray-600">{fecha}</p>
                </div>

                {/* Botón "Leer más" fijo en móviles */}
                <div className="md:hidden absolute bottom-4 left-4 right-4 z-10">
                    <Link
                        href={`noticias/${noticia.id}`}
                        className="flex items-center justify-center gap-1 bg-sky-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors"
                    >
                        Leer Más <FaArrowRight className="w-3 h-3" />
                    </Link>
                </div>
                {/* Overlay solo para PC */}
                <div className="hidden md:flex absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500 to-sky-600 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col justify-between transform translate-y-full group-hover:translate-y-0">
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
                            className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
                        >
                            Leer Más <FaArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
