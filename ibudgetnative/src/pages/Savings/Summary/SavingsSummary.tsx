import React from 'react';
import { View, Text, VirtualizedList, SafeAreaView, ActivityIndicator, Pressable } from 'react-native';
import Savings from '../../Home/Charts/Savings/Savings';
import * as Service from '../../../api/Savings/SavingsService';
import * as Type from './SavingsSummary.type';
import * as Logic from './SavingsSummary.logic';
import * as Styled from './SavingsSummary.style';

const Item = ({ title, value, callback }: Type.ItemProps) => (
  <View style={{ marginTop: 10 }}>
    <Pressable style={Styled.default.listItem} onPress={callback}>
      <Text style={Styled.default.SavingsText}>{title}</Text>
      <Text style={Styled.default.amountText}>{value}</Text>
    </Pressable>
  </View>
);

const SavingsSummary = ({ navigation }: Type.ISavingssSummaryProps) => {
  const [data, setData] = React.useState<Type.ISavings[]>([]);
  const [SavingsTableData, setSavingsTableData] = React.useState<Type.ITableData>();
  const [loading, setLoading] = React.useState(false);
  const getItemCount = (_data: Type.ISavings[]) => data?.length ?? 0;

  const getItem = (_data: Type.ISavings, index: number): Type.ItemData => ({
    id: data[index].id,
    title: data[index].name,
    value: data[index].value
  });

  React.useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const Savings = await Service.GetSavings();
    
        if (!!Savings) {
          const SavingsTableData = await Logic.LoadSavingsSummary();
          
          setData(Savings);
          setSavingsTableData(SavingsTableData);
        }
      } finally {
        setLoading(false);
      }
    }
  
    load();
  }, []);

  return (
    <SafeAreaView style={{ padding: 10 }}>
      {(!loading && !!data && !!SavingsTableData) ? (
        <>
          <Savings data={SavingsTableData} />
          <Pressable style={Styled.default.button} onPress={() => navigation.navigate('Savings Entry', { id: -1 })}><Text style={Styled.default.text}>New Savings</Text></Pressable>
          <VirtualizedList
            initialNumToRender={4}
            renderItem={({item}) => <Item title={item.title} value={item.value} callback={() => navigation.navigate('Savings Entry', { id: item.id })} />}
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

export default SavingsSummary;