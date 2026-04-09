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
  tasks: string
  Suppliers: SupplierData[]
}

export type Item = {
  id: number;
  nome: string;
  concluido: boolean;
  criadoEm: string;
  concluidoEm?: string;
};

export type Props = {
  dados: Item[]
  onRemove: (id:number) => void
  onCheck: (id:number) => void
  completed: number
}