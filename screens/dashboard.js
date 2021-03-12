import { useLinkProps } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Button,
  ScrollView,
  Text,
  Item,
  Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAllTestList } from "../api/apicalls";

const Dashboard = (props) => {

  const [api, setApi] = useState([])
  const [spinner, setSpinner] = useState(true)

  const win = Dimensions.get('window')

  const ratio = win.width/389
  

  const preLoad = () => {
    getAllTestList().then(response => {
      setApi(response.responseData)
      setSpinner(false)
    })
  }

  useEffect(() => {
    preLoad()
  }, [])

  let images = [
    require("../assets/images/b1.png"), // Local image
    require("../assets/images/b3.png"),
    require("../assets/images/b1.png"), // Local image
    require("../assets/images/b3.png"),
  ];





  // let categories = ['Blood Test', 'Skin Test', 'Lipid Test', 'RBC Test'];
  let labs = ["Dr Path Lab", "Batra Lab", "Lal Path", "Chabra Labss", "Chabra Labss", "Chabra Labss", "Chabra Labss", "Chabra Labss", "Chabra Labss", "Chabra Labss", "Chabra Labss"];


  return (
    <ScrollView style={{ flex: 1, flexDirection: "column" }}>
      {/* <View>
                    <Image source={require('../assets/images/b1.png')}/>
                </View> */}

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          decelerationRate="fast"
          pagingEnabled
        >
          {images.map((img, key) => (
            <View key={key}>
              <Image
                source={img}
                style={{
                  height: 200,
                  marginTop: 10,
                  marginBottom: 10,
                  resizeMode: "cover",
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* <Image source={require('../assets/images/b1.png')}/> */}

      <View>
        <Text style={styles.label}>Catgories</Text>
        <View style={styles.cat_}>
          <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={100}
              decelerationRate="fast"
              pagingEnabled
            >
              {spinner && (<ActivityIndicator size='large' animating={spinner} color="#0000ff" />)}
              {api.map((cate) => (
                <View
                  key={cate.testName}
                  style={{
                    width: "100%",
                    paddingRight: 10,
                    height: 50,
                    backgroundColor: '#ffc15e',
                    borderRadius: 20,
                    marginHorizontal: 5,
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={require("../assets/images/blood.png")}
                    style={{ width: 50, height: 50 }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('LabDetails')
                    }}
                  >
                    <Text
                      style={{
                        paddingBottom: 13,
                        paddingTop: 13,
                        color: "white",
                        alignItems: "center",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      {cate.testName}

                    </Text>
                  </TouchableOpacity>
                </View>
              ))}


            </ScrollView>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            color: "grey",
            fontSize: 15,
            fontWeight: "bold",
            padding: 5,
          }}
        >
          Top Labs{" "}
        </Text>
        <View style={{ backgroundColor: "#e0ecff", padding: 10 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={100}
            decelerationRate="fast"
            pagingEnabled
          >
            {labs.map((lab) => (
              <View
                style={{
                  width: 100,
                  height: 120,
                  backgroundColor: "white",
                  padding: 8,
                  marginHorizontal: 5,
                  flexDirection: "column",
                }}
                key={Math.random()}
              >
                <Image source={require("../assets/images/dib.png")} />
                <TouchableOpacity
                  onPress={() => {
                    console.debug(lab);
                  }}
                >
                  <Text style={{ fontSize: 12 }}>{lab}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      {/* <View style={{padding:10, }}> */}
      <Image
        style={{ width: win.width, height: 142*ratio }}
        source={require("../assets/images/b3.png")}
      />
      {/* </View>     */}
    </ScrollView>
  );

}
const styles = StyleSheet.create({
  top_lab: {
    backgroundColor: "#e0ecff",
    height: "40%",
  },
  cat_: {
    backgroundColor: "#e0ecff",
    height: 70,
  },
  label: {
    color: "black",
    fontSize: 15,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    marginTop: 50,
  },
  container_login: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
  register_now: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
  loginText: {
    color: "white",
  },
});

export default Dashboard