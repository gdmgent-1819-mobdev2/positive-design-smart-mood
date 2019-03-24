import React from 'react';
import { Image, View } from 'react-native';
import { components } from '../styles'; 

export default class Logo extends React.Component {
  render(){
    return(
            <Image
                style={components.imageLogo}
                source={require('../assets/logo.png')}
                //resizeMethod='resize'
                resizeMode='contain'
            />
    );
  }
}