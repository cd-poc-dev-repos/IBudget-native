import React from "react";
import dayjs from 'dayjs';
import { ScrollView, View, Button, ActivityIndicator } from "react-native";
import TextEntry from "../../../components/TextEntry/TextEntry";
import * as Service from '../../../api/Savings/SavingsService';
import * as Type from './SavingsEntry.type';

const SavingsEntry = ({ route, navigation }: Type.ISavingsEntry) => {
  const { id } = route.params;
  const newRecord = id === -1;
  const [form, setForm] = React.useState<Type.ISavingEntryForm | null>(null)

  const onChange = (field: string, value: string) => {
    if (!!form) setForm({...form, [field]: value });
  }

  const handleSave = () => {
    if (!!form) {
      if (newRecord) {
        Service.CreateSavings({ id, name: form.name, date: dayjs().format('YYYY-MM-DD'), value: form.amount });
      } else {
        Service.UpdateSavings({ id, name: form.name, date: dayjs().format('YYYY-MM-DD'), value: form.amount });
      }
    }

    navigation.navigate('Savings Summary')
  }

  React.useEffect(() => {
    const load = async () => {
      if (newRecord) {
        setForm({ name: '', date: '', amount: '' });
      } else {
        const Savingss = await Service.GetSavings();
        
        if (!!Savingss) {
          const Savings = Savingss.find(x => x.id === id);
          if (!!Savings) {
            setForm({ name: Savings.name, date: Savings.date, amount: Savings.value });
          }
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
