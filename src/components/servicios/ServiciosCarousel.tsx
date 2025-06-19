'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPeopleGroup } from 'react-icons/fa6';
import { GoMail } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { IoShieldCheckmarkSharp, IoDocumentTextSharp } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";
import { AiOutlineLaptop, AiOutlineFileSearch } from "react-icons/ai";

interface Servicio {
  nombre: string;
  icono: React.ReactNode;
  link: string;
}

export default function ServiciosCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6);
  const [isHovered, setIsHovered] = useState(false);

  const servicios: Servicio[] = [
    { nombre: 'Seguimiento de Trámite', icono: <AiOutlineFileSearch size={50} />, link: 'http://165.22.34.176/tramite/seguimiento' },
    { nombre: 'Trámite Documentario', icono: <IoDocumentTextSharp size={50} />, link: 'http://165.22.34.176/login' },
    { nombre: 'Mesa de Partes Virtual', icono: <AiOutlineLaptop size={50} />, link: '/mesa-partes' },
    { nombre: 'Seguridad Ciudadana', icono: <IoShieldCheckmarkSharp size={50} />, link: '/seguridad-ciudadana' },
    { nombre: 'Correo Institucional', icono: <GoMail size={50} />, link: 'https://munipillcomarca.gob.pe:2096' },
    { nombre: 'Libro de Reclamaciones', icono: <GiOpenBook size={50} />, link: 'https://reclamos.servicios.gob.pe/?institution_id=3654' },
    { nombre: 'INTRANET', icono: <TfiWorld size={50} />, link: 'https://intranet.munipillcomarca.gob.pe/login' },
    { nombre: 'Presupuesto Participativo', icono: <FaPeopleGroup size={50} />, link: '/presupuesto-participativo' },
  ];

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) setVisibleItems(2);
      else if (window.innerWidth < 1024) setVisibleItems(3);
      else setVisibleItems(6);
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setStartIndex(prev => (prev + visibleItems) % servicios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, visibleItems, servicios.length]);

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
      className="w-full px-4 pb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
              <Link
                key={`${servicio.nombre}-${index}`}
                href={servicio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 rounded-xl hover:bg-sky-50 transition-all 
                          min-w-[150px] max-w-[200px] hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-14 h-14 mb-3 flex items-center justify-center text-sky-700">
                  {servicio.icono}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 text-center">
                  {servicio.nombre}
                </h3>
              </Link>
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
            className={`w-3 h-3 rounded-full transition-all ${i === Math.floor(startIndex / visibleItems) ? 'bg-sky-600 w-6' : 'bg-gray-300'
              }`}
            aria-label={`Ir al grupo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
