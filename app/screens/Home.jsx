import React, { Component } from 'react';
import { View, Slider, Animated } from 'react-native';
import { Smiley, Button } from '../components';
import { home, grid } from '../styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
      AnimatedValue: new Animated.Value(5),
    }
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });

    Animated.timing(this.state.AnimatedValue, {
      toValue: value,
      duration: 500
    }).start();
  }

  render(){
    // Storing the value off the slider
    const {value} = this.state;

    // Interpolate the background color
    const interpolateColor = this.state.AnimatedValue.interpolate({
      inputRange: [0, 1, 2, 3, 4, 5, 6, 7 , 8, 9, 10],
      outputRange: ['#000000', '#2a235c', '#264a8a', '#1070b7', '#764c99', '#9c1b7c', '#b1336a', '#e30614', '#ec760f', '#f6c219', '#f8ca19']
    })

    return (
      <Animated.View style={[grid.animatedContainer, {backgroundColor: interpolateColor}]}>
        <View style={grid.container}>
          <Smiley style={home.Smiley} curve={value} />
          
          <Slider style={home.slider}
            step={1}
            maximumValue={10}
            onValueChange={this.change.bind(this)}
            value={value}
          />
        </View>
        <View style={grid.buttonContainer}>
          <Button label='Next' />
          <Button label='Skip' />
        </View>
      </Animated.View>
    );
  }

}