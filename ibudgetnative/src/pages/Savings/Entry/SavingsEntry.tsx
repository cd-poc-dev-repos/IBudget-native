import React from "react";
import { ScrollView } from "react-native";
import TextEntry from "../../../components/TextEntry/TextEntry";
import DateTimePicker from "../../../components/DateTimePicker/DateTimePicker";
import * as Type from './SavingsEntry.type';

const SavingsEntry = ({ navigation }: Type.ISavingsEntry) => {
  const [form, setForm] = React.useState<Type.ISavingEntryForm>({ date: '', amount: '' })

  const onChange = (field: string, value: string) => {
    setForm({...form, [field]: value });
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <DateTimePicker placeholder="enter a date" />
      <TextEntry handleOnChange={(value) => onChange('amount', value)} value={form.amount} placeholder="enter an amount" />
    </ScrollView>
  );
};

export default SavingsEntry;
