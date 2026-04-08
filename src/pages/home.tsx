import {
  BarChart2,
  Clock,
  Percent,
} from "lucide-react";
import { Sidebar } from "../components/menu-lateral";
import { Card } from "../components/card";
import { Table } from "../components/tabela";
import { Header } from "../components/header";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Home() {
  const [adicionar, setAdicionar] = useState<string[]>([])

  function adicionarTarefa(novaTarefa: string) {
    setAdicionar(prev => [...prev, novaTarefa])
  }

  return (
    <div className="min-h-screen bg-[#0A1B3C] flex text-white font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col px-20 pt-6 pb-10 gap-6">
        <Header />

        <div className="flex gap-6">
          <Card
            title="Fluxo Diario"
            value="R$9.681.527"
            subtitle={"Melhor mês: novembro\nR$1.189.150"}
            icon={<BarChart2 size={20} />}
            colorClasses="bg-blue-600"
          />
          <Card
            title="Fluxo Mensal"
            value="R$2.061.909"
            subtitle={"Melhor mês: novembro\nR$255.943"}
            icon={<Clock size={20} />}
            colorClasses="bg-green-500"
          />
          <Card
            title="Media Geral"
            value="21%"
            subtitle={"Melhor mês: janeiro\n22%"}
            icon={<Percent size={20} />}
            colorClasses="bg-pink-500"
          />
          <div>
            <div>
              <Button
                onClick={() => adicionarTarefa("Nova Tarefa")}> Adicionar Tarefa</Button>
            </div>
            <div className="flex-1">
              <Table tasks={adicionar}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}