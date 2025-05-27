'use client';
import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/navigation';
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

    if (item.submenus) {
        return (
            <div ref={menuRef} className="relative">
                <button
                    onClick={() => setOpenMenu(isOpen ? null : item.text)}
                    className="flex items-center text-black"
                >
                    {item.text}
                    <FaAngleDown className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute bg-white shadow-lg w-48 mt-2 rounded z-50">
                        {item.submenus.map((sub) => (
                            <Link
                                key={sub.path}
                                href={sub.path}
                                className="block px-4 py-2 text-black hover:bg-sky-400"
                                onClick={() => setOpenMenu(null)}
                            >
                                {sub.text}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.path}
            className={`text-black px-4 py-2 hover:text-blue-600 ${
                currentPath === item.path ? 'font-bold text-blue-600' : ''
            }`}
        >
            {item.text}
        </Link>
    );
};
