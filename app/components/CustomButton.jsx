import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { components } from '../styles';


export default class CustomButton extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
      let label = this.props.label;
    return (
      <TouchableOpacity style={components.button}>
        <Text style={components.buttonLabel}> { label } </Text>
      </ TouchableOpacity>
    )
  }

}