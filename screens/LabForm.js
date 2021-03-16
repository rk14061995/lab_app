import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, CheckBox, Button, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const LabForm = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: "row", height: 320, borderBottomColor: 'red', borderBottomWidth: 2, }}>
                <View style={{ flex: 3, height: 200, }}>
                    <Image
                        style={styles.stretch}
                        source={{
                            uri: "https://reactnative.dev/img/tiny_logo.png",
                        }}
                    />
                    <View style={{ marginTop: 30 }}>
                        <Text
                            style={{
                                color: "yellow",
                                fontSize: 18,
                                fontWeight: "bold",
                                borderBottomColor: "gray",
                                borderBottomWidth: 1,
                            }}
                        >
                            Contact Details -
                  </Text>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
                            <View style={{ flex: 0.8, marginTop: 3 }}>
                                <Ionicons name="call" size={12} color="black" />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={{ fontSize: 11 }}>+91 0000000000</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
                            <View style={{ flex: 0.8, marginTop: 3 }}>
                                <Ionicons name="mail" size={12} color="black" />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={{ fontSize: 11 }}>example@gmail.com</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.8, flexDirection: "row", marginTop: 20 }}>
                            <View style={{ flex: 1, marginTop: 3 }}>
                                <Ionicons name="globe" size={12} color="black" />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={{ fontSize: 11 }}>www.abc.com</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4, marginLeft: 10 }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
                            Lab Name 1
                  </Text>
                        {/* <View style={{ flex: 1, flexDirection: "row", }}> */}
                        <View style={{ flexDirection: 'row', marginTop: 2 }}>
                            <View>
                                <Ionicons name="star" size={14} color="gold" />
                            </View>
                            <View>
                                <Ionicons name="star" size={14} color="gold" />
                            </View>
                            <View>
                                <Ionicons name="star" size={14} color="gold" />
                            </View>
                            <View>
                                <Ionicons name="star" size={14} color="gold" />
                            </View>
                            <View>
                                <Ionicons name="star" size={14} color="gold" />
                            </View>
                        </View>


                        {/* </View> */}
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flex: 0.7, marginTop: 4 }}>
                                <Ionicons name="stopwatch-outline" size={14} color="black" />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={{ fontSize: 14 }}>timings</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 22 }}>
                            <View style={{ flex: 0.7, marginTop: 2 }}>
                                <FontAwesome5 name="map-marker" size={14} color="black" />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={{ fontSize: 14 }}>address</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginTop: 50 }} >
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>About -</Text>

                        <Text style={{ marginTop: 20, justifyContent: "center", fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>

                </View>
            </View>
            <View style={{ flex: 1.4, paddingTop: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'red' }}>Test Detail</Text>
                <ScrollView style={styles.scrollView}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>

                        <CheckBox style={styles.checkbox} />
                        <Text style={{ marginTop: 6, fontSize: 15 }}>Do you like React Native?</Text>
                        <View style={{ flex: 4, marginTop: 2, flexDirection: 'row-reverse' }}>
                            <Text style={{ color: 'red', fontSize: 17 }}>$5</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ marginTop: 30 }}>
                    <Button
                        title="Select"

                        onPress={() => props.navigation.navigate('AppointmentDetail')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: "column",
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 50,
    },
    stretch: {
      width: "100%",
      height: 150,
      resizeMode: "stretch",
    },
  });

export default LabForm
