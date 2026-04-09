import { Trash2Icon } from "lucide-react";
import type { Props } from "../domain/type";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export function Table( {dados, onRemove, onCheck}: Props ) {

  return (
    <table className="w-full text-left text-sm text-white/80 bg-[#102A59] rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-[#0B1F44]">
        <tr>
          <th className="py-3 px-6 font-semibold">ID</th>
          <th className="py-3 px-6 font-semibold">Nome</th>
          <th className="py-3 px-6 font-semibold">Concluido</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td className="py-3 px-6">{item.id}</td>
            <td className="py-3 px-6">{item.nome}</td>
            <td className="py-3 px-6">
              <div className="flex items-center justify-between gap-7">
                <Checkbox
                  checked={item.concluido}
                  onCheckedChange={() => onCheck(item.id)} />
                <Button  onClick={() => onRemove(item.id)} className="">
                  <Trash2Icon />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}