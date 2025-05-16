'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navItems } from '@/navigation';
import { FaChevronDown, FaChevronUp, FaFile } from 'react-icons/fa';
import Image from 'next/image';
import { MdMail } from 'react-icons/md';

export const SideBar = () => {
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const handleToggle = (path: string) => {
        setOpenSubmenu(openSubmenu === path ? null : path);
    };

    return (
        <aside className="w-64 h-screen bg-white shadow-md p-4 overflow-y-auto">
            <Image src="/images/logos/portal.png" alt="Portal de Transparencia" width={120} height={70} className="mt-5 ml-5 cursor-pointer"
                onClick={() => window.open('https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=12004#.ZGUICexBz0s', '_blank')} />
            <button className='flex items-center text-blue-500 hover:bg-gray-100 rounded px-2 py-2 mt-4'
                onClick={() => window.open('http://165.22.34.176/login', '_blank')}
            >
                <FaFile size={20}
                    className="mr-2" />
                Tramite Documentario
            </button>
            <button className='flex items-center text-orange-500 hover:bg-gray-100 rounded px-2 py-2'
                onClick={() => window.open('https://munipillcomarca.gob.pe:2096/', '_blank')}
            >
                <MdMail
                    size={20}
                    className="mr-2"
                />
                Correo Institucional
            </button>



            <nav className="space-y-2">
                {navItems.map((item) => (
                    <div key={item.path}>
                        {item.submenus ? (
                            <div>
                                <button
                                    onClick={() => handleToggle(item.path)}
                                    className="w-full flex justify-between items-center text-left px-2 py-2 text-gray-800 hover:bg-gray-100 rounded"
                                >
                                    <span>{item.text}</span>
                                    {openSubmenu === item.path ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                {openSubmenu === item.path && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.submenus.map((sub) => (
                                            <Link
                                                key={sub.path}
                                                href={sub.path}
                                                className="block px-2 py-1 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
                                            >
                                                {sub.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                href={item.path}
                                className="block px-2 py-2 text-gray-800 hover:bg-gray-100 rounded"
                            >
                                {item.text}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    )
}
