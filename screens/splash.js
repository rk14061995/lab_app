import React,{Component} from 'react';
import {View,Image,SafeAreaView, StyleSheet, ActivityIndicator, Button} from 'react-native';
var logo = require('../assets/images/heal_logo.png')
export default class Splash extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/images/heal_logo.png')}/>
                <ActivityIndicator size="large" color="#0000ff" style={styles.loader}/>
                {
                    setInterval(()=>{
                      this.props.navigation.navigate('Login')
                    },3000)             
                }
                {/* <Button onPress={()=>{
                  setInterval(()=>{
                    this.props.navigation.navigation('Login')
                  },3000)
                  // this.props.navigation.navigate('Login')
                }} title="Login"/> */}
                </SafeAreaView>
        );
    }
}
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