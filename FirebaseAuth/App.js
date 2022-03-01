import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core'
import 'react-native-gesture-handler';
import React from 'react';
import {Alert, KeyboardAvoidingView, Content, StyleSheet, Text, TextInput, TouchableOpacity, View, Icon, Dimensions, ScrollView, ImageBackground, ListItem, Pressable, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import {createAppContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from 'firebase';


const Stack = createNativeStackNavigator();


const handleLogin = () => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
}

const Drawer = createDrawerNavigator()

function FriendFinderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function GradeCalculatorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}function MissingBuddyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}function BuddyCloudScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}function ResourceCenterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
} 
const Signout = () => {
  const handleSignOut = () => {
    const navigation = useNavigation()
    auth
      .signOut()
      .then(() => {
        navigation.goBack("Login")
      })
      .catch(error => alert(error.message))
  }
    return (
        <TouchableOpacity
          onPress={handleSignOut}
          >
        </TouchableOpacity>
    );
  }
  
function MyDrawer(){
  return(
  <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Friend Finder" component={FriendFinderScreen} />
      <Drawer.Screen name="Missing Buddy" component={MissingBuddyScreen} />
      <Drawer.Screen name="Grade Calculator" component={ GradeCalculatorScreen} />
      <Drawer.Screen name="Buddy Cloud" component={BuddyCloudScreen} />
      <Drawer.Screen name="Resource Center" component={ResourceCenterScreen} />
      <Drawer.Screen name="Sign out" component={Signout} />
  </Drawer.Navigator>)
}


export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      options={{ headerShown: false }}> 
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Forgot Password" component={ForgetPasswordScreen} />
            <Stack.Screen name="Confirm" component={ConfirmScreen} />  
      </Stack.Navigator> 
    </NavigationContainer>
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