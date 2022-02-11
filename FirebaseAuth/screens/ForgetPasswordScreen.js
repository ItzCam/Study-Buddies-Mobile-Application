import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, Component } from 'react'
import { KeyboardAvoidingView, Content, StyleSheet, Text, TextInput, TouchableOpacity, View, Icon, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { auth } from '../firebase'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ForgetPasswordScreen = () => {
    const navigation = useNavigation()

    return(
    <ImageBackground style = {{flex: 1}} source={{uri:'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg'}}>
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >               
     <Text style={{ fontSize: scale(20) }}>Please enter your email below:</Text>

      <View style={styles.inputContainer}>
              <TextInput
              placeholder="Email"
              style={styles.input}/>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.buttonText}>Send Link</Text>
              </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </ImageBackground>
    )
}


export default ForgetPasswordScreen

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