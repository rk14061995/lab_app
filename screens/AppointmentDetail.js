import React from 'react'
import { View, Image, SafeAreaView, StyleSheet, ActivityIndicator, Button, ScrollView, Text, Item } from 'react-native';

const styles = StyleSheet.create({
   label:{
       fontSize:15
   }
})

const AppointementDetail = () => {
    return (
        <SafeAreaView style={{backgroundColor:'#cccffc',padding:10, height:'100%'}}>
            <View style={{margin:10, backgroundColor:'#fff',marginVertical:30 ,padding:20, borderRadius:25}}>
                <View >
                    <Text style={styles.label}>Date:  10 March 2021</Text>
                    <Text style={styles.label}>Time:  4.30pm</Text>
                    <Text style={styles.label}>Test:  </Text>
                    <Text style={styles.label}>Test 1  </Text>
                    <Text style={styles.label}>Test 2  </Text>
                    <Text style={styles.label}>Total  </Text>
                    <View style={styles.btn}>
                    <Button title='Confirm'></Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AppointementDetail