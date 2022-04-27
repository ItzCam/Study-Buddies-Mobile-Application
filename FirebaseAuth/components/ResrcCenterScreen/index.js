import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from 'react-native';
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

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const ResrcCenterScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = "#f6a827";
    const color = 'white';

    return(
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  
  if(selectedId === '1234'){
    navigation.navigate('Friend Finder');
  } else if(selectedId === '2567'){
    navigation.navigate('Chat Room');
  } else if(selectedId === '5555'){
    navigation.navigate('Grade Calc')
  } else if(selectedId === '6666'){
    navigation.navigate('GPA Calc')
  } else if(selectedId === '7777'){
    navigation.navigate('Buddy Cloud')
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        numColumns={'2'}
      />
    </SafeAreaView>
  );
}

export default ResrcCenterScreen;