import React,{useState, useEffect} from 'react';
import {View,Image,Text, StyleSheet, StatusBar,ScrollView,TextInput, TouchableOpacity,Button, SafeAreaView, ActivityIndicator} from 'react-native';

import { getLabList } from '../api/apicalls'


const LabDetails= ()=>{

  const [api, setApi ] = useState([])
  const [ spinner, setSpinner ] = useState(true)

  const preLoad = () => {
    getLabList().then(response => {
      // console.log("Runniing.....................")
      setApi(response.responseData.lab)
      setSpinner(false)
    })
  }

  useEffect(() => {
    preLoad()
  }, [])
            
    return(
        <SafeAreaView style={{padding:10, backgroundColor:'#e6e6fa'}}>
          <ScrollView>
            { spinner && ( <ActivityIndicator size='large' animating={spinner} color="#0000ff"/>)}
            {api.map(ap => (
            <TouchableOpacity key={ap.labProcessID} onPress={() => {
              // console.debug(' Get Lab Details.. ');
            }}>
              <View style={{  marginTop: 10, marginBottom: 10, flexDirection: 'row', borderRadius:200 }}>
                <View style={{ backgroundColor: 'white', paddingTop: 40, paddingBottom:40, width: '25%', alignItems: 'center' }}>
                  <Image source={require('../assets/images/med.png')} style={{ width: 50, height: 50 }} />
                </View>
                <View style={{ backgroundColor: '#f8f8ff', padding: 10, width: '75%' }}>
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
          </ScrollView>
         
         
           
        </SafeAreaView>
    );
}
export default LabDetails;