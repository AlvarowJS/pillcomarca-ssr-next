import { Convocatoria } from '@/interfaces';
import { useState } from 'react';

interface Props {
    convocatoria: Convocatoria;
}

export const ItemConvocatoria = ({ convocatoria }: Props) => {
    const [activeSection, setActiveSection] = useState<'bases' | 'resultados' | 'final' | null>(null);

    const toggleSection = (section: typeof activeSection) => {
        setActiveSection(prev => (prev === section ? null : section));
    };

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
            <div className='flex justify-between flex-col'>
                <div className="mb-4 flex justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{convocatoria.nombre}</h3>
                        <p className="text-sm text-gray-500">{new Date(convocatoria.created_at).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <span className={`inline-block mt-1 px-2 py-1 text-xs font-semibold rounded 
          ${convocatoria.estado === 'concluido' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                            {convocatoria.estado.toUpperCase()}
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6 py-2">
                    <button
                        onClick={() => toggleSection('bases')}
                        className={`px-4 py-2 rounded-lg font-medium border transition-all duration-200
      ${activeSection === 'bases'
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'text-blue-600 border border-blue-300 hover:border-blue-600 hover:text-blue-700'}
    `}
                    >
                        Bases
                    </button>

                    <button
                        onClick={() => toggleSection('resultados')}
                        className={`px-4 py-2 rounded-lg font-medium border transition-all duration-200
      ${activeSection === 'resultados'
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'text-blue-600 border border-blue-300 hover:border-blue-600 hover:text-blue-700'}
    `}
                    >
                        Resultados Evaluación Curricular
                    </button>

                    <button
                        onClick={() => toggleSection('final')}
                        className={`px-4 py-2 rounded-lg font-medium border transition-all duration-200
      ${activeSection === 'final'
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'text-blue-600 border border-blue-300 hover:border-blue-600 hover:text-blue-700'}
    `}
                    >
                        Resultado Final
                    </button>
                </div>

            </div>
            {activeSection === 'bases' && (
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Bases del Concurso:</h4>
                    {convocatoria.conv_base.map((item) => (
                        <div key={item.id} className="mb-2 border-l-4 border-blue-500 pl-3">
                            <p className="text-sm font-medium text-gray-800">{item.nombre}</p>
                            <a
                                href={item.archivo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Ver archivo
                            </a>
                            <p className="text-xs text-gray-400">{new Date(item.created_at).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}

            {activeSection === 'resultados' && (
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Resultados de la Evaluación Curricular:</h4>
                    {convocatoria.result_cv.map((item) => (
                        <div key={item.id} className="mb-2 border-l-4 border-yellow-500 pl-3">
                            <p className="text-sm font-medium text-gray-800">{item.nombre}</p>
                            <a
                                href={item.archivo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-yellow-700 hover:underline"
                            >
                                Ver archivo
                            </a>
                            <p className="text-xs text-gray-400">{new Date(item.created_at).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}

            {activeSection === 'final' && (
                <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Resultado Final:</h4>
                    {convocatoria.resultado.length > 0 ? (
                        convocatoria.resultado.map((item) => (
                            <div key={item.id} className="mb-2 border-l-4 border-green-600 pl-3">
                                <p className="text-sm font-medium text-gray-800">{item.nombre}</p>
                                <a
                                    href={item.archivo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-green-700 hover:underline"
                                >
                                    Ver archivo
                                </a>
                                <p className="text-xs text-gray-400">{new Date(item.created_at).toLocaleDateString()}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-600 italic">Aún no se han subido los documentos.</p>
                    )}
                </div>
            )}
        </div>
    );
};
