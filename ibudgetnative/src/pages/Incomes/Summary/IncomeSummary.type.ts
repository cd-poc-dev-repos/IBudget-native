import { IIncome } from '../../../api/Income/IncomeService.type';
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

interface IIncomesSummaryProps {
  navigation: any;
}

export type { ITableData, IIncome, ItemData, ItemProps, IIncomesSummaryProps };
