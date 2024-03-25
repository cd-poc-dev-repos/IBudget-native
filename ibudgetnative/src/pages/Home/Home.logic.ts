import dayjs from "dayjs";
import * as IncomeService from "../../api/Income/IncomeService";
import * as SavingsService from "../../api/Savings/SavingsService";
import { IIncome } from "../../api/Income/IncomeService.type";
import { ISavings } from "../../api/Savings/SavingsService.type";

const LoadIncomeSummary = async () => {
  const incomesGrouped: { monthYear: string; amount: number }[] = [];
  const incomes = await IncomeService.GetIncomes();

  if (!incomes) return { labels: [], datasets: [] };

  incomes.forEach((income: IIncome) => {
    const incomeMonth = dayjs(income.date).format("MM/YY");
    const indexToUpdate = incomesGrouped.findIndex((x) => x.monthYear === incomeMonth);

    if (indexToUpdate !== -1) {
      incomesGrouped[indexToUpdate].amount += Number(income.value);
    } else {
      incomesGrouped.push({
        monthYear: incomeMonth,
        amount: Number(income.value),
      });
    }
  });

  return {
    labels: incomesGrouped.map(x => x.monthYear),
    datasets: [{ data: incomesGrouped.map(x => x.amount )}]
  };
};

const LoadSavingsSummary = async () => {
  const SavingssGrouped: { monthYear: string; amount: number }[] = [];
  const Savingss = await SavingsService.GetSavings();

  if (!Savingss) return { labels: [], datasets: [] };

  Savingss.forEach((Savings: ISavings) => {
    const SavingsMonth = dayjs(Savings.date).format("MM/YY");
    const indexToUpdate = SavingssGrouped.findIndex((x) => x.monthYear === SavingsMonth);

    if (indexToUpdate !== -1) {
      SavingssGrouped[indexToUpdate].amount += Number(Savings.value);
    } else {
      SavingssGrouped.push({
        monthYear: SavingsMonth,
        amount: Number(Savings.value),
      });
    }
  });

  return {
    labels: SavingssGrouped.map(x => x.monthYear),
    datasets: [{ data: SavingssGrouped.map(x => x.amount )}]
  };
};

export { LoadIncomeSummary, LoadSavingsSummary };
