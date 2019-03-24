import React from 'react';
import { View, Text } from 'react-native';
import { checkLoggedIn } from '../utils/firebaseService';


class SplashScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            currentUser: null,
        };
    }

    componentWillMount() {
        checkLoggedIn(user => {
            if (user) {
            this.setState({
                currentUser: user,
            });
            } else {
            this.setState({
                currentUser: null,
            });
            }
        });
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
        setTimeout(
            () => { resolve(this.state) },
            2000
        )
        )
    }

    async componentDidMount() {
        const currentUser = await this.performTimeConsumingTask();

        if (this.state.currentUser !== null) {
        this.props.navigation.navigate('App', {
              //currentUser,
            });
        }else{
            this.props.navigation.navigate('Auth')
        }
        
    }

    render() {
        const {currentUser} = this.state
        return (
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>
            Blitz Reading
            </Text>
        </View>
        );
  }
    }

    const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
}

export default SplashScreen;