import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, Component } from 'react';
import { KeyboardAvoidingView, Content, StyleSheet, Text, TextInput, TouchableOpacity, View, Icon, Dimensions, ScrollView, ImageBackground, ListItem, Pressable, SafeAreaView} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

class HomeScreen extends React.Component  {
  render(){
    return (
      <ImageBackground style = {{flex: 1}} source={{uri:'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg'}}>
        <View style = {styles.container}>
          <SafeAreaView style = {{flex: 1}}>
            <TouchableOpacity 
              style = {{alignItems: "flex-end", margin: 16}}
              onPress = {this.props.navigation.openDrawer}>
            </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile')
              }
                style={styles.button}
              >              
                <Text style={styles.buttonText}>Jump to your Profile</Text>
                </TouchableOpacity>
              </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
      )
  }
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    color: 'black'
  }
})