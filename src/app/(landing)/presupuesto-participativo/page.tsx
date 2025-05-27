import bdPresupuesto from "@/data/bdPresupuesto";


export const metadata = {
    title: 'Presupuesto Participativo | Municipalidad Distrital de Pillco Marca',
    description: 'Presupuesto Participativo de la Municipalidad Distrital de Pillco Marca',
    keywords: ['Presupuesto Participativo', 'Municipalidad Distrital de Pillco Marca',
        'Pillco Marca', 'Participación ciudadana', 'Inversiones municipales',
        'Proyectos comunitarios', 'Desarrollo local', 'Transparencia municipal',
        'Planificación participativa', 'Recursos públicos', 'Desarrollo sostenible']
};
export default function PresupuestoParticipativoPage() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-gray-900 text-4xl font-bold mt-4">Presupuesto Participativo </h2>
            <p className="text-gray-600 mb-6">
                Aquí encontrarás los documentos relacionados con el presupuesto participativo de la Municipalidad Distrital de Pillco Marca.
                Estos documentos incluyen informes, anexos y otros recursos relevantes para la comunidad.
            </p>
            {bdPresupuesto.map((item) => (
                <div
                    key={item.id}
                    className="bg-white shadow-md rounded-xl p-6 mb-10 border border-gray-100"
                >
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-blue-600 mb-1">
                            {item.titulo}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Publicado el: <span className="font-medium">{item.fecha}</span> — Año: {item.year}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            📎 Anexos
                        </h3>
                        <ul className="space-y-2">
                            {item.anexos.map((anexo) => (
                                <li key={anexo.id}>
                                    <a
                                        href={anexo.archivo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 text-sm text-blue-700 transition"
                                    >
                                        {anexo.nombre}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            📄 Informes
                        </h3>
                        <ul className="space-y-2">
                            {item.informes.map((informe) => (
                                <li key={informe.id}>
                                    <a
                                        href={informe.archivo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 rounded-lg bg-gray-50 hover:bg-green-50 border border-gray-200 text-sm text-green-700 transition"
                                    >
                                        {informe.nombre}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}