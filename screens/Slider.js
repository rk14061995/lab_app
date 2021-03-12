import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        require('../assets/images/b3.png'),
        require('../assets/images/b1.png'),
      ]
    };
  }
 
  render() {
    return (
      <View >
        <SliderBox 
        sliderBoxHeight={250}
        sliderBoxWeight='100%'
          images={this.state.images} autoplay 
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          ImageComponentStyle={{borderRadius: 15, width: '90%',size:'stretch', marginTop: 5}}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});