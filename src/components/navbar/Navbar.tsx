'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { navItems } from '@/navigation';
import { NavbarItem } from './NavbarItem';
import { SideBar } from './SideBar';
import { SocialItem } from './SocialItem';

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);    

    const portalTransparencia = () => {
        window.open('https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=12004#.ZGUICexBz0s', '_blank');
    };

    return (
        <nav className="bg-white shadow-md d-flex">
            <div className="container mx-auto flex items-center justify-between p-4 gap-2">
                <Link href="/" className="flex items-center">
                    <Image src="/images/logos/logo.png" alt="Logo de la municipalidad distrital de pillco marca" width={240} height={70} className="mt-2 mr-10" />
                </Link>
                <div className="hidden lg:flex items-center space-x-4 gap-3">
                    {navItems.map((item) => (
                        <NavbarItem
                            key={item.path}
                            item={item}
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                        />
                    ))}
                </div>
                <div className='flex'>
                    <SocialItem />
                    <div className="hidden md:flex">
                        <Image src="/images/logos/portal.png" alt="Portal de Transparencia" width={120} height={70} className="mt-5 ml-5 cursor-pointer" onClick={portalTransparencia} />
                    </div>
                </div>
                <button onClick={toggleSidebar} className="lg:hidden text-black">
                    <IoMenu
                        size={30}
                    />

                </button>
            </div>
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 lg:hidden" onClick={toggleSidebar}>
                    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg" onClick={e => e.stopPropagation()}>
                        <SideBar />
                    </div>
                </div>
            )}
        </nav >
    );
};