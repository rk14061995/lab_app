import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, StatusBar, ScrollView, TextInput, TouchableOpacity, Button, SafeAreaView } from 'react-native';
const styles = StyleSheet.create({

});

const LabList = () => {

  const api = [
    {
      id: 1,
      name: 'Path Lab',
      desc: ' a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Noida'
    },
    {
      id: 2,
      name: 'Path Lab',
      desc: ' a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Dehradun'
    },
    {
      id: 3,
      name: 'Path Lab',
      desc: 'a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Gujrat'
    }, {
      id: 1,
      name: 'Path Lab',
      desc: 'a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Noida'
    },
    {
      id: 2,
      name: 'Path Lab',
      desc: 'a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Dehradun'
    },
    {
      id: 3,
      name: 'Path Lab',
      desc: ' a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Gujrat'
    },
    {
      id: 1,
      name: 'Path Lab',
      desc: 'a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Noida'
    },
    {
      id: 2,
      name: 'Path Lab',
      desc: ' a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Dehradun'
    },
    {
      id: 3,
      name: 'Path Lab',
      desc: ' a place equipped for experimental study in a science or for testing and analysis a research laboratory broadly : a place providing opportunity for experimentation, observation, or practice in a field of study.',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Gujrat'
    },
    {
      id: 1,
      name: 'Path Lab',
      desc: ' Test Description',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Noida'
    },
    {
      id: 2,
      name: 'Path Lab',
      desc: ' Test Description',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Dehradun'
    },
    {
      id: 3,
      name: 'Path Lab',
      desc: ' Test Description',
      img: require('../assets/images/blood.png'),
      startTime: '10:00 AM',
      closeTime: '5:30 PM',
      location: 'Gujrat'
    },
  ];
  return (
    <SafeAreaView style={{ padding: 15 }}>
      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 10 }}>Lab List</Text>
      </View>
      <ScrollView vertical={true}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
      >

        {
          api.map(ap => {
            return <TouchableOpacity onPress={() => {
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
                {/* <Text> {ap.name}</Text> */}
              </View>
            </TouchableOpacity>

          })
        }

      </ScrollView>
    </SafeAreaView>
  );
}
export default LabList;