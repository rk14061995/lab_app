import React,{Component} from 'react';
import {View,Image,SafeAreaView, StyleSheet, ActivityIndicator, Button, ScrollView, Text, Item} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// var logo = require('../assets/images/heal_logo.png');
// import { SliderBox } from "react-native-image-slider-box";
export default class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.images=[
            require('../assets/images/b1.png'),          // Local image
            require('../assets/images/b3.png'),
            require('../assets/images/b1.png'),          // Local image
            require('../assets/images/b3.png'),
        ];
        this.categories=['Blood Test','Skin Test','Lipid Test','RBC Test'];
        this.labs=['Dr Path Lab','Batra Lab','Lal Path','Chabra Labss'];
        
        // this.state = {
        //   images: [
        //     // "https://source.unsplash.com/1024x768/?nature",
        //     // "https://source.unsplash.com/1024x768/?water",
        //     // "https://source.unsplash.com/1024x768/?girl",
        //     // "https://source.unsplash.com/1024x768/?tree", // Network image
        //     require('../assets/images/b1.png'),          // Local image
        //     require('../assets/images/b3.png'),
        //   ]
        // };
      }
    render(){
        return(
            <ScrollView style={{flex:1, flexDirection:'column'}}>
                {/* <View>
                    <Image source={require('../assets/images/b1.png')}/>
                </View> */}
                <View>
                    <ScrollView  horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={100}
                        decelerationRate="fast"
                        pagingEnabled>
                            {
                            this.images.map(( img, key ) =>
                            (
                                <View key = { key } >
                                <Image source={img} style={{height:200,marginTop:10,marginBottom:10, resizeMode:'cover'}}/>
                                </View>
                            ))
                            }
                    </ScrollView>
                </View>
                
                    {/* <Image source={require('../assets/images/b1.png')}/> */}
                
                <View >
                    <Text style={styles.label}>Catgories</Text> 
                    <View style={styles.cat_}>
                    <View style={{flex: 1, flexDirection: 'row',padding:10}}>
                        <ScrollView  horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={100}
                            decelerationRate="fast"
                            pagingEnabled>
                                {
                                    this.categories.map(cate=>(
                                        <View style={{width: 140, height: 50, backgroundColor: 'pink',borderRadius:20, marginHorizontal:5, flex:1, flexDirection:'row'}}>
                                            <Image source={require('../assets/images/blood.png')} style={{width:50,height:50}}/>    
                                            <TouchableOpacity onPress={()=>{
                                                console.debug(cate);
                                            }}>
                                                
                                                <Text style={{paddingBottom:13,paddingTop:13,color:'white' ,alignItems: "center",fontSize:15, fontWeight:'bold'}}>{cate}</Text>
                                            </TouchableOpacity>
                                            
                                        </View>
                                    ))
                                }
                                
                                {/* <View style={{width: 140, height: 50, backgroundColor: 'orange',borderRadius:20, marginHorizontal:5, flex:1, flexDirection:'row'}}>
                                    <Image source={require('../assets/images/blood.png')} style={{width:50,height:50}}/>
                                    <Text style={{paddingBottom:13,paddingTop:13,color:'white' ,fontSize:15, fontWeight:'bold'}}>Skin Test</Text>
                                </View>
                                <View style={{width: 140, height: 50, backgroundColor: 'pink',borderRadius:20, marginHorizontal:5, flex:1, flexDirection:'row'}}>
                                    <Image source={require('../assets/images/blood.png')} style={{width:50,height:50}}/>
                                    <Text style={{paddingBottom:13,paddingTop:13,color:'white' ,fontSize:15, fontWeight:'bold'}}>Blood Test</Text>
                                </View>
                                <View style={{width: 140, height: 50, backgroundColor: 'orange',borderRadius:20, marginHorizontal:5, flex:1, flexDirection:'row'}}>
                                    <Image source={require('../assets/images/blood.png')} style={{width:50,height:50}}/>
                                    <Text style={{paddingBottom:13,paddingTop:13,color:'white' ,fontSize:15, fontWeight:'bold'}}>Skin Test</Text>
                                </View> */}
                        </ScrollView>
                        
                    </View>
                    </View>
                </View>
                
                <View >
                    <Text style={{color:'grey',fontSize:15 ,fontWeight:'bold', padding:5}}>Top Labs </Text>  
                    <View style={{backgroundColor:'grey', padding:10}}>
                    
                        <ScrollView  horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={100}
                            decelerationRate="fast"
                            pagingEnabled>
                                {
                                    this.labs.map(lab=>(
                                        <View style={{width:100,height:120, backgroundColor:'white', padding:8,marginHorizontal:5,flexDirection:'column'}}>
                                            
                                            <Image source={require('../assets/images/dib.png')}/>
                                            <TouchableOpacity onPress={()=>{
                                                console.debug(lab)
                                            }}>
                                                <Text style={{fontSize:12}}>{lab}</Text>
                                            </TouchableOpacity>
                                            
                                        </View>
                                    ))
                                }
                                
                        </ScrollView>

                        
                    </View> 
                </View>
                {/* <View style={{padding:10, }}> */}
                    <Image style={{resizeMode:'cover',margin:5, width:'100%'}} source={require('../assets/images/b1.png')}/>
                {/* </View>     */}
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    top_lab:{
      backgroundColor:'grey',
      height:'40%'
    },
    cat_:{
      backgroundColor:'green',
      height:70,
    
    },
    label:{
      color:'black',
      fontSize:15,
      padding:10
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center'
    }, 
    loader:{
      marginTop:50,
      
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
    register_now:{
  width: "70%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "blue",
    },
    loginText:{
      color:'white'
    }
  });