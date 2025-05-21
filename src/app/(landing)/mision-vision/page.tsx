import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Misión y Visión | Municipalidad Distrital de Pillco Marca',
  description: 'Misión, Visión, objetivos y valores que brinda la Municipalidad Distrital de Pillco Marca',
  keywords: ['Valores', 'Misión', 'Visión', 'Municipalidad Distrital de Pillco Marca',
    'Pillco Marca', 'Distrito', 'Documentos', 'Servicios al ciudadano',
  ],
};

export default function MisionVisionPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-cyan-600 text-white p-5 md:p-6 lg:p-8 rounded-xl shadow-md flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-5 h-5 md:w-12 md:h-12 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Misión Distrital</h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg">"Promover el desarrollo inclusivo, integral y sostenible del distrito de Pillco Marca, con capacidad de gestión y servicios públicos de calidad, de una manera eficiente, transparente, integradora y responsable"</p>
        </div>

        <div className="bg-cyan-600 text-white p-5 md:p-6 lg:p-8 rounded-xl shadow-md flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-5 h-5 md:w-12 md:h-12 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Visión Distrital</h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg">"Pillco Marca distrito competitivo, promotor, ordenado, ecológico, turístico, moderno, seguro y solidario con calidad de vida, donde se conserva, respeta y se fomenta la cultura, los valores, la transparencia y la participación ciudadana"</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-cyan-500 text-white p-5 md:p-6 lg:p-8 rounded-xl shadow-md flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-5 h-5 md:w-12 md:h-12 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Valores</h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg mb-3 md:mb-4">Nuestros valores que constituyen la riqueza intangible que guiarán nuestros esfuerzos para fomentar y consolidar el desarrollo sostenible.</p>
          <ul className="list-disc pl-5 md:pl-6 space-y-2 md:space-y-3">
            <li className="text-sm md:text-base lg:text-lg">Respeto</li>
            <li className="text-sm md:text-base lg:text-lg">Empatía</li>
            <li className="text-sm md:text-base lg:text-lg">Responsabilidad</li>
            <li className="text-sm md:text-base lg:text-lg">Honestidad</li>
            <li className="text-sm md:text-base lg:text-lg">Vocación de servicio</li>
            <li className="text-sm md:text-base lg:text-lg">Compromiso Social</li>
            <li className="text-sm md:text-base lg:text-lg">Transparencia</li>
            <li className="text-sm md:text-base lg:text-lg">Trabajo en Equipo</li>
            <li className="text-sm md:text-base lg:text-lg">Predisposición al cambio</li>
          </ul>
        </div>

        <div className="bg-cyan-500 text-white p-5 md:p-6 lg:p-8 rounded-xl shadow-md flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-5 h-5 md:w-12 md:h-12 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Objetivos</h2>
          </div>
          <ul className="list-disc pl-5 md:pl-6 space-y-2 md:space-y-3">
            <li className="text-sm md:text-base lg:text-lg">OEI. 01 Fortalecer la gestión institucional</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 02 Promover el desarrollo humano y hábitos saludables</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 03 Ampliar los servicios básicos de calidad</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 04 Reducir los índices de inseguridad ciudadana</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 05 Disminuir la vulnerabilidad ante peligros</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 06 Fortalecer el cuidado del medio ambiente</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 07 Promover desarrollo territorial planificado</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 08 Promover el desarrollo económico local</li>
            <li className="text-sm md:text-base lg:text-lg">OEI. 09 Promover el ordenamiento en transporte</li>
          </ul>
        </div>
      </div>
    </div>
  );
}