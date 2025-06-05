'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/interfaces';
import { FaAngleDown } from "react-icons/fa";

interface Props {
    item: NavItem;
    openMenu: string | null;
    setOpenMenu: (menu: string | null) => void;
}

export const NavbarItem = ({ item, openMenu, setOpenMenu }: Props) => {
    const currentPath = usePathname();
    const isOpen = openMenu === item.text;
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setOpenMenu]);

    const baseClasses = 'px-4 py-2 font-medium transition cursor-pointer';
    const hoverUnderline = 'hover:border-b-4 hover:border-blue-600 hover:text-blue-600';
    const activeUnderline = 'border-b-4 border-blue-600 text-blue-600 font-semibold';

    // Función para verificar si el ítem o alguno de sus submenús está activo
    const isItemActive = (navItem: NavItem): boolean => {
        if (navItem.path && currentPath === navItem.path) return true;
        if (navItem.submenus) {
            return navItem.submenus.some(sub => currentPath === sub.path);
        }
        return false;
    };

    const isActive = isItemActive(item);

    if (item.submenus) {
        return (
            <div ref={menuRef} className="relative group">
                <button
                    onClick={() => setOpenMenu(isOpen ? null : item.text)}
                    className={`${baseClasses} ${hoverUnderline} flex items-center gap-1 ${
                        isActive ? activeUnderline : 'text-gray-800 border-b-4 border-transparent'
                    }`}
                >
                    {item.text}
                    <FaAngleDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50 overflow-hidden border border-gray-100">
                        {item.submenus.map((sub) => {
                            const isSubActive = currentPath === sub.path;
                            
                            return (
                                <Link
                                    key={sub.path}
                                    href={sub.path}
                                    className={`${baseClasses} block ${
                                        isSubActive 
                                            ? activeUnderline 
                                            : 'text-gray-700 hover:border-b-4 hover:border-blue-600 hover:text-blue-600'
                                    }`}
                                    onClick={() => setOpenMenu(null)}
                                >
                                    {sub.text}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.path}
            className={`${baseClasses} ${hoverUnderline} ${
                isActive ? activeUnderline : 'text-gray-800 border-b-4 border-transparent'
            }`}
        >
            {item.text}
        </Link>
    );
};