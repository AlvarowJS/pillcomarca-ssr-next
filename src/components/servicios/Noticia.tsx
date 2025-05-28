'use client'
import { getNoticias } from '@/app/lib/api/noticia'
import { NoticiaResponse } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Noticia = () => {

  const [noticias, setNoticias] = useState<NoticiaResponse>()

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await getNoticias();
        setNoticias(response);
      }
      catch (error) {
        console.error("Error fetching noticias data:", error);
      }
    }
    fetchNoticias();
  }, [])


  return (
    <div className='flex justify-center gap-4 flex-wrap'>
      {
        noticias?.data.slice(0, 3).map((noticia) => (
          <div key={noticia.id} className="p-4 border-b border-gray-200 h-auto w-64 flex flex-col items-center">
            <Link href={`/noticias/${noticia.id}`} className="mb-2">
              <Image src={noticia.noticia_imagenes[0].imagen} alt={noticia.titulo}
                className='h-48 w-96 sm:w-100 object-cover mb-2'
                width={400}
                height={300}
              />
            </Link>
            <h2 className="text-lg font-semibold mb-2">{noticia.titulo}</h2>
            <p className="text-sm text-gray-700 mb-2 line-clamp-3">{noticia.nota}</p>
            <Link
              href={`noticias/${noticia.id}`}
              className="block px-4 py-2 text-black hover:text-sky-400"
            >
              Leer Mas
            </Link>
          </div>
        ))
      }
    </div>
  )
}
