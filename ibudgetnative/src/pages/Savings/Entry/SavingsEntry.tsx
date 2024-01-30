import React from "react";
import { ScrollView, View, Button } from "react-native";
import TextEntry from "../../../components/TextEntry/TextEntry";
import DateTimePicker from "../../../components/DateTimePicker/DateTimePicker";
import * as Type from './SavingsEntry.type';

const SavingsEntry = ({ navigation }: Type.ISavingsEntry) => {
  const [form, setForm] = React.useState<Type.ISavingEntryForm>({ date: '', amount: '' })

  const onChange = (field: string, value: string) => {
    setForm({...form, [field]: value });
  }

  const handleSave = () => {
    console.log('form', form);
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <View>
        <DateTimePicker placeholder="enter a date" />
        <TextEntry handleOnChange={(value) => onChange('amount', value)} value={form.amount} placeholder="enter an amount" />
      </View>
      <View style={{ backgroundColor: '#fff', position: 'absolute', bottom: 1, width: '100%' }}>
        <Button title="Save" onPress={handleSave}/>
      </View>
    </ScrollView>
  );
};

export default SavingsEntry;
