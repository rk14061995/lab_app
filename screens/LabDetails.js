import React,{useState, useEffect} from 'react';
import {View,Image,Text, StyleSheet, StatusBar,ScrollView,TextInput, TouchableOpacity,Button, SafeAreaView} from 'react-native';
import { getLabList } from '../api/apicalls'


const LabDetails= ()=>{

  const [api, setApi ] = useState([])

  const preLoad = () => {
    getLabList().then(response => {
      setApi(response.responseData.lab)
    })
  }

  useEffect(() => {
    preLoad()
  }, [])
            
    return(
        <SafeAreaView style={{padding:15}}>
          {/* <View>
            <Text style={{fontSize:15,fontWeight:'bold', padding:10}}>Lab List</Text>
          </View> */}
         {api.map(ap => (
           <TouchableOpacity key={ap.labProcessID} onPress={() => {
            console.debug(' Get Lab Details.. ');
          }}>
            <View style={{ backgroundColor: 'red', padding: 10, marginTop: 10, marginBottom: 10, flexDirection: 'row' }}>
              <View style={{ backgroundColor: 'white', padding: 15, width: '25%', alignItems: 'center' }}>
                <Image source={require('../assets/images/med.png')} style={{ width: 50, height: 50 }} />
              </View>
              <View style={{ backgroundColor: 'lightgrey', padding: 10, width: '75%' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline' }}> {ap.patientName}</Text>
                <Text>{ap.physicianName}</Text>
                <Text > {ap.gender}</Text>
                <Text > {ap.testName}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text> {ap.phoneNumber} - </Text>
                  <Text> {ap.userName}</Text>
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