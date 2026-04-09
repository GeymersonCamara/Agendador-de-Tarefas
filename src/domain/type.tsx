export interface SupplierData {
  name: string;
  revenue: string;
  margin: string;
  percentMC: string;
}

export interface ChannelRevenue {
  channel: string;
  value: number;
  max: number;
}

export interface TabelaProps {
  tasks: Item[];
  suppliers: SupplierData[];
}

export type Item = {
  id: number;
  nome: string;
  concluido: boolean;
  criadoEm: string;
  concluidoEm?: string | null;
};

export type TableProps = {
  dados: Item[];
  onRemove: (id: number) => void;
  onCheck: (id: number) => void;
  completed: number;
};

export type ChartData = {
  label: string;
  total: number;
};