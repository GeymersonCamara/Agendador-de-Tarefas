import {
  BarChart2,
  Percent,
} from "lucide-react";
import { Sidebar } from "../components/menu-lateral";
import { Card } from "../components/card";
import { Table } from "../components/tabela";
import { Header } from "../components/header";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import type { Item } from "@/domain/type";

export function Home() {

  const [lista, setLista] = useState<Item[]>(() => {
    const dadosSalvos = localStorage.getItem("tarefas");

    if (dadosSalvos) {
      try {
        return JSON.parse(dadosSalvos);
      } catch {
        return [];
      }
    }

    return [];
  });
  const [novoItem, setNovoItem] =useState<string>('')
  const hoje = new Date().toISOString().split("T")[0];
  const mesAtual = new Date().getMonth();

  function adicionaItem() {
    if(novoItem.trim() === '') return

    const novoId = lista.length > 0
      ? Math.max(...lista.map(item => item.id)) + 1
      : 1

    const novoObjetoItem: Item = {
      id: novoId,
      nome: novoItem,
      concluido: false,
      criadoEm: new Date().toISOString(),
    }

    setLista(prev => [...prev, novoObjetoItem])
    setNovoItem('')
  }

  function removerTarefa(id: number) {
    setLista(prev => prev.filter(item => item.id !== id))
  }

  function concluirTarefa(id: number) {
    setLista(lista =>
      lista.map(item =>
        item.id === id
          ? {
              ...item,
              concluido: !item.concluido,
              concluidoEm: !item.concluido
                ? new Date().toISOString()
                : undefined,
            }
          : item
      )
    );
  }

  const contarTarefasConcluidas = useMemo(() => {
    return lista.filter(lista => lista.concluido).length
  }, [lista])

  const media = useMemo(() => {
    return lista.length === 0 ? 0 : contarTarefasConcluidas / lista.length;
  }, [lista, contarTarefasConcluidas]);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(lista));
  }, [lista]);

  const tarefasHoje = useMemo(() => {
    return lista.filter(item =>
      item.concluidoEm?.startsWith(hoje)
    );
  }, [lista, hoje]);

  const tarefasMes = useMemo(() => {
    return lista.filter(item => {
      if (!item.concluidoEm) return false;
      const data = new Date(item.concluidoEm);
      return data.getMonth() === mesAtual;
    });
  }, [lista, mesAtual]);

  return (
      <div className="min-h-screen bg-primary flex text-white font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col px-20 pt-6 pb-10 gap-6">
          <Header />
        <div className="flex gap-6 w-full">
          <div className="flex gap-10 w-full grid grid-cols-2 items-start">
            <Card
              title="Fluxo Diario"
              value={tarefasHoje.length}
              subtitle={"Melhor mês: novembro\nR$1.189.150"}
              icon={<BarChart2 size={20} />}
              colorClasses="bg-chart-4"
            />
            <Card
              title="Fluxo Mensal"
              value={tarefasMes.length}
              subtitle={`Melhor mês: novembro\n${contarTarefasConcluidas}`}
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