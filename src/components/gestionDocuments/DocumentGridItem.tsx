import { Gestion } from "@/interfaces";

interface Props {
    gestion: Gestion;
}

export const DocumentGridItem = ({gestion}: Props) => {
  return (
    <>
        <h2>
            {gestion.nombre}
        </h2>
    </>
  )
}
