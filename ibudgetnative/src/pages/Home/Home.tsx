import React from "react";
import { Text, View, Button, Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit';

interface IHome {
  navigation: any;
}

const Home = ({ navigation }: IHome) => {
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    fillShadowGradientOpacity: 0,
    color: (opacity = 1) => `#023047`,
    labelColor: (opacity = 1) => `#333`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  const chartData = {
    labels: ['01/01', '01/02', '01/03'],
    datasets: [{
      data: [1000, 2500, 3000],
    }]
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Savings</Text>
      <LineChart
        data={chartData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
      <Button title="Enter savings" onPress={() => navigation.navigate('Savings Summary')} />
    </View>
  );
};

export default Home;
