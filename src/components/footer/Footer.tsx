'use client';
import { navItems } from '@/navigation'
import React from 'react'
import { EnlacesImportante } from './EnlacesImportante'
import { SocialItem } from '../navbar/SocialItem'

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-center gap-6 flex-wrap">
                <div>
                    <h5 className='text-md font-bold'>
                        ENLACES IMPORTANTES
                    </h5>
                    {
                        navItems.map((item) => (
                            <EnlacesImportante
                                key={item.path}
                                item={item}
                            />
                        ))
                    }
                </div>
                <div>
                    <h5 className='text-md font-bold'>
                        ENLACES DE INTERES
                    </h5>
                    <h6 className='text-md font-bold'>
                        Ministerio de Trabajo y Promoción del Empleo
                    </h6>
                    <a href="https://capacitacionlaboral.trabajo.gob.pe/" target="_blank" rel="noopener noreferrer" className='text-white-600 hover:font-bold rounded'>
                        Mi carrera Capacita-T
                    </a>

                    <h5 className='text-md font-bold mt-4'>
                        Redes sociales
                    </h5>
                    <SocialItem />
                </div>
                <div>
                    <h5 className='text-md font-bold'>
                        HORARIO DE ATENCIÓN
                    </h5>
                    <p>
                        8:00 am - 1:00 pm
                    </p>
                    <p>
                        1:45 pm - 4:15 pm
                    </p>
                    <h5 className='text-md font-bold'>
                        TELÉFONO
                    </h5>
                    <p>
                        900659235
                    </p>
                </div>
            </div>
            <div className="flex text-center mt-4 justify-center flex-col items-center">
                <h3 className='text-md font-bold'>UBICACIÓN</h3>
                <iframe
                    className="rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.425390319427!2d-76.25089851739072!3d-9.961178031067803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2bd3379c973%3A0x5007077161b51cfa!2sMunicipalidad%20Distrital%20de%20Pillco%20Marca!5e0!3m2!1ses-419!2spe!4v1747676596476!5m2!1ses-419!2spe"
                    width="100%" height="350"
                    loading="lazy">
                </iframe>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">
                    Desarrollado por el Área de Estadística e Informática
                </p>
                <p className="text-sm">
                    © 2025 Municipalidad Distrital de Pillco Marca. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}
