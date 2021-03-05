import React,{useState} from 'react';
import {View,Image,Text, StyleSheet, StatusBar,ScrollView,TextInput, TouchableOpacity,Button, SafeAreaView} from 'react-native';
const styles = StyleSheet.create({
   
  });

const LabList= ()=>{
  const api = [
                {
                    id:1,
                    name:'Path Lab',
                    desc:' Test Description',
                    img:require('../assets/images/blood.png'),
                    startTime:'10:00 AM',
                    closeTime:'5:30 PM'
                },
                {
                    id:2,
                  name:'Path Lab',
                  desc:' Test Description',
                  img:require('../assets/images/blood.png'),
                  startTime:'10:00 AM',
                  closeTime:'5:30 PM'
              },
              {
                  id:3,
                name:'Path Lab',
                desc:' Test Description',
                img:require('../assets/images/blood.png'),
                startTime:'10:00 AM',
                closeTime:'5:30 PM'
            },
];
    return(
        <SafeAreaView>
            <ScrollView  vertical={true}
                            showsVerticalScrollIndicator={false}
                            scrollEventThrottle={100}
                            decelerationRate="fast"
                            pagingEnabled>
                              {
                                api.map(ap=>{
                                  return <View style={{backgroundColor:'red'}}>

                                  </View>
                                })
                              }

            </ScrollView>
        </SafeAreaView>
    );
}
export default LabList;