import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Income = () => {
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
    decimalPlaces: 0,
  };

  const chartData = {
    labels: ["01/01", "01/02", "01/03"],
    datasets: [
      {
        data: [3000, 3000, 3250],
      },
    ],
  };

  return (
    <LineChart
      height={220}
      data={chartData}
      width={screenWidth}
      chartConfig={chartConfig}
    />
  );
};

export default Income;
