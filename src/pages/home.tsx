import {
  BarChart2,
  Clock,
  Percent,
} from "lucide-react";
import { Sidebar } from "../components/menu-lateral";
import { Card } from "../components/card";
import { Table } from "../components/tabela";
import { Header } from "../components/header";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import type { Item } from "@/domain/type";

export function Home() {

  const [lista, setLista] = useState<Item[]>([])
  const [novoItem, setNovoItem] =useState<string>('')

  function adicionaItem() {
    if(novoItem.trim() === '') return

    const novoObjetoItem: Item = {
      id: Date.now(),
      nome: novoItem,
      concluido: false
    }

    setLista(prev => [...prev, novoObjetoItem])
    setNovoItem('')
  }

  function removerTarefa(id: number) {
    setLista(lista.filter(lista => lista.id !== id))
  }

  function concluirTarefa(id: number) {
    setLista(lista => lista.map(item => item.id === id ? {...item, concluido: !item.concluido } : item))
  }

  useEffect(() => {
    console.log("Mudou a lista: ", lista[0])
  }, [lista])

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
            <div className="w-full">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="text"
                  value={novoItem}
                  onChange={(e) => setNovoItem(e.target.value)}
                  placeholder="Digite a Tarefa"
                  className="bg-background/20 flex-1 px-3 py-2 rounded text-white"/>

                <Button
                  onClick={adicionaItem}
                  className="bg-chart-2 m-5 px-7 py-5">
                  Adicionar Tarefa
                </Button>
              </div>
              <div className="w-full">
                <Table
                  dados={lista}
                  onRemove={removerTarefa}
                  onCheck={concluirTarefa}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}