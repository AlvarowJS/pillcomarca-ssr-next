import { getNoticiaId } from "@/app/lib/api/noticia";

interface Props {
    params: { id: string };
}

export default async function NoticiaPage({ params }: Props) {
    const noticia = await getNoticiaId(params.id);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h3 className="text-3xl font-bold mb-6 text-blue-400">{noticia.titulo}</h3>

            <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
                <div className="w-auto">
                    <img
                        className="w-full h-64 object-cover rounded-lg mb-4"
                        src={noticia.noticia_imagenes[0].imagen}
                        alt={noticia.titulo}
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
                <div className="w-1/3 sm:w-1/2">
                    <div
                        dangerouslySetInnerHTML={{ __html: noticia.referencia }}
                    />
                </div>
            </div>
        </div>
    );
}
