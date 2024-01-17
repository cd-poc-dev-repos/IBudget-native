import React from "react";
import { Text, Button, View, ScrollView } from 'react-native';
import Savings from "./Charts/Savings/Savings";
import Income from "./Charts/Income/Income";
import * as Type from "./Home.type";

const Home = ({ navigation }: Type.IHome) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: '100%' }}>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '500', margin: 20 }}>Savings</Text>
          <Savings />
          <Button title="Enter savings" onPress={() => navigation.navigate('Savings Summary')} />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '500', margin: 20 }}>Income</Text>
          <Income />
          <Button title="Enter income" onPress={() => navigation.navigate('Income Summary')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
