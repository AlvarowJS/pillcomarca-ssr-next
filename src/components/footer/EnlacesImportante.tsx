import { NavItem } from '@/interfaces';
import Link from 'next/link'
import React from 'react'

interface Props {
    item: NavItem;
}
export const EnlacesImportante = ({ item }: Props) => {
    return (
        <>
            {
                item?.submenus?.map((sub) => (
                    <Link
                        key={sub.path}
                        href={sub.path}
                        className="block text-white-600 hover:font-bold rounded"
                    >
                        {sub.text}
                    </Link>
                ))
            }
            
            <Link
                key={item.path}
                href={item.path}
                className="block text-white-600 hover:font-bold rounded"
            >
                {item.text}
            </Link>
        </>
    )
}
