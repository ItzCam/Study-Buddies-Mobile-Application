import React from "react";
import HomeScreen from "./HomeScreen";

export const FriendFinderScreen = ({navigation}) => <HomeScreen navigation={navigation} name = "Friend Finder"/>
export const GradeCalculatorScreen = ({navigation}) => <HomeScreen navigation={navigation} name = "Grade Calculator"/>
export const MissingBuddyScreen = ({navigation}) => <HomeScreen navigation={navigation} name = "Missing Buddy"/>
export const BuddyCloudScreen = ({navigation}) => <HomeScreen navigation={navigation} name = "Buddy Cloud"/>
export const ResourceCenterScreen = ({navigation}) => <HomeScreen navigation={navigation} name = "Resource Center"/>