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

export interface Item {
  id: number;
  nome: string;
}

export type Props = {
  dados: Item[]
}