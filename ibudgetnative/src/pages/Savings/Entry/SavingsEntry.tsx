import React from "react";
import { ScrollView, TextInput, View, Text, Button, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

interface ISavingsEntry {
  navigation: any;
}

interface ITextEntry {
  value: string;
  placeholder?: string;
  handleOnChange: (text: string) => void;
}

const TextEntry = ({ value, placeholder, handleOnChange }: ITextEntry) => {  
  return (
    <TextInput style={{ height: 60, padding: 10, backgroundColor: '#fff' }} value={value} onChangeText={handleOnChange} placeholder={placeholder} />
  )
}

const SavingsEntry = ({ navigation }: ISavingsEntry) => {
  const [text, setText] = React.useState("");

  const onChangeText = (text: string) => {
    setText(text);
  }

  return (
    <ScrollView stickyHeaderIndices={[0]}>
        <View style={{ backgroundColor: '#fff', height: 64, width: '100%', flexDirection: 'row', padding: 20, columnGap: 30 }}>
          <Button title='Back' onPress={() => navigation.navigate('Home')}/>
        <Text style={{ color: 'rgb(28, 28, 30)', fontSize: 20, fontWeight: '500' }}>Savings summary</Text>
      </View>
      <View style={{ padding: 20 }}>
        <TextEntry handleOnChange={onChangeText} value={text} placeholder="enter a value" />
      </View>
    </ScrollView>
  );
};

export default SavingsEntry;
