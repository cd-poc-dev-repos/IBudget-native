import React from "react";
import { ScrollView, View, Button, ActivityIndicator } from "react-native";
import * as Service from '../../../api/Income/IncomeService';
import TextEntry from "../../../components/TextEntry/TextEntry";
import DateTimePicker from "../../../components/DateTimePicker/DateTimePicker";
import * as Type from './SavingsEntry.type';

const SavingsEntry = ({ route, navigation }: Type.ISavingsEntry) => {
  const { id } = route.params;
  const [form, setForm] = React.useState<Type.ISavingEntryForm | null>(null)

  const onChange = (field: string, value: string) => {
    if (!!form) setForm({...form, [field]: value });
  }

  const handleSave = () => {
    if (!!form) Service.UpdateIncome({ id, name: form.name, date: form.date, value: form.amount })
    navigation.navigate('Savings Summary')
  }

  React.useEffect(() => {
    const load = async () => {
      const incomes = await Service.GetIncomes();
  
      if (!!incomes) {
        const income = incomes.find(x => x.id === id);
        if (!!income) {
          setForm({ name: income.name, date: income.date, amount: income.value });
        }
      }
    }
  
    load();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <View>
        {!!form ? (
          <>
            <TextEntry handleOnChange={(value) => onChange('name', value)} value={form.name} placeholder="enter a name" />
            <TextEntry handleOnChange={(value) => onChange('amount', value)} value={form.amount} placeholder="enter an amount" />
            <DateTimePicker placeholder="enter a date" />
            <Button title="Save" onPress={handleSave}/>
          </>
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </ScrollView>
  );
};

export default SavingsEntry;
