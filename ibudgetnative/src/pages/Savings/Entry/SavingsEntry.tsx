import React from "react";
import { SafeAreaView, TextInput } from "react-native";

const SavingsEntry = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput onChangeText={onChangeText} value={text} />
      <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default SavingsEntry;
