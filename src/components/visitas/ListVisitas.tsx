'use client';
import React, { useEffect, useState } from 'react';
import { RegistroVisitasResponse } from '@/interfaces';
import { ListVisitaItem } from './ListVisitasItem';
import { getVisitas } from '@/app/lib/api/visitas';
import { Pagination } from '../normativas/Pagination';

export const ListVisita = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visitas, setVisitas] = useState<RegistroVisitasResponse>();

  useEffect(() => {
    const fetchVisitas = async () => {
      try {
        const data = await getVisitas({ page: currentPage });
        setVisitas(data);
      } catch (error) {
        console.error("Error fetching visitas:", error);
      }
    };
    fetchVisitas();
  }, [currentPage]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-medium">
          <tr>
            <th className="px-4 py-2 text-left">Fecha</th>
            <th className="px-4 py-2 text-left">Dependencia</th>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">DNI</th>
            <th className="px-4 py-2 text-left">Persona</th>
            <th className="px-4 py-2 text-left">Hora Ingreso</th>
            <th className="px-4 py-2 text-left">Hora Salida</th>
          </tr>
        </thead>
        <tbody>
          {visitas?.data.map((visita) => (
            <ListVisitaItem key={visita.id} visita={visita} />
          ))}
        </tbody>
      </table>

      {visitas && (
        <div className="mt-4">
          <Pagination
            currentPage={visitas.current_page}
            totalPages={visitas.last_page}
            onPageChange={(page) => setCurrentPage(page)}
            from={visitas.from}
            to={visitas.to}
            total={visitas.total}
          />
        </div>
      )}
    </div>
  );
};
