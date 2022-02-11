import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, Component } from 'react';
import { KeyboardAvoidingView, Content, StyleSheet, Text, TextInput, TouchableOpacity, View, Icon, Dimensions, ScrollView, ImageBackground, ListItem, Pressable, SafeAreaView} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  render(){
    return (
      <ImageBackground style = {{flex: 1}} source={{uri:'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg'}}>
        <View style = {styles.container}>
          <SafeAreaView style = {{flex: 1}}>
            <TouchableOpacity 
              style = {{alignItems: "flex-end", margin: 16}}
              onPress = {this.props.navigation.openDrawer}>
                <FontAwesome5 name = "bars" size={24} color="#161924" />
                <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style = {styles.text}>{this.props.name} Screen</Text>
                </View>
              </TouchableOpacity>
          </SafeAreaView>
        </View>
      </ImageBackground>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: '500',
  },
})