export interface ISyncStats {
  status: string;
}

export interface ITableData {
  accountId: string;
  active?: boolean;
  activeDate?: string;
  created?: string;
  icon?: string;
  iconBackground?: string;
  id?: string;
  live?: boolean;
  name?: string;
  sync?: boolean;
  syncStats?: ISyncStats;
  updated?: string;
}
