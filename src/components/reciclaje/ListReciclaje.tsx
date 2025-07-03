'use client';

import { useEffect, useState } from 'react';
import { bdReciclaje } from '@/data/bdPresupuesto';

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const diasAbreviados = ['LU', 'MA', 'MI', 'JU', 'VI', 'SA'];

export const ListReciclaje = () => {
  const [selectedDia, setSelectedDia] = useState('Lunes');

  // Selección automática del día actual al cargar la página
  useEffect(() => {
    const hoy = new Date();
    const nombreDia = diasSemana[hoy.getDay() - 1]; // getDay: 0 (Dom) a 6 (Sáb)
    if (nombreDia) setSelectedDia(nombreDia);
  }, []);

  const residuoSeleccionado = bdReciclaje.find((item) =>
    item.dias.includes(selectedDia)
  );

  const diasColoreados = residuoSeleccionado?.dias || [];
  const tipoResiduo = residuoSeleccionado?.nombre_reciclable || '';

  const getColorByTipo = (tipo: string) => {
    if (tipo.includes('Orgánicos')) return 'bg-[#D97706] text-white';
    if (tipo.includes('No Reciclables')) return 'bg-black text-white';
    return 'bg-[#84CC16] text-white';
  };

  const colorActivo = getColorByTipo(tipoResiduo);
  const reciclajesDelDia = bdReciclaje.filter((item) => item.dias.includes(selectedDia));

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-6">

      {/* Tabs de días */}
      <div className="flex justify-center flex-wrap gap-2 border-b border-gray-200 pb-2">
        {diasSemana.map((dia, idx) => {
          const isRelacionado = diasColoreados.includes(dia);
          const isSelected = selectedDia === dia;

          return (
            <button
              key={dia}
              onClick={() => setSelectedDia(dia)}
              className={`px-4 py-2 font-semibold text-sm md:text-base rounded-md transition-all shadow-sm cursor-pointer
                ${isRelacionado ? colorActivo : 'bg-gray-100 text-gray-700'}
                ${isSelected ? '' : ''}
              `}
            >
              {/* Abreviado en móvil, completo en md+ */}
              <span className="block md:hidden">{diasAbreviados[idx]}</span>
              <span className="hidden md:block">{dia}</span>
            </button>
          );
        })}
      </div>

      {/* Contenido del reciclaje según el día */}
      {reciclajesDelDia.length > 0 ? (
        reciclajesDelDia.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md bg-[#FFF7ED]"
          >
            <div
              className={`text-center py-3 font-bold text-xl ${
                item.nombre_reciclable.includes('Orgánicos')
                  ? 'bg-[#D97706] text-white'
                  : item.nombre_reciclable.includes('No Reciclables')
                  ? 'bg-black text-white'
                  : 'bg-[#84CC16] text-white'
              }`}
            >
              {item.nombre_reciclable}
            </div>
            <div className="flex flex-col md:flex-row items-center p-6 gap-6 bg-white">
              <img
                src={item.imagen}
                alt={item.nombre_reciclable}
                className="w-150 h-auto object-contain"
              />
              <p className="text-gray-800 text-sm md:text-base text-justify">
                {item.descripcion_recicable}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">
          No hay residuos programados para este día.
        </p>
      )}
    </div>
  );
};
