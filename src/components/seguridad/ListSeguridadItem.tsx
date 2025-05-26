'use client';

import { useState } from 'react';
import { SeguridadCategoria } from '@/interfaces/seguridad.interface';
import { FaAngleDown, FaAngleRight, FaDownload } from 'react-icons/fa';

interface Props {
  categoria: SeguridadCategoria;
}

export const ListSeguridadItem = ({ categoria }: Props) => {
  const [openColecciones, setOpenColecciones] = useState<number[]>([]);

  const toggleColeccion = (id: number) => {
    setOpenColecciones((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-4">
      {/* Categoría */}
      <h2 className="text-xl font-bold text-gray-800 border-b pb-2">
        {categoria.categoria}
      </h2>

      {/* Colecciones */}
      {categoria.seguridad_coleccions.map((coleccion) => {
        const isOpen = openColecciones.includes(coleccion.id);

        return (
          <div key={coleccion.id} className="space-y-2">
            {/* Encabezado clickeable */}
            <button
              onClick={() => toggleColeccion(coleccion.id)}
              className="flex items-center gap-2 text-lg font-semibold text-blue-600 focus:outline-none cursor-pointer"
            >
              {isOpen ? <FaAngleDown className="w-5 h-5" /> : <FaAngleRight className="w-5 h-5" />}
              {coleccion.nombre_coleccion}
            </button>

            {/* Archivos (colapsable) */}
            {isOpen && (
              <ul className="space-y-2 pl-6 border-l-2 border-blue-100">
                {coleccion.seguridad_archivos.map((archivo) => (
                  <li
                    key={archivo.id}
                    className="flex items-start justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-md shadow-sm transition"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {archivo.nombre_archivo}
                      </p>
                      <p className="text-xs text-gray-500">
                        Subido: {new Date(archivo.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <a
                      href={archivo.documento}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <FaDownload className="w-4 h-4" />
                      Descargar
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};
