import { getNormativaId } from "@/app/lib/api/normativa";
import { Metadata } from "next";
import Link from "next/link";
import { FaLeftLong } from "react-icons/fa6";

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    try {
        const normativa = await getNormativaId(id);
        const { nombre, Tipodedocumento } = normativa.data.attributes;

        return {
            title: `${nombre}`,
            description: `${nombre} - ${Tipodedocumento?.nombre}`,
        }

    } catch (error) {
        return {
            title: 'Normativa no encontrada',
            description: `Busca una normativa válida ${error}`,
        }
    }
}

export default async function NormativaPage({ params }: Props) {
    const { id } = await params

    const normativa = await getNormativaId(id);

    const { nombre, descripcion, archivo, fecha, Tipodedocumento } = normativa.data.attributes;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md space-y-6">
            <Link href={`/normativas`} className="text-blue-600 hover:underline flex items-center gap-2">
                <FaLeftLong />
                Volver
            </Link>
            <h2 className="text-2xl font-semibold text-gray-800">{nombre}</h2>        
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-gray-100 rounded-full">
                    Tipo: {Tipodedocumento?.nombre}
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">
                    Fecha: {fecha}
                </span>
            </div>

            <p className="text-gray-700 leading-relaxed">{descripcion}</p>

            <a
                href={archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Descargar Documento
            </a>

            <div className="mt-6">
                <iframe
                    src={archivo}
                    className="w-full h-[500px] rounded-lg border border-gray-300 shadow"
                    title={nombre}
                ></iframe>
            </div>
        </div>
    );
}
