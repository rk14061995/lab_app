import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  top_lab: {
    backgroundColor: 'grey',
    height: '40%'
  },
  cat_: {
    backgroundColor: 'green',
    height: 70,

  },
  label: {
    color: 'black',
    fontSize: 15,
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#cccffc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader: {
    marginTop: 50,

  },
  container_login: {
    flex: 1,
    backgroundColor: "#cccffc",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,

    width:200,
    height:200,
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,

    textAlign:'center',
    width:'70%',
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
  register_now: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
  loginText: {
    color: 'white'
  }
});

const ResetPassword = ({ navigation}) => {

  const [ reset, setReset ] = useState({
    password: '',
    confirmPassword: ''
  })

  const onChangeHandler = (inputName, inputValue) => {
    console.debug(inputName + ' ' + inputValue)
    setReset(preValues => {
      return {...preValues, [inputName]: inputValue}
    })
  }
  return (

    <View style={styles.container_login}>


      <Image style={styles.image} source={require("../assets/images/rotation-lock.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={reset.password}
          onChangeText={value => onChangeHandler('password', value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={reset.confirmPassword}
          onChangeText={value => onChangeHandler('confirmPassword', value)}
        />
      </View>

      <Button title="RESET PASSWORD" style={styles.loginBtn} onPress={() => {
        // Alert.alert('Login Successfull')
        Alert.alert(
          'Alert Title',
          'Password Reset', // <- this part is optional, you can pass an empty string
          [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ],
          // {cancelable: false},
        )
        // navigation.navigate('Home')


      }}></Button>

    </View>
  );
}

export default ResetPassword

