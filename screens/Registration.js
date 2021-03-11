import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, StyleSheet, ActivityIndicator, TextInput, Button, Alert } from 'react-native';

const Registration = ({ navigation }) => {
  const [register, setRegister] = useState({
    fullname: '',
    mobile: '',
    email: '',
    password: ''
  })
  
  const onChangeHandler = (inputName, inputValue) => {
    setRegister(preValues => {
      return { ...preValues, [inputName]: inputValue }
    })
  }
  return (
    <View style={styles.container_login}>
      <Image style={styles.image} source={require("../assets/images/voter.png")} />

      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          value={register.fullname}
          placeholderTextColor="#003f5c"
          onChangeText={value => onChangeHandler('name', value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile No."
          value={register.mobile}
          placeholderTextColor="#003f5c"
          onChangeText={value => onChangeHandler('mobile', value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          value={register.email}
          placeholderTextColor="#003f5c"
          onChangeText={value => onChangeHandler('email', value)}
        />
      </View>


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          value={register.password}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={value => onChangeHandler('password', value)}
        />
      </View>
      <View style={{width:'70%'}}>
        <Button title="Register" style={styles.register_now} onPress={() => {
          // navigation.navigate('Register')
          // console.debug('Redirect to Register Page');
          Alert.alert(
            'Alert Title',
            'Registration Successfull', // <- this part is optional, you can pass an empty string
            [
              { text: 'OK', onPress: () => navigation.navigate('Login') },
            ],
            // {cancelable: false},
          )

        }}></Button>
      </View>

    </View>
  )
}
export default Registration;
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
    backgroundColor: "#cccfff",
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

    width:'100%',
    textAlign:'center',
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