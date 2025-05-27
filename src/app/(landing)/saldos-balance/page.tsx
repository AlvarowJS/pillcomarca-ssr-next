import { SaldosBalance } from "@/components/saldos/SaldosBalance";

export default function SaldosBalancePage() {
  return (
    <div>
      <div className="mb-4 mx-4">
        <h2 className="text-gray-900 text-4xl font-bold mt-4">
          Saldos de Balance
        </h2>
        <p className="">
          Saldos de Balance de la Municipalidad Distrital de Pillco Marca.
        </p>

        <SaldosBalance />
      </div>

    </div>
  );
}