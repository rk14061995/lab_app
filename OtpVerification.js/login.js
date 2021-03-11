import React,{useState} from 'react';
import {View,Image,Text, StyleSheet,Alert, StatusBar,TextInput, TouchableOpacity,Button} from 'react-native';
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width:200,
    height:200
  },

  inputView: {
    backgroundColor: "#FFC0CB",
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
    marginTop:5,
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

const Login = ({ navigation}) => {

  const [ login, setLogin ] = useState({
    email: '',
    password: ''
  })

  const onChangeHandler = (inputName, inputValue) => {
    setLogin(preValues => {
      return {...preValues, [inputName]: inputValue}
    })
  }
  return (

    <View style={styles.container_login}>

      <Image style={styles.image} source={require("../assets/images/microscope.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          value={login.email}
          onChangeText={value => onChangeHandler('email', value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={login.password}
          onChangeText={value => onChangeHandler('password', value)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={
          ()=>{
            Alert.alert(
              'Alert Title',
              'Login Successfull', // <- this part is optional, you can pass an empty string
              [
                {text: 'OK', onPress: () => navigation.navigate('Home')},
              ],
              // {cancelable: false},
            )
          //   Alert.alert('');
          //  const navigation= useNavigation(); 
          //  navigation.navigate('OtpVerification');
          }
        }>
          <Text style={styles.forgot_button} >Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:5,width:'70%'}}>
        <Button title="login" style={{marginTop:10}} onPress={() => {
          // Alert.alert('Login Successfull')
          Alert.alert(
            'Alert Title',
            'Login Successfull', // <- this part is optional, you can pass an empty string
            [
              {text: 'OK', onPress: () => navigation.navigate('Home')},
            ],
            // {cancelable: false},
          )
          // navigation.navigate('Home')


        }}></Button>
      </View>
      <View style={{marginTop:5,width:'70%'}}>
        <Button title="Create New Account." marginTop={20} onPress={() => {
          
          navigation.navigate('Register')
        }}></Button>  
      </View>
      

      
      

    </View>
  );
}

export default Login