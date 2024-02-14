import React from "react";
import { Text, Pressable, View, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import Savings from "./Charts/Savings/Savings";
import Income from "./Charts/Income/Income";
import * as Type from "./Home.type";
import * as Logic from "./Home.logic";
import * as Styled from "./Home.style";

const Home = ({ navigation }: Type.IHome) => {
  const [incomeSummaryData, setIncomeSummaryData] = React.useState<Type.ITableData>();

  React.useEffect(() => {
    const load = async () => {
      try {
        const incomes = await Logic.LoadIncomeSummary();
            
        if (!!incomes) {
          setIncomeSummaryData(incomes);
        }
      } finally {
      }
    }
  
    load();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: '100%' }}>
      <ScrollView>
        <View>
          <Text style={Styled.default.text}>Income</Text>
          {!!incomeSummaryData ? <Income data={incomeSummaryData} /> : <ActivityIndicator size="large" color="#00ff00" />}
          <Pressable style={Styled.default.button} onPress={() => navigation.navigate('Income Summary')}>Enter income</Pressable>
        </View>
        <View>
          <Text style={Styled.default.text}>Savings</Text>
          <Savings />
          <Pressable style={Styled.default.button} disabled>Enter savings</Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
