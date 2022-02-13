import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, Component } from 'react';
import { KeyboardAvoidingView, Content, StyleSheet, Text, TextInput, TouchableOpacity, View, Icon, Dimensions, ScrollView, ImageBackground, ListItem, Pressable} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { auth } from '../firebase';
import App from '../App';


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return ( 
  <ImageBackground style = {{flex: 1}} source={{uri:'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg'}}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >   
          <Text style={{ fontSize: scale(20) }}>Welcome to Study Buddies!</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input} />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
              onPress={()=>navigation.navigate("MyDrawer")}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity
              onPress={() => navigation.navigate("Forgot Password")}
            >
               <Text style = {styles.linkText}>Forget Password?</Text>
            </TouchableOpacity>     
          </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default LoginScreen

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