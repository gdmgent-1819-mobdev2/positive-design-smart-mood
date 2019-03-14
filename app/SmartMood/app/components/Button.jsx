import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export class Button extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
      let label = this.props.label;
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}> { label } </Text>
      </ TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 20,
        width: '45%',
        borderColor: '#F1F1F1',
        borderTopWidth: 2,
        //backgroundColor: '#00aeef',
        //borderRadius: 4,
        alignItems: 'center',
      },
      text: {
        color: '#F1F1F1',
        fontWeight: '700',
        fontSize: 18
      }
});