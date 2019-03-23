import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import Home from './screens/Home'
import Profile from './screens/Profile'
import ProfileEdit from './screens/ProfileEdit'

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export class Main extends Component {
  render() {
    return (
      <View style={ styles.container } >
        <Profile />
      </View>
    )
  }
}

export default Main
