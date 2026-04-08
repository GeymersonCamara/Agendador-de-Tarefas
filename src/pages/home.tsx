import {
  BarChart2,
  Clock,
  Percent,
} from "lucide-react";
import { Sidebar } from "../components/menu-lateral";
import { Card } from "../components/card";
import { Table } from "../components/tabela";
import { ProgressBar } from "../components/barra-progresso";
import type { ChannelRevenue } from "../domain/type";
import { Header } from "../components/header";

const channelRevenues: ChannelRevenue[] = [
  { channel: "Varejo", value: 3.9, max: 5 },
  { channel: "Distribuidoras", value: 3.0, max: 5 },
  { channel: "Online", value: 2.0, max: 5 },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#0A1B3C] flex text-white font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col px-20 pt-6 pb-10 gap-6">
        <Header />

        <div className="flex gap-6">
          <Card
            title="Receita Operacional"
            value="R$9.681.527"
            subtitle={"Melhor mês: novembro\nR$1.189.150"}
            icon={<BarChart2 size={20} />}
            colorClasses="bg-blue-600"
          />
          <Card
            title="Margem de Contribuição"
            value="R$2.061.909"
            subtitle={"Melhor mês: novembro\nR$255.943"}
            icon={<Clock size={20} />}
            colorClasses="bg-green-500"
          />
          <Card
            title="% MC Geral"
            value="21%"
            subtitle={"Melhor mês: janeiro\n22%"}
            icon={<Percent size={20} />}
            colorClasses="bg-pink-500"
          />
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <Table />
          </div>
          <div className="flex-1">
            <h3 className="mb-4 font-semibold text-white/80">Receita por canal</h3>
            {channelRevenues.map((item) => (
              <ProgressBar key={item.channel} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}