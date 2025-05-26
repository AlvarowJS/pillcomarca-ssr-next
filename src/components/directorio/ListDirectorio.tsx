'use client';

import React, { useEffect, useState } from 'react';
import { getDirectorio } from '@/app/lib/api/directorio';
import { ListDirectorioItem } from './ListDirectorioItem';
import { DirectorioResponse } from '@/interfaces/directorio.interface';
import { Pagination } from '../normativas/Pagination';

export const ListDirectorio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [directorios, setDirectorios] = useState<DirectorioResponse>();

  useEffect(() => {
    const fetchDirectorios = async () => {
      try {
        const data = await getDirectorio({ page: currentPage });
        setDirectorios(data);
      } catch (error) {
        console.error('Error fetching directorios:', error);
      }
    };
    fetchDirectorios();
  }, [currentPage]);

  return (
    <div className="p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {directorios?.data.map((directorio) => (
          <ListDirectorioItem key={directorio.id} directorio={directorio} />
        ))}
      </div>
      {directorios && (
        <div className="mt-8">
          <Pagination
            currentPage={directorios.current_page}
            totalPages={directorios.last_page}
            onPageChange={(page) => setCurrentPage(page)}
            from={directorios.from}
            to={directorios.to}
            total={directorios.total}
          />
        </div>
      )}
    </div>
  );
};