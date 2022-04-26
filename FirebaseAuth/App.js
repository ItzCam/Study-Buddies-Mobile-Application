import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MainMenu from './screens/MainMenu';
import ChatRoom from './screens/ChatRoom';
import Video from './screens/Video';

const Stack = createNativeStackNavigator();

export default function App() {
  const [props, setProps] = useState(initialState);
  return (
    <>
    <AppContext.Provider value={{props, setProps}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MainMenu} />
        <Stack.Screen name="Chat" component={ChatRoom} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});