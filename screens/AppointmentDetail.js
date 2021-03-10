import React from 'react'
import { View, Image, SafeAreaView, StyleSheet, ActivityIndicator, Button, ScrollView, Text, Item } from 'react-native';

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ccffe6',
        width: '100%',
        height: '100vh',
    },
    innerBackground: {
        flexDirection: 'column',
        margin: 'auto',
        height: '48.125rem',
        width: '20.625rem',
        backgroundColor: 'white',
        borderRadius: '30px'
    },
    date: {
        paddingTop: 80,
        paddingLeft: 30,
        fontSize: '1.7rem',
       
    },
    time: {
        paddingTop: 30,
        paddingLeft: 30,
        fontSize: '1.7rem',
       
    },
    test: {
        paddingTop: 30,
        paddingLeft: 30,
        fontSize: '1.7rem',
        
    },
    test1: {
        paddingTop: 14,
        paddingLeft: 90,
        fontSize: '1.4rem',
        
    },
    test2: {
        paddingTop: 13,
        paddingLeft: 90,
        fontSize: '1.4rem',
        
    },
    total: {
        paddingTop: 100,
        paddingLeft: 160,
        fontSize: '1.7rem',
        
    },
    btn: {
        
        margin: 50
    }
})

const AppointementDetail = () => {
    return (
        <SafeAreaView>
            <View style={styles.background}>
                <View style={styles.innerBackground}>
                    <Text style={styles.date}>Date:  10 March 2021</Text>
                    <Text style={styles.time}>Time:  4.30pm</Text>
                    <Text style={styles.test}>Test:  </Text>
                    <Text style={styles.test1}>Test 1  </Text>
                    <Text style={styles.test2}>Test 2  </Text>
                    <Text style={styles.total}>Total  </Text>
                    <View style={styles.btn}>
                        <Button title='Confirm'></Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AppointementDetail