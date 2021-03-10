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
    backgroundColor: '#fff',
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
    height:200
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

const OtpVerification = ({ navigation}) => {

  const [ verification, setVerification ] = useState({
    otp: '',
  })

  const onChangeHandler = (inputName, inputValue) => {
    setVerification(preValues => {
      return {...preValues, [inputName]: inputValue}
    })
  }
  return (

    <View style={styles.container_login}>

      <Image style={styles.image} source={require("../assets/images/password.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="OTP"
          placeholderTextColor="#003f5c"
          value={verification.otp}
          onChangeText={value => onChangeHandler('otp', value)}
        />
      </View>
      <View style={{width:'68%', borderRadius:25}}>
        <Button title="Verify" style={styles.loginBtn} onPress={() => {
          // Alert.alert('Login Successfull')
          { verification.otp == 1234 ? (
            Alert.alert(
                  'Alert Title',
                  'Correct OTP', // <- this part is optional, you can pass an empty string
                  [
                    {text: 'OK', onPress: () => navigation.navigate('ResetPassword')},
                  ],
                  // {cancelable: false},
                )
          ): (
              Alert.alert(
                  'Alert Title',
                  'Wrong OTP', // <- this part is optional, you can pass an empty string
                  [
                    {text: 'OK'},
                  ],
                  // {cancelable: false},
                )
          ) }
          // navigation.navigate('Home')


        }}></Button>
      </View>
      
    </View>
  );
}

export default OtpVerification