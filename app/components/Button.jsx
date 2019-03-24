import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { components } from '../styles';
import { withNavigation } from 'react-navigation';


export class Button extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
      let label = this.props.label;
      let onPress = this.props.onPress;
      let style = this.props.style;
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={components.buttonLabel}> { label } </Text>
      </ TouchableOpacity>
    )
  }

}

export default withNavigation(Button);