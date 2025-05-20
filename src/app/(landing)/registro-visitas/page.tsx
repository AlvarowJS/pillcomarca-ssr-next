import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Registro de Visitas | Municipalidad Distrital de Pillco Marca',
  description: 'Consulta el registro de personas que ingresaron a la Municipalidad Distrital de Pillco Marca y las áreas que visitaron.',
  keywords: [ 'Registro de visitas', 'Control de ingreso',
    'Personas que visitaron la municipalidad', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Transparencia institucional', 'Áreas visitadas',
    'Historial de visitas', 'Acceso a oficinas municipales', 'Gestión de visitantes',
    'Ingreso de ciudadanos', 'Visitas a la municipalidad', 'Seguimiento de visitas',
    'Gobierno local Huánuco', 'Registro de atención al ciudadano'
  ],
};

export default function RegistroVisitaPage() {
  return (
    <div>
      <h1>Registro de visitas</h1>
    </div>
  );
}