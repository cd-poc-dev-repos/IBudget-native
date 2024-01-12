import React from "react";
import { Text, View, Button } from 'react-native';

interface IHome {
  navigation: any;
}

const Home = ({ navigation }: IHome) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button title="Enter savings" onPress={() => navigation.navigate('Savings Summary')} />
    </View>
  );
};

export default Home;
