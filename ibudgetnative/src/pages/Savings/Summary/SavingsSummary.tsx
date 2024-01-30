import React from 'react';
import { View, VirtualizedList, SafeAreaView, Button } from 'react-native';
import * as Service from '../../../api/Income/IncomeService';
import { IIncome } from '../../../api/Income/IncomeService.type';

type ItemData = {
  id: string;
  title: string;
};

const getItem = (_data: unknown, index: number): ItemData => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data: unknown) => 10;

type ItemProps = {
  title: string;
  callback: () => void;
};

const Item = ({title, callback }: ItemProps) => (
  <View style={{ backgroundColor: '#fff', marginTop: 5, marginBottom: 5, paddingTop: 20, paddingRight: 10, paddingBottom: 20, paddingLeft: 10 }}>
    <Button title={title} onPress={callback}/>
  </View>
);

interface ISavingsSummaryProps {
  navigation: any;
}

const SavingsSummary = ({ navigation }: ISavingsSummaryProps) => {
  const [data, setData] = React.useState<IIncome[]>([]);

  React.useEffect(() => {
    const load = async () => {
      const incomes = await Service.GetIncomes();
  
      if (!!incomes) {
        setData(incomes);
        console.log('incomes', incomes);
      }
    }
  
    load();
  }, []);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({item}) => <Item title={item.title} callback={() => navigation.navigate('Savings Entry')}/>}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

export default SavingsSummary;