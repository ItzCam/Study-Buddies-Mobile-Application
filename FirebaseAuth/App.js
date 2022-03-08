//@refresh state
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Platform, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TitleScreen from './components/TitleComponents/TitleScreen';
import LoginScreen from "./components/TitleComponents/LoginScreen";
import SignUpScreen from "./components/TitleComponents/SignUpScreen";
import CreateProfileScreen from "./components/TitleComponents/CreateProfileScreen";
import ForgotPasswordScreen from './components/TitleComponents/ForgotPasswordScreen'
import ScheduleScreen from "./components/ScheduleScreen";
import VolunteersScreen from "./components/SMDashboardComponenents/VolunteersScreen";
import CreateMeetingScreen from "./components/SMDashboardComponenents/CreateMeetingScreen";
import ProfileScreen from "./components/SMDashboardComponenents/ProfileScreen";
import EditProfileScreen from './components/SMDashboardComponenents/EditProfileScreen';
import CalculatorScreen from "./components/SMDashboardComponenents/CalculatorScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SMDashboardTabs() {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: "#302f90", tabBarLabelStyle: {fontSize: 11, fontWeight: "bold"}}}>
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="calendar" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Create Meeting" component={CreateMeetingScreen} options={{ tabBarIcon: () => (
                    <FontAwesome name="pencil" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Buddy List" component={VolunteersScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="users" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false, tabBarIcon: () => (
                <FontAwesome name="user" color="#333333" size={25}/>),}}/>
        </Tab.Navigator>
    );
}

function FriendsTabs() {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#302f90', labelStyle: {fontSize: 11, fontWeight: 'bold'}}}>
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="calendar" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Friends List" component={FriendsListScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="users" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false, tabBarIcon: () => (
                <FontAwesome name="user" color="#333333" size={25}/>),}}/>
        </Tab.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name ="Profile " component={ProfileScreen}/>
            <Stack.Screen name ="Edit Profile" component={EditProfileScreen}/>
            <Stack.Screen name ="Calculator" component={CalculatorScreen}/>
        </Stack.Navigator>
    );
}


function App() {
    LogBox.ignoreAllLogs();
    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName={'Title'}>
                <Stack.Screen name="Title" component={TitleScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen}/>
                <Stack.Screen name="Create Profile" component={CreateProfileScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
                <Stack.Screen name="SM Dashboard" component={SMDashboardTabs} options={{headerShown: false}}/>
                <Stack.Screen name="Friend Dashboard" component={FriendsTabs} options={{headerShown: false}}/>
            </Stack.Navigator>

            {/*<StatusBar style="auto"/>*/}
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
