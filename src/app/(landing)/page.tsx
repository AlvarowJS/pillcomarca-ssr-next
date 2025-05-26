import { Normativa } from "@/components/servicios/Normativa";
import { Portada } from "@/components/servicios/Portada";
import ServiciosCarousel from "@/components/servicios/ServiciosCarousel";

export default function HomePage() {
  return (
    <div>
      <Portada />
      <ServiciosCarousel />
      <Normativa />
    </div>
  );
}