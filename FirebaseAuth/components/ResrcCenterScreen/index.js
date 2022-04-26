import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import styles from './styles';

const features = [
  { 
    id: '1234',
    title: 'Friend Finder',
  },
  { 
    id: '2567',
    title: 'Chat',
  },
  { 
    id: '5555',
    title: 'Grade Calc',
  },
  { 
    id: '6666',
    title: 'GPA Calc',
  },
  { 
    id: '7777',
    title: 'Cloud',
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
        numColumns={'2'}
      />
    </SafeAreaView>
  );
}

export default ResrcCenterScreen;