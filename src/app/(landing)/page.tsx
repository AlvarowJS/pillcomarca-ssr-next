import { Normativa } from "@/components/servicios/Normativa";
import { Noticia } from "@/components/servicios/Noticia";
import { Portada } from "@/components/servicios/Portada";
import ServiciosCarousel from "@/components/servicios/ServiciosCarousel";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="shadow-lg mb-12 pb-12">
      <Portada />

      <h2 className="text-3xl font-bold text-sky-600 text-center mt-8">
        Servicios Municipales
      </h2>
      <ServiciosCarousel />

      <h2 className="text-3xl font-bold text-sky-600 text-center mt-8 pb-4  ">
        Documentos subidos recientemente</h2>
      <Normativa />
      <Link href="/normativas" className="block text-center text-blue-500 hover:underline mt-4">
        <button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors cursor-pointer">
          Ver todos
        </button>

      </Link>

      <h2 className="text-3xl font-bold text-sky-600 text-center mt-8">
        Noticias
      </h2>
      <Noticia />
      <Link href="/noticias" className="block text-center text-blue-500 hover:underline mt-4">
        <button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors cursor-pointer">
          Ver todas
        </button>
      </Link>
    </div>
  );
}