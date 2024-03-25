import { ISavings } from '../../../api/Savings/SavingsService.type';
import { ITableData } from '../../Home/Home.type';

type ItemData = {
  id: string;
  title: string;
  value: string;
};

interface ItemProps {
  title: string;
  value: string;
  callback: () => void;
}

interface ISavingssSummaryProps {
  navigation: any;
}

export type { ITableData, ISavings, ItemData, ItemProps, ISavingssSummaryProps };
