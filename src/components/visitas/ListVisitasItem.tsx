import { Visita} from "@/interfaces";
import React from 'react'
import { FaClock, FaUser, FaBuilding } from 'react-icons/fa';
interface Props{
    document: Visita;
}

export const ListVisitaItem =({ document}: Props) => {
  return (
    <section className="bg-white shadow-lg rounded-lg py-6 px-4 mb-4 border-gray-300 border-1">
      <div className='flex gap-3 text-xs'>
        <div className="bg-green-500 text-white py-2 px-4 rounded-4xl">
          {document.fecha}
        </div>
        <div className="bg-green-500 text-white py-2 px-4 rounded-4xl">
          {document.depedencia.nombre_dependencia}
        </div>
      </div>

      <h4 className='text-gray-900 font-bold mt-4 flex items-center gap-2'>
        <FaUser className='text-blue-500' />
        {document.usuario_publico.nombre} {document.usuario_publico.apellidos}
      </h4>

      <article className="text-gray-700 mt-2">
        <span className="font-semibold">DNI:</span> {document.usuario_publico.dni} <br />
        <span className="font-semibold">Persona:</span> {document.usuario_publico.persona} <br />
        <span className="font-semibold">Hora de ingreso:</span> <FaClock className="inline text-gray-500" /> {document.hora_ingreso} <br />
        <span className="font-semibold">Hora de salida:</span> {document.hora_salida || '---'}
      </article>
    </section>
  );
};