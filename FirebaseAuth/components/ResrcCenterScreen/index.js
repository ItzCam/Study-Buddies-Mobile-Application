import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import styles from './styles';

const features = [
  { 
    id: '1234',
    title: 'First Item',
  },
  { 
    id: '2567',
    title: 'Second Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ResrcCenterScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );   
//  return(null); // works fine when its null
}

export default ResrcCenterScreen;