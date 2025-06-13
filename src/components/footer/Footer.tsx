'use client';
import { navItems } from '@/navigation';
import React, { useState } from 'react';
import { EnlacesImportante } from './EnlacesImportante';
import { SocialItem } from '../navbar/SocialItem';

export const Footer = () => {
  const [selected, setSelected] = useState<'sede' | 'palacio'>('sede');

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center gap-6 flex-wrap">
        <div>
          <h5 className='text-md font-bold mb-2'>ENLACES IMPORTANTES</h5>
          {
            navItems.map((item) => (
              <EnlacesImportante key={item.path} item={item} />
            ))
          }
        </div>

        <div>
          <h5 className='text-md font-bold mb-2'>ENLACES DE INTERÉS</h5>
          <h6 className='text-md font-bold'>
            Ministerio de Trabajo y Promoción del Empleo
          </h6>
          <a
            href="https://capacitacionlaboral.trabajo.gob.pe/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white hover:font-bold rounded block mb-2'
          >
            Mi carrera Capacita-T
          </a>

          <h5 className='text-md font-bold mt-4 mb-2'>REDES SOCIALES</h5>
          <SocialItem />
        </div>

        <div>
          <h5 className='text-md font-bold mb-2'>HORARIO DE ATENCIÓN</h5>
          <p>8:00 am - 1:00 pm</p>
          <p>1:45 pm - 4:15 pm</p>

          <h5 className='text-md font-bold mt-4 mb-2'>TELÉFONO</h5>
          <p>900659235</p>
        </div>
      </div>

{/* Mapa con botones tipo pestaña minimalista */}
<div className="text-center mt-8 flex flex-col items-center px-4">
  <h3 className='text-md font-bold mb-3'>UBICACIÓN</h3>

  <div className="w-full max-w-4xl overflow-hidden ">
    {/* Contenedor de pestañas con fondo solo para los botones */}
    <div className="flex justify-center ">
      <div className="flex space-x-1  pt-2">
        <button
          className={`text-sm font-medium px-4 py-1 rounded-t-md transition-all cursor-pointer ${
            selected === 'sede'
              ? 'text-sky-600  border-sky-600 bg-white'
              : 'text-gray-500 hover:text-sky-500 hover:bg-gray-50'
          }`}
          onClick={() => setSelected('sede')}
        >
          Sede Principal
        </button>
        <button
          className={`text-sm font-medium px-4 py-1 rounded-t-md transition-all cursor-pointer ${
            selected === 'palacio'
              ? 'text-sky-600  border-sky-600 bg-white'
              : 'text-gray-500 hover:text-sky-500 hover:bg-gray-50'
          }`}
          onClick={() => setSelected('palacio')}
        >
          Palacio Municipal
        </button>
      </div>
    </div>

    {/* Mapas */}
    <div className="relative h-[350px] bg-gray-50">
      <iframe
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${
          selected === 'sede' ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.425390319427!2d-76.25089851739072!3d-9.961178031067803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2bd3379c973%3A0x5007077161b51cfa!2sMunicipalidad%20Distrital%20de%20Pillco%20Marca!5e0!3m2!1ses-419!2spe!4v1747676596476!5m2!1ses-419!2spe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <iframe
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${
          selected === 'palacio' ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
        src="https://www.google.com/maps/embed?pb=TU_ENLACE_DEL_PALACIO"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</div>

      <div className="text-center mt-6">
        <p className="text-sm">Desarrollado por el Área de Estadística e Informática</p>
        <p className="text-sm">© 2025 Municipalidad Distrital de Pillco Marca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};