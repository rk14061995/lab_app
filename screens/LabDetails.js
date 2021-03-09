import React,{useState} from 'react';
import {View,Image,Text, StyleSheet, StatusBar,ScrollView,TextInput, TouchableOpacity,Button, SafeAreaView} from 'react-native';
const styles = StyleSheet.create({
   
  });

const LabDetails= ()=>{
  const api = [
                {
                    id:1,
                    name:'Path Lab',
                    contact_no:'+91-0000000000',
                    email:'mail@gmail.com',
                    website:'www.abc.com',
                    desc:' a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
                    img:require('../assets/images/blood.png'),
                    startTime:'10:00 AM',
                    closeTime:'5:30 PM',
                    location:'Noida',
                    tests:''
                }
      
];
const Test = {
                statusCode: 200,
                responseData: [
                    {
                        testId: 10,
                        testName: "ECG",
                        isChecked: false,
                        color: 0,
                        testParameterName: null,
                        fileName: null,
                        normalRange: null,
                        presentValue: null
                    },
                    {
                        testId: 11,
                        testName: "Blood RE",
                        isChecked: false,
                        color: 0,
                        testParameterName: null,
                        fileName: null,
                        normalRange: null,
                        presentValue: null
                    },
                    {
                        testId: 12,
                        testName: "CBC + ESR",
                        isChecked: false,
                        color: 0,
                        testParameterName: null,
                        fileName: null,
                        normalRange: null,
                        presentValue: null
                    },
                    ]
              };
              console.log(Test.responseData);
            
    return(
        <SafeAreaView style={{padding:15}}>
          {/* <View>
            <Text style={{fontSize:15,fontWeight:'bold', padding:10}}>Lab List</Text>
          </View> */}
          <View style={{backgroundColor:'red'}}>
            <Text style={{fontSize:15,fontWeight:'bold', padding:10}}>Lab List</Text>
          </View>
           
        </SafeAreaView>
    );
}
export default LabDetails;