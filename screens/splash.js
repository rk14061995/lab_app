import React,{Component} from 'react';
import {View,Image,Text} from 'react-native';
var logo = require('../assets/images/heal_logo.png')
export default class Splash extends Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            // this.props.navigation.navigate("Login");
        },3000);
        
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image source={logo}/>
                <Text></Text>
            </View>
        );
    }
}