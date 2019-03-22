import React, { Component } from 'react';
import {View, Slider, Text } from 'react-native';
import { grid, activity } from '../styles';
import { Button } from '../components';


export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energy: 5,
      pain: 5,
      mentalEnergy: 5,
      loneliness: 5,
    };    
  }


  render() {
    // storing the value's of the sliders
    const {energy} = this.state;
    const {pain} = this.state;
    const {mentalEnergy} = this.state;
    const {loneliness} = this.state;

    // Getting the backgroundcolor that was passed as a parameter with the navigation
    const { navigation } = this.props;
    const bgColor = JSON.stringify(navigation.getParam('bgColor'));

    return (

        <View style={[grid.wrapper, {backgroundColor: bgColor}]}>
            
            <View style={grid.testContainer}> 
               {/* Energy slider  */}
              <Text style={{color: 'white'}}> Energy: {energy} </Text> 
              <Slider style={activity.slider}
                step={1}
                maximumValue={10}
                onValueChange={(energy) => this.setState({energy})}
                value={energy}
              />   
              
              {/* Pain slider */}
              <Text style={{color: 'white'}}> Pain: {pain} </Text> 
              <Slider style={activity.slider}
                step={1}
                maximumValue={10}
                onValueChange={(pain) => this.setState({pain})}
                value={pain}
              />

              {/* Mental Energy slider */}
              <Text style={{color: 'white'}}> Mental Energy: {mentalEnergy} </Text> 
              <Slider style={activity.slider}
                step={1}
                maximumValue={10}
                onValueChange={(mentalEnergy) => this.setState({mentalEnergy})}
                value={mentalEnergy}
              />   

              {/* loneliness slider */}
              <Text style={{color: 'white'}}> Loneliness: {loneliness} </Text> 
              <Slider style={activity.slider}
                step={1}
                maximumValue={10}
                onValueChange={(loneliness) => this.setState({loneliness})}
                value={loneliness}
              />                  
              
            </View>
            
            <View style={grid.buttonContainer}>
              <Button label='Submit'/>
              <Button label='Skip'/>
            </View>
             
        </View>
         
    );
  }
}