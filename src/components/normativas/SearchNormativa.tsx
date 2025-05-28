import { TipoDeDocumento } from "@/interfaces";
import { useState } from "react";

interface FilterProps {
  tipodedocumento_id?: string;
  year?: string;
  nombre?: string;
  page?: string;
}
interface Props {
  tipos: TipoDeDocumento[] | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const SearchNormativa = ({ tipos, setFilters, setCurrentPage }: Props) => {
  const [formValues, setFormValues] = useState({
    tipodedocumento_id: "",
    year: "",
    nombre: "",
    page: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilters(formValues);
  };

  const handleClear = () => {
    setFormValues({
      tipodedocumento_id: "",
      year: "",
      nombre: "",
      page:""
    });
    setCurrentPage(1)
    setFilters({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-2 font-bold text-gray-700">Filtrar por:</p>

      <div className="flex gap-6 justify-center flex-col">
        {/* Tipo de documento */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Tipo de documento</label>
          <select
            name="tipodedocumento_id"
            value={formValues.tipodedocumento_id}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Todos</option>
            {tipos?.map(tipo => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Año */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Filtrar por Año</label>
          <select
            name="year"
            value={formValues.year}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Todos</option>
            {Array.from({ length: 10 }, (_, i) => {
              const year = 2025 - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Buscar por nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 border border-gray-300 text-base text-gray-900 placeholder:text-gray-400 focus:outline-blue-600 sm:text-sm"
            placeholder="Ingrese un nombre..."
          />
        </div>

        {/* Botones */}
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-400"
          >
            Limpiar
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};
