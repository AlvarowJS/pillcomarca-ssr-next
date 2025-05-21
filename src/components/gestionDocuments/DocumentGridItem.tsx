'use client';

import { Gestion } from "@/interfaces";
import { LuDownload } from "react-icons/lu";

interface Props {
  gestion: Gestion;
}

export const DocumentGridItem = ({ gestion }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl sm:w-1/3 md:max-w-1/4 lg:w-1/5">
      <h3 className="bg-blue-400 text-white text-center font-bold p-2">
        {gestion.nombre}
      </h3>
      <div>
        {
          gestion.gestiondetalle.map(lista => (
            <div
              key={lista.id}
              className="flex p-4 m-2 cursor-pointer hover:bg-gray-300 rounded-lg "
              onClick={() => window.open(lista?.link)}>
              <p>
                <LuDownload />
              </p>
              <p>
                {lista?.nombre}
              </p>

            </div>

          ))}
      </div>
    </div>
  )
}
