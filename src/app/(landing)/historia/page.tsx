import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Historia Pillco Marca | Municipalidad Distrital de Pillco Marca",
  description: "La historia y creación de nuestra Municipalidad Distrital de Pillco Marca",
  keywords: [
    "Historia de Pillco Marca",
    "Creación del distrito",
    "Municipalidad Distrital de Pillco Marca",
    "Huánuco",
    "Pillco Marca",
    "Historia del distrito",
    "Desarrollo local",
    "Fundación de Pillco Marca",
    "Gobierno local Huánuco",
    "Identidad cultural",
    "Distritos de Huánuco",
    "Historia municipal",
    "Patrimonio de Pillco Marca",
    "Cultura y tradición",
    "Municipalidad de Huánuco"
  ]
};

export default function HistoriaPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-8 md:px-8 lg:px-12 space-y-8 mt-8 lg:mt-16 mb-8 lg:mb-16">
      <section className="flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/2">
          <Image
            src="/images/logos/muniantigua.jpg"
            alt="Historia de Pillco Marca"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4">
            HISTORIA Y CREACIÓN DEL DISTRITO DE PILLCO MARCA
          </h2>
          <p className="text-gray-700 text-justify text-base md:text-lg">
            Los territorios de Cayhuayna, Marabamba, Andabamba, Vichaycoto y otros lugares que formaban parte del Pillco Mayo, (Janan pillco) hoy conocido como el valle del Huallaga, durante el periodo colonial español se convirtieron en tierras bajo el dominio de los españoles.
          </p>
          <p className="text-gray-700 text-justify text-base md:text-lg mt-4">
            Estas tierras fueron distribuidas como Encomiendas por los españoles. Según José Vara Llanos en Historia de Huánuco, el primer encomendero fue Gómez Arias Dávila, conquistador que participó en la fundación de Huánuco, por lo que las tierras de Cayhuayna le fueron concedidas por la corona española en 1549. Posteriormente, pasaron a manos de Martín Alfonso de Mercadillo, medio hermano de Francisco Pizarro.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-gray-700 text-justify md:text-lg">
          El territorio que actualmente ocupa Cayhuayna, el Janan Pillco del Ichog Pillco Mayo, en épocas precolombinas pertenecieron al grupo étnico nativo los Mazgos y el Rurin Pillco estaban ocupados por los Chupachos.
        </p>
        <p className="text-gray-700 text-justify md:text-lg">
          Gómez Arias Dávila habría sido el primer encomendero que ocupó el repartimiento de Chupachos. Según el Título otorgado por el Virrey Conde de Nieva el 1 de septiembre de 1548, le fue otorgada la encomienda de los Chupachos, que inicialmente perteneció a Martín de Alcántara. Gómez Arias Dávila murió en Huánuco el 30 de julio de 1562. Sus restos, según Vara Llanos, reposan en la Iglesia de San Francisco.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/2">
          <p className="text-gray-700 text-justify md:text-lg">
            Tras la muerte de Gómez Arias Dávila, Cayhuayna pasó por varios dueños, incluyendo a Ricardo Dávila Martel y Bernardo Quiroz. El 5 de enero de 1563, el Conde de Nieva designó como heredero a Juan Arias Dávila, bajo la tutela de su madre María Castellón y de Lara, quien gestionó su reconocimiento como encomendero. En 1646, las tierras fueron vendidas a Francisco Fernández de García.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/logos/imagenhistori.jpg"
            alt="Historia de Pillco Marca"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-gray-700 text-justify md:text-lg">
          Desde entonces hasta la época republicana se desconoce quiénes fueron los propietarios de Cayhuayna. Se requiere una investigación especializada para reconstruir la historia de la propiedad de estas tierras.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500">Cayhuayna en el periodo de la República</h2>
        <p className="text-gray-700 text-justify md:text-lg">
          En la etapa republicana, Cayhuayna formó parte de una hacienda hasta 1974, perteneciente a Augusto Figueroa Villamil. La última administradora fue Sofía Figueroa. Con la Reforma Agraria, Cayhuayna pasó a ser una cooperativa agraria, dirigida por sus trabajadores, bajo el nombre de Cooperativa Agraria de Trabajadores &ldquo;General Juan Velasco Alvarado&rdquo;, que duró hasta 1989.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500">Cayhuayna a partir del año 1974</h2>
        <p className="text-gray-700 text-justify md:text-lg">
          La cooperativa estuvo formada por 79 socios y dividida en cuatro lotes, incluyendo los predios de Huancachupa, Pitumama, Colpa Alta y Chicchuy. En 1989, se acordó parcelar la cooperativa, disolviéndose la organización.
        </p>
      </section>

      <section>
        <Image
          src="/images/logos/muniactual.jpg"
          alt="Historia de Pillco Marca"
          width={800}
          height={500}
          className="rounded-lg shadow-md object-cover w-full"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-500">Cayhuayna hasta la actualidad</h2>
        <p className="text-gray-700 text-justify md:text-lg">
          En 1985, la cooperativa transfirió 74 hectáreas a una asociación pro vivienda. En 1989, se aprobó la parcelación beneficiando a 113 socios. El crecimiento urbano fue desordenado. En 1993, llegaron instituciones públicas como la UNHEVAL, el penal, garita policial y cuartel militar.
        </p>
        <p className="text-gray-700 text-justify md:text-lg">
          En 1999, se formó el Comité Central de Distritalización presidido por el Lic. Alejandro Rubina López. Se elaboró el proyecto técnico, se recolectaron firmas y se presentó el expediente ante el CTAR Huánuco y el Consejo de Ministros.
        </p>
        <p className="text-gray-700 text-justify md:text-lg">
          El proyecto fue aprobado por el Consejo de Ministros el 14 de diciembre de 1999 y enviado al Congreso. La Ley N.º 27258 fue promulgada el 5 de mayo del 2000, creando el distrito de Pillco Marca.
        </p>
        <p className="text-gray-700 text-justify md:text-lg">
          Desde su creación, han gobernado tres alcaldes: Rubina López (2003-2006), Isabel Dávila (2007-2010) y Rolando Meza (2011-2014).
        </p>
        <p className="text-gray-700 text-justify md:text-lg">
          Actualmente, la Municipalidad Distrital de Pillco Marca continúa trabajando por el desarrollo integral del distrito, con enfoque en servicios públicos, infraestructura y bienestar de su población.
        </p>
      </section>
    </div>
  );
}
