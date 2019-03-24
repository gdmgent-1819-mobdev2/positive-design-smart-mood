import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { home, grid, calender } from '../styles';
import firebaseInstance from '../components/firebase';

import CalendarPicker from 'react-native-calendar-picker';

import calendarData from './calendarData.json';
// Hardcoded user calendar data

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedStartDate: null,
        user: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  componentWillMount() {
    const user = firebaseInstance.auth().currentUser
    if (user != null){

        this.setState({
            user:user
        })
    }
    else {
        this.setState({
            user:{
                email:"test@mail.com",
                uid: "KizYIX3Mf2Y61Iu6o12RKfYOgzb2"
            }
        })
    }

    console.log("user: " + this.state.user)

  }
  writeUserData(email){
    firebase.database().ref('users/').push({
        email,
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

  readUserData() {
    firebase.database().ref('users/'+this.state.email+'/').once('value', function (snapshot) {
        console.log(snapshot.val())
    });
}


  render(){
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
        <View style={calender.container}>
            <CalendarPicker onDateChange={this.onDateChange}/>
            <View style={calender.textLeft}>
              <Text>DATE:{ startDate }</Text>
              <Text>DAY: </Text>
              <Text>SONG:</Text>
            </View>
            
      </View>
        
    );
  }

}