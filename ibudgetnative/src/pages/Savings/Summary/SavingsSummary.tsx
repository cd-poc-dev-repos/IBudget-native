import React from 'react';
import { View, VirtualizedList, SafeAreaView, ActivityIndicator, Button } from 'react-native';
import * as Service from '../../../api/Income/IncomeService';
import { IIncome } from '../../../api/Income/IncomeService.type';

type ItemData = {
  id: string;
  title: string;
};

interface ItemProps {
  title: string;
  callback: () => void;
};

const Item = ({ title, callback }: ItemProps) => (
  <View style={{ backgroundColor: '#fff', marginTop: 5, marginBottom: 5, paddingTop: 20, paddingRight: 10, paddingBottom: 20, paddingLeft: 10 }}>
    <Button title={title} onPress={callback}/>
  </View>
);

interface ISavingsSummaryProps {
  navigation: any;
}

const SavingsSummary = ({ navigation }: ISavingsSummaryProps) => {
  const [data, setData] = React.useState<IIncome[]>([]);
  const [loading, setLoading] = React.useState(false);
  const getItemCount = (_data: IIncome[]) => data?.length ?? 0;

  const getItem = (_data: IIncome, index: number): ItemData => ({
    id: data[index].id,
    title: `${data[index].name} ${data[index].value}`,
  });

  React.useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const incomes = await Service.GetIncomes();
    
        if (!!incomes) {
          setData(incomes);
        }
      } finally {
        setLoading(false);
      }
    }
  
    load();
  }, []);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({item}) => <Item title={item.title} callback={() => navigation.navigate('Savings Entry', { id: item.id })} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
      {loading && <ActivityIndicator size="large" color="#00ff00" />}
    </SafeAreaView>
  );
};

export default SavingsSummary;