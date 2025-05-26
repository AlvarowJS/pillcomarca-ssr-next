'use client';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Servicio {
  nombre: string;
  icono: string;
  link: string;
}

export default function ServiciosCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  const servicios: Servicio[] = [
    { nombre: 'Seguimiento de Trámite', icono: '/servicios/seguimiento.svg', link: 'http://165.22.34.176/tramite/seguimiento' },
    { nombre: 'Trámite Documentario', icono: '/servicios/documento.svg', link: 'http://165.22.34.176/login' },
    { nombre: 'Mesa de Partes Virtual', icono: '/servicios/mesapartes.svg', link: '/mesa-partes' },
    { nombre: 'Seguridad Ciudadana', icono: '/servicios/seguridad.svg', link: '/seguridad-ciudadana' },
    { nombre: 'Correo Institucional', icono: '/servicios/correo.svg', link: 'https://munipillcomarca.gob.pe:2096' },
    { nombre: 'Libro de Reclamaciones', icono: '/servicios/libro.svg', link: 'https://reclamos.servicios.gob.pe/?institution_id=3654' },
    { nombre: 'INTRANET', icono: '/servicios/mundo.svg', link: 'https://intranet.munipillcomarca.gob.pe/tickets' },
    { nombre: 'PRESUPUESTO', icono: '/servicios/presupuesto.svg', link: '/presupuesto-participativo' },
  ];

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) setVisibleItems(2);
      else if (window.innerWidth < 1024) setVisibleItems(3);
      else setVisibleItems(4);
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [isHovered, startIndex, visibleItems]);

  const next = () => setStartIndex(prev => (prev + visibleItems) % servicios.length);
  const prev = () => setStartIndex(prev => (prev - visibleItems + servicios.length) % servicios.length);
  const goToSlide = (index: number) => setStartIndex(index);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (startIndex + i) % servicios.length;
      items.push(servicios[index]);
    }
    return items;
  };

  return (
    <div 
      className="w-full px-4 py-12 bg-gray-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-3xl font-bold text-sky-600 mb-8 text-center">
        Servicios Municipales
      </h2>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all"
          aria-label="Anterior"
        >
          <FaChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="flex-1 max-w-6xl overflow-hidden">
          <div className="flex justify-center gap-4 px-2 transition-transform duration-300">
            {getVisibleItems().map((servicio, index) => (
              <a
                key={`${servicio.nombre}-${index}`}
                href={servicio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-xl hover:bg-sky-50 transition-all 
                          min-w-[150px] max-w-[200px] hover:shadow-md hover:-translate-y-1"
              >
                <img 
                  src={servicio.icono} 
                  alt={`Icono de ${servicio.nombre}`} 
                  className="w-14 h-14 mb-3"
                />
                <h3 className="text-sm font-semibold text-gray-800 text-center">
                  {servicio.nombre}
                </h3>
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all"
          aria-label="Siguiente"
        >
          <FaChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: Math.ceil(servicios.length / visibleItems) }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i * visibleItems)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === Math.floor(startIndex / visibleItems) ? 'bg-sky-600 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Ir al grupo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
