import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Feather} from "@expo/vector-icons";

import{
  FriendFinderScreen,
  GradeCalculatorScreen,
  MissingBuddyScreen,
  BuddyCloudScreen,
  ResourceCenterScreen
} from "./screens"

const Stack = createNativeStackNavigator();

const DrawerNavigator = createDrawerNavigator({FriendFinderScreen,
  GradeCalculatorScreen,
  MissingBuddyScreen,
  BuddyCloudScreen,
  ResourceCenterScreen});

const DrawerContainer =  createAppContainer(DrawerNavigator);
export default function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
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