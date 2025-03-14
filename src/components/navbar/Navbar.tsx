'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
    // Institución
    { path: '/servicios', text: 'Servicios' },
    { path: '/seguridad-ciudadana', text: 'Seguridad Ciudadana' },
    { path: '/mision-vision', text: 'Misión y Visión' },
    { path: '/fut', text: 'FUT' },
    { path: '/mesa-partes', text: 'Mesa de Partes' },
    { path: '/directorio', text: 'Directorio' },
    { path: '/historia', text: 'Historia de Pillco Marca' },
    { path: '/organigrama', text: 'Organigrama' },
    { path: '/registro-visitas', text: 'Registro de Visitas' },
    { path: '/acceso-informacion', text: 'Acceso a la Información' },
    { path: '/agenda-institucional', text: 'Agenda Institucional' },

    // Documentos
    { path: '/documentos', text: 'Documentos de Gestión' },
    { path: '/normativas', text: 'Normativa' },
    { path: '/noticias', text: 'Noticias' },
    { path: '/convocatoria', text: 'Convocatoria' },
    { path: '/municipio-saludable', text: 'Municipio Saludable' }
];

export const Navbar = () => {
    const [institutionMenuOpen, setInstitutionMenuOpen] = useState(false);
    const [documentsMenuOpen, setDocumentsMenuOpen] = useState(false);

    const handleOpenInstitutionMenu = () => {
        setInstitutionMenuOpen(!institutionMenuOpen);
        setDocumentsMenuOpen(false);
    };

    const handleOpenDocumentsMenu = () => {
        setDocumentsMenuOpen(!documentsMenuOpen);
        setInstitutionMenuOpen(false);
    };

    const handleCloseMenus = () => {
        setInstitutionMenuOpen(false);
        setDocumentsMenuOpen(false);
    };

    const portalTransparencia = () => {
        window.open('https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=12004#.ZGUICexBz0s', '_blank');
    };

    const facebookLink = () => {
        window.open('https://www.facebook.com/MunicipalidadDistritaldePillcoMarca', '_blank');
    };

    const insta = () => {
        window.open('https://www.instagram.com/municipalidad_pillcomarca/', '_blank');
    };

    const tiktokLink = () => {
        window.open('https://www.tiktok.com/@municipalidadpillcomarca', '_blank');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="flex items-center">
                    <Image src="/images/logos/logo.png" alt="Logo" width={220} height={50} className="mt-5" />
                </Link>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <button onClick={handleOpenInstitutionMenu} className="flex items-center text-black">
                            Institución
                            <span className="ml-2">&#9660;</span>
                        </button>
                        {institutionMenuOpen && (
                            <div className="absolute bg-white shadow-lg mt-2 rounded">
                                {navItems.slice(0, 11).map((item) => (
                                    <Link key={item.path} href={item.path} className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleCloseMenus}>
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={handleOpenDocumentsMenu} className="flex items-center text-black">
                            Documentos
                            <span className="ml-2">&#9660;</span>
                        </button>
                        {documentsMenuOpen && (
                            <div className="absolute bg-white shadow-lg mt-2 rounded">
                                {navItems.slice(11, 13).map((item) => (
                                    <Link key={item.path} href={item.path} className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleCloseMenus}>
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {navItems.slice(13).map((item) => (
                        <Link key={item.path} href={item.path} className="text-black">
                            {item.text}
                        </Link>
                    ))}
                </div>

                <div className="hidden sm:flex items-center space-x-4">
                    <button onClick={facebookLink} className="text-blue-600">Facebook</button>
                    <button onClick={insta} className="text-orange-500">Instagram</button>
                    <button onClick={tiktokLink} className="text-black">TikTok</button>
                </div>

                <div className="hidden md:flex">
                    <Image src="/portal.png" alt="Portal de Transparencia" width={100} height={50} className="mt-5 cursor-pointer" onClick={portalTransparencia} />
                </div>

                <button onClick={handleCloseMenus} className="md:hidden text-black">
                    &#9776;
                </button>
            </div>
        </nav>
    );
};