import React from "react";
import { Text, Pressable, View, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import Savings from "./Charts/Savings/Savings";
import Income from "./Charts/Income/Income";
import * as Type from "./Home.type";
import * as Logic from "./Home.logic";
import * as Styled from "./Home.style";

const Home = ({ navigation }: Type.IHome) => {
  const [incomeSummaryData, setIncomeSummaryData] = React.useState<Type.ITableData>();
  const [savingsSummaryData, setSavingsSummaryData] = React.useState<Type.ITableData>();

  React.useEffect(() => {
    const load = async () => {
      try {
        const incomes = await Logic.LoadIncomeSummary();
        const savings = await Logic.LoadSavingsSummary();

        if (!!incomes) {
          setIncomeSummaryData(incomes);
        }

        if (!!savings) {
          setSavingsSummaryData(savings);
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
          <Text style={Styled.default.title}>Income</Text>
          {!!incomeSummaryData ? <Income data={incomeSummaryData} /> : <ActivityIndicator size="large" color="#00ff00" />}
          <Pressable style={Styled.default.button} onPress={() => navigation.navigate('Income Summary')}><Text style={Styled.default.text}>Enter income</Text></Pressable>
        </View>
        <View>
          <Text style={Styled.default.title}>Savings</Text>
          {!!savingsSummaryData ? <Savings data={savingsSummaryData} /> : <ActivityIndicator size="large" color="#00ff00" />}
          <Pressable style={Styled.default.button} onPress={() => navigation.navigate('Savings Summary')}><Text style={Styled.default.text}>Enter savings</Text></Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
