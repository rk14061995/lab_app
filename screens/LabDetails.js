import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, StatusBar, ScrollView, TextInput, TouchableOpacity, Button, SafeAreaView, ActivityIndicator } from 'react-native';
import { getLabList } from '../api/apicalls'


const LabDetails = (props) => {

  const [api, setApi] = useState([])
  const [spinner, setSpinner] = useState(true)

  // const preLoad = () => {
  //   getLabList().then(response => {
  //     console.debug('response', response.message)
  //     setApi(response.responseData.lab)
  //     setSpinner(false)
  //   })
  // }


  const dummyApi = [
    {
    labProcessID: 0,
    patientName: 'AAA',
    physicianName: 'AAA',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'AAA',
    location: 'Noida'
  },
    {
    labProcessID: 1,
    patientName: 'BBB',
    physicianName: 'BBB',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'BBB',
    location: 'Noida'
  },
    {
    labProcessID: 2,
    patientName: 'CCC',
    physicianName: 'CCC',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'CCC',
    location: 'Noida'
  },
    {
    labProcessID: 3,
    patientName: 'DDD',
    physicianName: 'DDD',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'DDD',
    location: 'Noida'
  },
    {
    labProcessID: 4,
    patientName: 'EEE',
    physicianName: 'EEE',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'EEE',
    location: 'Noida'
  },
    {
    labProcessID: 5,
    patientName: 'FFF',
    physicianName: 'FFF',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'FFF',
    location: 'Noida'
  },
    {
    labProcessID: 6,
    patientName: 'GGG',
    physicianName: 'GGG',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'GGG',
    location: 'Noida'
  },
    {
    labProcessID: 7,
    patientName: 'HHH',
    physicianName: 'HHH',
    gender: 'Male',
    testName: 'ECG',
    phoneNumber: 1234,
    userName: 'HHH',
    location: 'Noida'
  },
  ]

  // useEffect(() => {
  //   preLoad()
  // }, [])

  return (
    <SafeAreaView style={{ padding: 10, backgroundColor: '#e6e6fa' }}>
      <ScrollView>
        {/* {spinner && (<ActivityIndicator size='large' animating={spinner} color="#0000ff" />)} */}
        {dummyApi.map(ap => (
          <TouchableOpacity key={ap.labProcessID} onPress={() => {
            props.navigation.navigate('LabForm')
          }}>
            <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', borderRadius: 200 }}>
              <View style={{ backgroundColor: 'white', paddingTop: 40, paddingBottom: 40, width: '25%', alignItems: 'center' }}>
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