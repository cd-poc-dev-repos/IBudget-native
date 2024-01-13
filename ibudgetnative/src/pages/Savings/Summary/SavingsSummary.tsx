import React from 'react';
import { View, VirtualizedList, Text, Button, ScrollView } from 'react-native';

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
};

const Item = ({title}: ItemProps) => (
  <View style={{ backgroundColor: '#fff', marginTop: 5, marginBottom: 5, paddingTop: 20, paddingRight: 10, paddingBottom: 20, paddingLeft: 10 }}>
    <Text>{title}</Text>
  </View>
);

interface ISavingsSummaryProps {
  navigation: any;
}

const SavingsSummary = ({ navigation }: ISavingsSummaryProps) => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View style={{ backgroundColor: '#fff', height: 64, width: '100%', flexDirection: 'row', padding: 20, columnGap: 30 }}>
        <Button title='Back' onPress={() => navigation.navigate('Home')}/>
        <Text style={{ color: 'rgb(28, 28, 30)', fontSize: 20, fontWeight: '500' }}>Savings summary</Text>
      </View>
      <View style={{ padding: 20 }}>
        <VirtualizedList
          initialNumToRender={4}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          />
        </View>
    </ScrollView>
  );
};

export default SavingsSummary;