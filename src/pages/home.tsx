import {
  BarChart2,
  Percent,
} from "lucide-react";
import { Sidebar } from "../components/menu-lateral";
import { Card } from "../components/card";
import { Table } from "../components/tabela";
import { Header } from "../components/header";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import type { Item } from "@/domain/type";

export function Home() {

  const [lista, setLista] = useState<Item[]>([])
  const [novoItem, setNovoItem] =useState<string>('')

  function adicionaItem() {
    if(novoItem.trim() === '') return

    const novoId = lista.length > 0
      ? Math.max(...lista.map(item => item.id)) + 1
      : 1

    const novoObjetoItem: Item = {
      id: novoId,
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

  const contarTarefasConcluidas = useMemo(() => {
    return lista.filter(lista => lista.concluido).length
  }, [lista])

  const media = useMemo(() => {
    return lista.length === 0 ? 0 : contarTarefasConcluidas / lista.length;
  }, [lista, contarTarefasConcluidas]);

  return (
      <div className="min-h-screen bg-primary flex text-white font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col px-20 pt-6 pb-10 gap-6">
          <Header />
        <div className="flex gap-6 w-full">
          <div className="flex gap-6 w-full grid grid-cols-2 gap-4 items-start">
            <Card
              title="Fluxo Diario"
              value={contarTarefasConcluidas}
              subtitle={"Melhor mês: novembro\nR$1.189.150"}
              icon={<BarChart2 size={20} />}
              colorClasses="bg-chart-4"
            />
            <Card
              title="Média Diaria"
              value={contarTarefasConcluidas}
              subtitle={"Melhor mês: novembro\nR$1.189.150"}
              icon={<BarChart2 size={20} />}
              colorClasses="bg-chart-4"
            />
            <Card
              title="Fluxo Mensal"
              value={contarTarefasConcluidas}
              subtitle={`Melhor mês: novembro\n${contarTarefasConcluidas}`}
              icon={<BarChart2 size={20} />}
              colorClasses="bg-chart-4"
            />
            <Card
              title="Média Mensal"
              value={Number(media.toFixed(2))}
              subtitle={`${media.toFixed(2)}%`}
              icon={<Percent size={20} />}
              colorClasses="bg-chart-4"
            />
          </div>

          <div className="flex flex-col gap-4 w-2/3">
            
            <div className="flex items-center gap-4 w-full">
              <input
                type="text"
                value={novoItem}
                onChange={(e) => setNovoItem(e.target.value)}
                placeholder="Digite a Tarefa"
                className="bg-background/20 flex-1 px-3 py-2 rounded text-white"
              />

              <Button
                onClick={adicionaItem}
                className="bg-chart-2 px-7 py-5"
              >
                Adicionar Tarefa
              </Button>
            </div>

            <Table
              dados={lista}
              onRemove={removerTarefa}
              onCheck={concluirTarefa}
              completed={contarTarefasConcluidas}
            />
          </div>

        </div>
        </div>
      </div>
  );
}