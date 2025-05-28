import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Historia Pillco Marca | Municipalidad Distrital de Pillco Marca',
  description: 'La historia y creación de nuestra Municipalidad Distrital de Pillco Marca',
  keywords: ['Historia de Pillco Marca', 'Creación del distrito', 'Municipalidad Distrital de Pillco Marca',
    'Huánuco', 'Pillco Marca', 'Historia del distrito', 'Desarrollo local', 'Fundación de Pillco Marca',
    'Gobierno local Huánuco', 'Identidad cultural', 'Distritos de Huánuco', 'Historia municipal',
    'Patrimonio de Pillco Marca', 'Cultura y tradición', 'Municipalidad de Huánuco'
  ],
};

export default function HistoriaPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">

      <div className="">

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-4">

          {/* Contenedor de Imagen - Lado Izquierdo */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/logos/muniantigua.jpg"
              alt="Historia de Pillco Marca"
              className="w-full h-auto rounded-lg shadow-md object-cover max-h-[500px]"
            />
          </div>

          {/* Contenedor de Texto - Lado Derecho */}
          <div className="w-full lg:w-1/2 lg:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4">
              HISTORIA Y CREACIÓN DEL DISTRITO DE PILLCO MARCA
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 text-justify text-base md:text-lg">
                Los territorios de Cayhuayna, Marabamba, Andabamba, Vichaycoto y otros lugares que formaban parte del Pillco Mayo, (Janan pillco) hoy conocido como el valle del Huallaga, durante el periodo colonial español se convirtieron en tierras bajo el dominio de los españoles.
              </p>
              <p className="text-gray-700 text-justify text-base md:text-lg">
                Estas tierras fueron distribuidas como Encomiendas por los españoles. Según José Vara Llanos en Historia de Huánuco, el primer encomendero fue Gómez Arias Dávila, conquistador que participó en la fundación de Huánuco, por lo que las tierras de Cayhuayna le fueron concedidas por la corona española en 1549. Posteriormente, pasaron a manos de Martín Alfonso de Mercadillo, medio hermano de Francisco Pizarro.</p>
            </div>
          </div>

        </div>
        <div className="container mx-auto p-4">
          <p className="text-gray-700 mb-4 md:text-lg text-justify">
            El territorio que actualmente ocupa Cayhuayna, el Janan Pillco del Ichog Pillco Mayo, en épocas precolombinas pertenecieron al grupo étnico nativo los Mazgos y el Rurin Pillco estaban ocupados por los Chupachos.
          </p>
          <p className="text-gray-700 mb-4 md:text-lg text-justify">
            Gómez Arias Dávila habría sido el primer encomendero que ocupó el repartimiento de Chupachos, así pues, Gómez Arias Dávila era el encomendero del valle de Huallaga, según el Titulo otorgado por el Virrey Conde de Nieva por provisión del 1 de setiembre de 1548 que le otorgó la encomienda de los Chupachos que inicialmente perteneció a Martín de Alcántara. Gómez Arias Dávila muere en la ciudad de Huánuco el 30 de Julio de 1562, sus restos según Vara llanos yace en la Iglesia de San Francisco, donde está sepultado.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-4">


          {/* Contenedor de Texto - Lado Derecho */}
          <div className="w-full lg:w-1/2 ">

            <div className="space-y-4">
              <p className="text-gray-700 text-justify text-base md:text-lg">
                Tras la muerte de Gómez Arias Dávila, Cayhuayna pasó por varios dueños, incluyendo a Ricardo Dávila Martel y Bernardo Quiroz. El 5 de enero de 1563, el Conde de Nieva designó como heredero a Juan Arias Dávila (hijo menor de Gómez), bajo la tutela de su madre, María Castellón y de Lara, quien gestionó su reconocimiento como encomendero de los Chupachos, tomando posesión el 1 de marzo de 1563. Posteriormente, en 1646, las tierras fueron vendidas por un hermano de Diego de las Casas a Francisco Fernández de García, quien se convirtió en dueño de las chacras de Cayhuayna, cerca de Huánuco.
              </p>

            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/logos/imagenhistori.jpg"
              alt="Historia de Pillco Marca"
              className="w-full h-auto rounded-lg shadow-md object-cover max-h-[500px]" />
          </div>

        </div>
        <div className="container mx-auto p-4">
          <p className="text-gray-700 mb-4 md:text-lg text-justify">
            De esta fecha hasta el periodo de la república se desconoce los posibles dueños del territorio de Cayhuayna, una investigación especializada y minuciosa podrían determinar en orden cronológico los dueños por la que pasó las tierras de Cayhuayna.</p>
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4">Cayhuayna en el periodo de la República</h2>
          <p className="text-gray-700 mb-4 md:text-lg text-justify">
            Cayhuayna en los primeros años de la etapa republicana pasó a formar parte de una Hacienda hasta el año de 1974. Cayhuayna pertenecía al terrateniente o hacendado llamado Augusto Figueroa Villamil, el último de los que condujo esta hacienda era la señora Sofía Figueroa.
            Con la Ley de la Reforma Agraria, en el gobierno del Presidente de la República el General Juan Velasco Alvarado fue afectado Cayhuayna, pasando en consecuencia a formar parte de una empresa asociativa conducido por sus trabajadores bajo la denominación de Cooperativa Agraria de Trabajadores General “Juan Velasco Alvarado” que duró hasta el año de 1989.</p>
        </div>
        <div className="container mx-auto p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4">Cayhuayna a partir del año de 1974.</h2>
          <p className="text-gray-700 mb-4 md:text-lg text-justify">Cayhuayna a partir del año 1974, se convierte en una Cooperativa Agraria de Trabajadores “General Velasco Alvarado”, empresa asociativa conformado por 79 socios.


            La Cooperativa de Cayhuayna, territorialmente estaba conformado por 4 parcelas denominado lotes: lote 1, Lote 2, Lote 3 y Lote 4.


            Asimismo, estaban inmerso en esta Cooperativa los predios de Huancachupa y Pitumama con 615 Hectáreas, igualmente conformaban Colpa Alta y Chicchuy. La cooperativa tuvo vigencia por un lapso de 14 años hasta el año de 1989 a partir de este año, las cooperativas acuerdan parcelarse las tierras quedando parcelada dicha Cooperativa.
          </p>
        </div>
        <div className="container w-full">
          <Image
            src="/images/logos/muniactual.jpg"
            alt="Historia de Pillco Marca"
            className="w-full h-auto rounded-lg shadow-md object-cover max-h-[500px]" />

        </div>
        <div className="container mx-auto p-4">
          <div className="w-full">

            <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4">Cayhuayna hasta la actualidad</h2>
            <p className="text-gray-700 mb-4 md:text-lg text-justify">
              La expansión urbana de Cayhuayna comenzó en 1985 con la transferencia de 74 hectáreas por parte de la Cooperativa Agraria “General Velasco Alvarado” a una asociación pro vivienda. En 1989, mediante la Resolución Directoral N.º 0105-89-UNA-XIV-III, se aprobó la parcelación beneficiando a 113 socios. Desde entonces, la zona creció rápidamente sin planificación urbana adecuada.
            </p>
            <p className="text-gray-700 mb-4 md:text-lg text-justify">
              A partir de 1993, se instalaron diversas instituciones públicas como ENCI, la Universidad Nacional Hermilio Valdizán, su huerto frutícola y el pabellón de Medicina Veterinaria, además del nuevo penal, garita policial, y el cuartel militar.
            </p>
            <p className="text-gray-700 mb-4 md:text-lg text-justify">
              Para impulsar la distritalización, se convocó al Primer Congreso de Unificación en junio de 1999, conformándose el Comité Central de Distritalización presidido por el Lic. Alejandro Rubina López, junto a dirigentes sociales y profesionales. Se elaboró un proyecto técnico y se recolectaron más de 4,500 firmas de respaldo. Este fue presentado ante el CTAR Huánuco y enviado al Consejo de Ministros, siendo observado en tres ocasiones hasta finalmente ser aprobado.
            </p>
            <p className="text-gray-700 mb-4 md:text-lg text-justify">
              El proyecto final, elaborado por 15 especialistas en solo 12 días, fue aprobado por el Consejo de Ministros el 14 de diciembre de 1999 y enviado al Congreso el día siguiente. Sin embargo, el Congreso ya había cerrado su legislatura, por lo que se otorgaron facultades a la Comisión Permanente para promulgar la ley. Tras postergaciones, el Proyecto de Ley N.º 5525 fue aprobado el 27 de abril del 2000 y promulgado el 5 de mayo del 2000 como Ley N.º 27258, creando el Distrito de Pillco Marca.
            </p>
            <p className="text-gray-700 mb-4 md:text-lg text-justify">
              A pesar de las críticas, el distrito se creó cumpliendo con todos los requisitos del D.S. N.º 044-PCM-90, demostrando la capacidad de gestión del Lic. Rubina López, quien lideró el proceso sin interés personal, logrando un hito en tiempo récord de siete meses. Desde su creación, han gobernado tres alcaldes: Rubina López (2003-2006), Isabel Dávila (2007-2010) y Rolando Meza (2011-2014).</p>


          </div>
        </div>
      </div>
    </div>
  );
}