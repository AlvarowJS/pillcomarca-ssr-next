'use client';

import React, { useEffect, useState } from 'react';
import { getDirectorio, getRegidor, getAlcalde } from '@/app/lib/api/directorio';
import { ListDirectorioItem } from './ListDirectorioItem';
import { ListRegidorItem } from './ListRegidorItem';
import { ListAlcaldeItem } from './ListAlcaldeItem';
import { DirectorioResponse } from '@/interfaces/directorio.interface';
import { Regidor } from '@/interfaces/regidor.interface';
import { Alcalde } from '@/interfaces/alcalde.interface';
import { Pagination } from '../normativas/Pagination';

export const ListDirectorio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [directorios, setDirectorios] = useState<DirectorioResponse>();
  const [regidors, setRegidors] = useState<Regidor[]>([]);
  const [alcaldes, setAlcaldes] = useState<Alcalde[]>([]);
  const [selectedSection, setSelectedSection] = useState<'regidores' | 'directorio' | 'alcaldes'>('alcaldes');

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

  useEffect(() => {
    const fetchRegidor = async () => {
      try {
        const data = await getRegidor();
        setRegidors(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRegidor();
  }, []);

  useEffect(() => {
    const fetchAlcaldes = async () => {
      try {
        const data = await getAlcalde();
        setAlcaldes(data);
      } catch (error) {
        console.error('Error fetching alcaldes:', error);
      }
    };
    fetchAlcaldes();
  }, []);

  const alcaldesaDiana = alcaldes.find(
    (a) =>
      a.nombres.toLowerCase().includes('diana') &&
      a.apellidos.toLowerCase().includes('plejo')
  );
  const otrosAlcaldes = alcaldes.filter((a) => a !== alcaldesaDiana);

  return (
    <div className="p-4 space-y-10">
      {/* Botones de selección */}
      <div className="flex justify-center">
        <div className="flex space-x-1 pt-2">
          <button
            className={`text-sm font-medium px-4 py-1 rounded-t-md transition-all cursor-pointer ${
              selectedSection === 'alcaldes'
                ? 'text-sky-600 border-b-2 border-sky-600 bg-white'
                : 'text-gray-500 hover:text-sky-500 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedSection('alcaldes')}
          >
            Alcaldes
          </button>
          <button
            className={`text-sm font-medium px-4 py-1 rounded-t-md transition-all cursor-pointer ${
              selectedSection === 'regidores'
                ? 'text-sky-600 border-b-2 border-sky-600 bg-white'
                : 'text-gray-500 hover:text-sky-500 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedSection('regidores')}
          >
            Regidores
          </button>
          <button
            className={`text-sm font-medium px-4 py-1 rounded-t-md transition-all cursor-pointer ${
              selectedSection === 'directorio'
                ? 'text-sky-600 border-b-2 border-sky-600 bg-white'
                : 'text-gray-500 hover:text-sky-500 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedSection('directorio')}
          >
            Funcionarios
          </button>

        </div>
      </div>

      {/* Sección Regidores */}
      {selectedSection === 'regidores' && regidors.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Regidores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regidors.map((regidor) => (
              <ListRegidorItem key={regidor.id} regidor={regidor} />
            ))}
          </div>
        </div>
      )}

      {/* Sección Directorio */}
      {selectedSection === 'directorio' && directorios?.data && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Funcionarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directorios.data.map((directorio) => (
              <ListDirectorioItem key={directorio.id} directorio={directorio} />
            ))}
          </div>

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
        </div>
      )}

      {/* Sección Alcaldes */}
      {selectedSection === 'alcaldes' && alcaldes.length > 0 && (
        <div>
          {/* Diana Plejo arriba si existe */}
          {alcaldesaDiana && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-600 text-center mb-2">Alcaldesa de Pillco Marca</h2>
              <div className="flex justify-center">
                <ListAlcaldeItem alcalde={alcaldesaDiana} />
              </div>
            </div>
          )}

          {/* Resto de alcaldes */}
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Alcaldes de Centros Poblados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otrosAlcaldes.map((alcalde) => (
              <ListAlcaldeItem key={alcalde.id} alcalde={alcalde} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
