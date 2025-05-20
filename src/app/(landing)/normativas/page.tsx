import { Normativa } from "@/components/normativas/Normativa";

export default function NormativasPage() {

  return (
    <>
      <div className="mb-4 mx-4">
        <h2 className="text-gray-900 text-4xl font-bold mt-4">
          Documentos Normativos
        </h2>
        <p className="">
          Documentos normativos como resoluciones, acuerdos de consejo, decretos, entre otros.
        </p>
      </div>
      <Normativa />
    </>
  );
}