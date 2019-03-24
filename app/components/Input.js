import React, { Component} from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { components } from '../styles'; 
//import { IconTextInput } from '../components/IconTextInput';

class Input extends Component {
  constructor(props){
    super(props);

  }
  render(){
    let label = this.props.label;
    let value = this.props.value;
    let onChangeText = this.props.onChangeText;
    let placeholder = this.props.placeholder;
    let secureTextEntry = this.props.secureTextEntry;
    let autoCapitalize = this.props.autoCapitalize;
    let keyboardType = this.props.keyboardType;
    let returnKeyType = this.props.returnKeyType;
    return(
        <View style={components.containerInput} >
          <Text style={components.text}>{label}</Text>
          <TextInput style={components.inputbox}
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            underlineColorAndroid='transparent'
          />
        </View>
    )
  }
}

export default Input;