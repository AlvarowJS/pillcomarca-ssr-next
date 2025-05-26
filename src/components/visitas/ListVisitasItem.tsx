import { Visita } from "@/interfaces";
import React from 'react';
import { FaClock, FaUser } from 'react-icons/fa';

interface Props {
  visita: Visita;
}

export const ListVisitaItem = ({ visita }: Props) => {
  return (
    <tr className="border-t hover:bg-gray-50 text-sm text-gray-700">
      <td className="px-4 py-2 whitespace-nowrap">{visita.fecha}</td>
      <td className="px-4 py-2">{visita.depedencia.nombre_dependencia}</td>
      <td className="px-4 py-2 flex items-center gap-2">
        <FaUser className="text-blue-500" />
        {visita.usuario_publico.nombre} {visita.usuario_publico.apellidos}
      </td>
      <td className="px-4 py-2">{visita.usuario_publico.dni}</td>
      <td className="px-4 py-2">{visita.usuario_publico.persona}</td>
      <td className="px-4 py-2 flex items-center gap-1">
        <FaClock className="text-gray-500" />
        {visita.hora_ingreso}
      </td>
      <td className="px-4 py-2">{visita.hora_salida || '---'}</td>
    </tr>
  );
};
