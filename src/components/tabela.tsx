import type { SupplierData } from "../domain/type";

const suppliers: SupplierData[] = [
  { name: "Fornecedor A", revenue: "R$5.124.316", margin: "R$869.986", percentMC: "17%" },
  { name: "Fornecedor B", revenue: "R$2.344.964", margin: "R$548.185", percentMC: "23%" },
  { name: "Fornecedor C", revenue: "R$878.548", margin: "R$319.229", percentMC: "36%" },
];

export function Table() {
  return (
    <table className="w-full text-left text-sm text-white/80 bg-[#102A59] rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-[#0B1F44]">
        <tr>
          <th className="py-3 px-6 font-semibold">Fornecedor</th>
          <th className="py-3 px-6 font-semibold">Receita</th>
          <th className="py-3 px-6 font-semibold">Margem</th>
          <th className="py-3 px-6 font-semibold">% MC</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map(({ name, revenue, margin, percentMC }) => (
          <tr
            key={name}
            className="border-b border-[#0B1F44] hover:bg-[#163462] transition-colors"
          >
            <td className="py-3 px-6">{name}</td>
            <td className="py-3 px-6">{revenue}</td>
            <td className="py-3 px-6">{margin}</td>
            <td className="py-3 px-6">{percentMC}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}