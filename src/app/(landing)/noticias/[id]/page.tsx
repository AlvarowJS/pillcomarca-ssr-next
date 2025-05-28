import { getNoticiaId } from "@/app/lib/api/noticia";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ id: string }>

}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    try {
        const { titulo } = await getNoticiaId(id);

        return {
            title: `${titulo}`,
            description: titulo
        }

    } catch (error) {
        return {
            title: 'Noticia no encontrada',
            description: `Busca una noticia válida ${error}`,
        }
    }
}

export default async function NoticiaPage({ params }: Props) {
    const { id } = await params
    const noticia = await getNoticiaId(id);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Link
                href="/noticias"
                className="text-blue-500 hover:underline mb-4 inline-block"
                aria-label="Volver a Noticias"
            >
                &larr; Volver a Noticias
            </Link>
            <h3 className="text-3xl font-bold mb-6 text-blue-400">{noticia.titulo}</h3>

            <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
                <div className="w-auto">
                    <Image
                        className="w-full h-64 object-cover rounded-lg mb-4"
                        src={noticia.noticia_imagenes[0].imagen}
                        alt={noticia.titulo}
                        width={600}
                        height={400}
                    />
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            Fecha: {noticia.fecha}
                        </span>
                        <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                            {noticia.categoria.nombre_categoria}
                        </span>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed">
                        {noticia.nota}
                    </p>
                </div>
                <div className="w-full max-w-full overflow-x-auto">

                    <div
                        dangerouslySetInnerHTML={{ __html: noticia.referencia }}
                    />
                </div>
            </div>
        </div>
    );
}
