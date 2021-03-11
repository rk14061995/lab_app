import React from 'react'
import { View, Image, Text, StyleSheet, StatusBar, ScrollView, TextInput, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const Notification = () => {

    const api = [
        {
            title: 'ECG',
            message: 'Request Approved'
        },
        {
            title: 'Blood Test',
            message: 'Request Approved'
        },
        {
            title: 'Eye Test',
            message: 'Request Approved'
        },
        {
            title: 'Orthopedics',
            message: 'Request Approved'
        },
        {
            title: 'ENT',
            message: 'Request Approved'
        },
        {
            title: 'ECG',
            message: 'Request Approved'
        },
        {
            title: 'Polio',
            message: 'Request Approved'
        },
        {
            title: 'Covid',
            message: 'Request Approved'
        },
        {
            title: 'Ebola',
            message: 'Request Approved'
        },

    ]
    return (
        <SafeAreaView style={{ padding: 10, backgroundColor: '#e6e6fa' }}>
            <ScrollView>
                {api.map(ap => (
                    <TouchableOpacity key={ap.labProcessID} onPress={() => {
                        // console.debug(' Get Lab Details.. ');
                    }}>
                        <View style={{ marginTop: 10, marginBottom: 10, flexDirection: 'row', borderRadius: 200 }}>
                            <View style={{ backgroundColor: 'white', paddingTop: 40, paddingBottom: 40, width: '25%', alignItems: 'center' }}>
                                <Image source={require('../assets/images/med.png')} style={{ width: 50, height: 50 }} />
                            </View>
                            <View style={{ backgroundColor: '#f8f8ff', padding: 10, width: '75%' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline' }}> {ap.title}</Text>
                                <Text>{ap.message}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>



        </SafeAreaView>
    );
}

export default Notification