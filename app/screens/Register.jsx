import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { logInUser, signUpUser, logout, initializeFirebase  } from '../utils/firebaseService';
import { Input, Button, Logo } from '../components';
import { components, grid } from '../styles';

export default class Register extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      email: '',
      password: '',
      name: '',
    })
  }

  handleUpdate(user) {
    this.setState({
      currentUser: user,
    });
    this.props.navigation.navigate('Splash');
  }

  

  render() {
    return (
        <View style={grid.wrapper}>
          <Logo />
          <View style={grid.container}>
            <Input style={components.inputbox}
                label='Username:'
                placeholder='Enter a username'
                onChangeText= {name => this.setState({ name })}
                value= {this.state.name}
                autoCapitalize='none'
                keyboardType='default'
                returnKeyType='next'
            />
            <Input style={components.inputbox}
                label='E-mail:'
                placeholder='Enter your email'
                onChangeText= {email => this.setState({ email })}
                value= {this.state.email}
                autoCapitalize='none'
                keyboardType='email-address'
                returnKeyType='next'
            />
            <Input style={components.inputbox}
                label='Password:'
                placeholder='Enter your password'
                secureTextEntry
                onChangeText= {password => this.setState({ password })}
                value= {this.state.password}
                autoCapitalize='none'
                keyboardType='default'
                returnKeyType='send'
            />
          </View>
          <View style={grid.buttonContainerLogin}>
            <Button onPress={() => signUpUser(this.state.name, this.state.email, this.state.password, this.handleUpdate())} label='Sign Up' style={components.buttonLogin} />
            <Button onPress={() => this.props.navigation.navigate('Login')} label='Log In' style={components.buttonLogin} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  }
});