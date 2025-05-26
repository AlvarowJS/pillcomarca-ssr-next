'use client';
import { getPortadas } from '@/app/lib/api/portada'
import { PortadaResponse } from '@/interfaces'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export const Portada = () => {
    const [portadas, setPortadas] = useState<PortadaResponse[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchPortadas = async () => {
            try {
                const data = await getPortadas()
                setPortadas(data);
            } catch (error) {
                console.error('Error fetching portadas:', error);
            }
        }
        fetchPortadas();
    }, [])

    // Navegación automática
    useEffect(() => {
        if (portadas.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === portadas.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [portadas.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? portadas.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === portadas.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (portadas.length === 0) {
        return <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>;
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            {/* Contenedor del carrusel */}
            <div className="relative h-96">
                {portadas.map((portada, index) => (
                    <div 
                        key={portada.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        {portada.foto && (
                            <Image
                                src={`https://sv-yptplguxwm.cloud.elastika.pe/storage/fotosPortada/${portada.foto}`}
                                alt={portada.nombre_portada}
                                className="object-contain w-full h-full"
                                fill
                                priority={index === currentIndex}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Controles de navegación */}
            {portadas.length > 1 && (
                <>
                    {/* Flechas de navegación */}
                    <button 
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
                        aria-label="Anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
                        aria-label="Siguiente"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicadores/puntos */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {portadas.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                                aria-label={`Ir a la diapositiva ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}