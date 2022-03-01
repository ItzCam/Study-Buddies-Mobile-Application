<<<<<<< HEAD
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

=======
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
import CreateShiftScreen from "./components/SMDashboardComponenents/CreateShiftScreen";
import ProfileScreen from "./components/SMDashboardComponenents/ProfileScreen";
import EditProfileScreen from './components/SMDashboardComponenents/EditProfileScreen';
>>>>>>> main

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

<<<<<<< HEAD

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
=======
function SMDashboardTabs() {
    return (
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: "#302f90", tabBarLabelStyle: {fontSize: 11, fontWeight: "bold"}}}>
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="calendar" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Create Shift" component={CreateShiftScreen} options={{ tabBarIcon: () => (
                    <FontAwesome name="truck" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Volunteers" component={VolunteersScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="users" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false, tabBarIcon: () => (
                <FontAwesome name="user" color="#333333" size={25}/>),}}/>
        </Tab.Navigator>
    );
}

function VolunteerTabs() {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#302f90', labelStyle: {fontSize: 11, fontWeight: 'bold'}}}>
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="calendar" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Volunteers" component={VolunteersScreen} options={{ tabBarIcon: () => (
                <FontAwesome name="users" color="#333333" size={25}/>),}}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false, tabBarIcon: () => (
                <FontAwesome name="user" color="#333333" size={25}/>),}}/>
        </Tab.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name ="Profile Screen" component={ProfileScreen}/>
            <Stack.Screen name ="Edit Profile" component={EditProfileScreen}/>
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
                <Stack.Screen name="Volunteer Dashboard" component={VolunteerTabs} options={{headerShown: false}}/>
            </Stack.Navigator>

            {/*<StatusBar style="auto"/>*/}
        </NavigationContainer>

    );
>>>>>>> main
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
