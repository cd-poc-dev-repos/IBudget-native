interface IHome {
  navigation: any;
}

interface ITableData {
  labels: string[];
  datasets: {
    data: number[];
  }[]
}

export type { IHome, ITableData };

