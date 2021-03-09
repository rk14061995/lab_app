import React,{useState, useEffect} from 'react';
import {View,Image,Text, StyleSheet, StatusBar,ScrollView,TextInput, TouchableOpacity,Button, SafeAreaView} from 'react-native';
import { getLabListById } from '../api/apicalls'
const styles = StyleSheet.create({
   
  });

const LabDetails= ()=>{

  // const [api, setApi ] = useState([])

  // const preLoad = () => {
  //   getLabListById().then(response => {
  //     setApi(response.responseData)
  //   })
  // }
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
              // console.log(Test.responseData);
            
    return(
        <SafeAreaView style={{padding:15}}>
          {/* <View>
            <Text style={{fontSize:15,fontWeight:'bold', padding:10}}>Lab List</Text>
          </View> */}
         {Test.map(ap => (
           <TouchableOpacity onPress={() => {
            console.debug(' Get Lab Details.. ');
          }}>
            <View key={ap.Id} style={{ backgroundColor: 'red', padding: 10, marginTop: 10, marginBottom: 10, flexDirection: 'row' }}>
              <View style={{ backgroundColor: 'white', padding: 15, width: '25%', alignItems: 'center' }}>
                <Image source={require('../assets/images/med.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ backgroundColor: 'lightgrey', padding: 10, width: '75%' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline' }}> {ap.name}</Text>
                <Text>{ap.desc}</Text>
                <Text > {ap.Id}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text> {ap.startTime} - </Text>
                  <Text> {ap.closeTime}</Text>
                  <Text style={{ textAlign: 'right' }}> {ap.location}</Text>
                </View>

              </View>
            </View>
          </TouchableOpacity>
         ))}
           
        </SafeAreaView>
    );
}
export default LabDetails;