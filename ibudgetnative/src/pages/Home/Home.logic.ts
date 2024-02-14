import dayjs from "dayjs";
import * as Service from "../../api/Income/IncomeService";
import { IIncome } from "../../api/Income/IncomeService.type";

const LoadIncomeSummary = async () => {
  const incomesGrouped: { monthYear: string; amount: number }[] = [];
  const incomes = await Service.GetIncomes();

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

export { LoadIncomeSummary };
