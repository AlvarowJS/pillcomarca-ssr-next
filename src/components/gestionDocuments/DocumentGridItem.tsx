'use client';

import { Gestion } from "@/interfaces";
import { LuDownload } from "react-icons/lu";

interface Props {
  gestion: Gestion;
}

export const DocumentGridItem = ({ gestion }: Props) => {
  return (
    <div className="my-5 border-4 p-2">
      <h2 className="text-3xl">
        {gestion.nombre}
      </h2>
      {
        gestion.gestiondetalle.map(lista => (
          <div className="bg-amber-50 flex p-4 m-2 cursor-pointer"
            onClick={() => window.open(lista?.link)}>
            <LuDownload />
            <p>
              {lista?.nombre}
            </p>
          </div>

        ))}
    </div>
  )
}
