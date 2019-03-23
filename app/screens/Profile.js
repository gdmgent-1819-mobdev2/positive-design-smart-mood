import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Touchable, Image, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import firebaseInstance from '../components/firebase';
import { CustomButton } from '../components';


export default class Profile extends React.Component {
  state = {
    user:{},
    photos:[]
  }

  componentWillMount() {
    const gebruiker = firebaseInstance.auth().currentUser
    if (gebruiker != null){

        this.setState({
            user:gebruiker
        })
    }
    else {
        this.setState({
            user:{
                email:"voorbeeld@voorbeeld.be",
                displayName: "Voorbeeld User",
                photoURL: require("../assets/images/default-user-image.png"),
                uid: "user1"
            }
        })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FontAwesome style={styles.cog} name="cog"/>
        <Image style={styles.image} source={this.state.user.photoURL} />
        <Text style={styles.name}>{this.state.user.displayName}</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.email}>{this.state.user.email}</Text>
        </View>
        <View style={styles.photosContainer}>
          <Text style={styles.label}>Photos</Text>
          <Text style={styles.photos}>Geen foto's beschikbaar</Text>
        </View>
        <View style={styles.spotifyContainer}>
          <FontAwesome style={styles.spotifyIcon} name="spotify"/>
          <Text style={styles.spotify}>Spotify</Text>
        </View>
        <TouchableOpacity style={styles.spotifyButton} onPress="" >
          <Text style={styles.spotifyButtonText}>Connect with Spotify</Text>
        </TouchableOpacity>
        <View style={styles.editButtonContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </ TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#DFF4F3',
    alignItems : 'center',

  },

  emailContainer: {
    width: '90%',
    flexDirection:'row',
    alignSelf: 'stretch',
    marginTop: 20,
    
  },

  label: {
    marginLeft:20,
    marginRight: 20,
    fontSize: 20,
    color: '#5E5E5E',

  },

  email: {
    fontSize: 20,
    color: '#5E5E5E',

  },

  photosContainer: {
    width: '90%',
    alignSelf: 'stretch',
    marginTop: 20,
    marginBottom: 20,
    
  },

  photos: {
    color: '#5E5E5E',
    textAlign: 'center',
    marginTop: 20
  },

  spotifyContainer: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 20,
  },

  spotifyIcon: {
    fontSize: 40,
    color: '#5E5E5E',
    marginLeft:20
  },

  spotify: {
    fontSize: 20,
    marginLeft: 10,
    color: '#5E5E5E',

  },

  spotifyButton: {
    width: '90%',
    backgroundColor: '#5E5E5E',
    textAlign: 'center',
    marginTop: 15,
  },

  spotifyButtonText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  

  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#5E5E5E',
    marginBottom: 20,
  },

  editButtonContainer: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },

  editButton: {
    width: '90%',
    borderTopColor: '#5E5E5E',
    borderTopWidth: 3,
    paddingTop: 10,
    paddingBottom: 10,

  },

  editButtonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5E5E5E',

  },  

  cog: {
    marginLeft: 250,
    marginTop: 50,
    fontSize: 50,
    color: '#5E5E5E',
  },

  name: {
    fontSize: 25,
    color: '#5E5E5E',
  }
})