import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ITableData } from "../../Home.type";

interface IIncomeTable {
  data: ITableData
}

const Income = ({ data }: IIncomeTable) => {
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    fillShadowGradientOpacity: 0,
    color: (opacity = 1) => `#023047`,
    labelColor: (opacity = 1) => `#333`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
    decimalPlaces: 2,
  };

  return (
    <LineChart
      data={data}
      height={220}
      width={screenWidth}
      chartConfig={chartConfig}
    />
  );
};

export default Income;
