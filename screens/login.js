import React,{Component} from 'react';
import {View,Image,Text, StyleSheet, StatusBar,TextInput, TouchableOpacity,Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
    top_lab:{
      backgroundColor:'grey',
      height:'40%'
    },
    cat_:{
      backgroundColor:'green',
      height:70,
    
    },
    label:{
      color:'black',
      fontSize:15,
      padding:10
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center'
    }, 
    loader:{
      marginTop:50,
      
    },
    container_login: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    image: {
      marginBottom: 40,
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
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "blue",
    },
    register_now:{
  width: "70%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "blue",
    },
    loginText:{
      color:'white'
    }
  });

export default class Login extends Component{
  
    render(){
        return (
            
            <View style={styles.container_login}>
              
              <Image style={styles.image} source={require("../assets/images/dib.png")} />
        
              <StatusBar style="auto" />
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email."
                  placeholderTextColor="#003f5c"
                  onChangeText={(email) => setEmail(email)}
                />
              </View>
        
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password."
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                />
              </View>
        
              <TouchableOpacity>
                <Text style={styles.forgot_button} >Forgot Password?</Text>
              </TouchableOpacity>
        
                <Button title="login" style={styles.loginBtn} onPress={()=>{
                this.props.navigation.navigate('Dashboard')
                  
        
                }}></Button>
                <Button title="New Registration ?" style={styles.loginBtn} onPress={()=>{
                  this.props.navigation.navigate('Register')
                }}></Button>
             
            </View>
          ); 
    }
}
