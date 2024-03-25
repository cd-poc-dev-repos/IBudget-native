import React from 'react';
import { View, Text, VirtualizedList, SafeAreaView, ActivityIndicator, Pressable } from 'react-native';
import Income from '../../Home/Charts/Income/Income';
import * as Service from '../../../api/Income/IncomeService';
import * as Type from './IncomeSummary.type';
import * as Logic from './IncomeSummary.logic';
import * as Styled from './IncomeSummary.style';

const Item = ({ title, value, callback }: Type.ItemProps) => (
  <View style={{ marginTop: 10 }}>
    <Pressable style={Styled.default.listItem} onPress={callback}>
      <Text style={Styled.default.incomeText}>{title}</Text>
      <Text style={Styled.default.amountText}>{value}</Text>
    </Pressable>
  </View>
);

const IncomeSummary = ({ navigation }: Type.IIncomesSummaryProps) => {
  const [data, setData] = React.useState<Type.IIncome[]>([]);
  const [incomeTableData, setIncomeTableData] = React.useState<Type.ITableData>();
  const [loading, setLoading] = React.useState(false);
  const getItemCount = (_data: Type.IIncome[]) => data?.length ?? 0;

  const getItem = (_data: Type.IIncome, index: number): Type.ItemData => ({
    id: data[index].id,
    title: data[index].name,
    value: data[index].value
  });

  React.useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const incomes = await Service.GetIncomes();
    
        if (!!incomes) {
          const incomeTableData = await Logic.LoadIncomeSummary();
          
          setData(incomes);
          setIncomeTableData(incomeTableData);
        }
      } finally {
        setLoading(false);
      }
    }
  
    load();
  }, []);

  return (
    <SafeAreaView style={{ padding: 10 }}>
      {(!loading && !!data && !!incomeTableData) ? (
        <>
          <Income data={incomeTableData} />
          <Pressable style={Styled.default.button} onPress={() => navigation.navigate('Income Entry', { id: -1 })}><Text style={Styled.default.text}>New Income</Text></Pressable>
          <VirtualizedList
            initialNumToRender={4}
            renderItem={({item}) => <Item title={item.title} value={item.value} callback={() => navigation.navigate('Income Entry', { id: item.id })} />}
            keyExtractor={item => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </>
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </SafeAreaView>
  );
};

export default IncomeSummary;