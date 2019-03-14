import React from 'react';
import {View, Slider, StatusBar} from 'react-native';


export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
    };
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

  render() {
    // storing the value of the slider
    const {value} = this.state;
    
    return (

        <View >
            <StatusBar hidden />
            
            <View style={grid.container}>              
              <Slider 
                step={1}
                maximumValue={10}
                onValueChange={this.change.bind(this)}
                value={value}
              />
            </View>
            
            <View style={grid.buttonContainer}>
              <Button label='Next'/>
              <Button label='Skip'/>
            </View>
            
        </View>
         
    );
  }
}