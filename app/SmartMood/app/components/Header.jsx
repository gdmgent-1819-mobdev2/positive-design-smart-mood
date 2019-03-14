import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export class Header extends React.Component {
    constructor(props){
        super(props);
    }

    onHamburgerClick(){
        this.props.toggleDrawer();
    }

    render(){
        return(
            <View style={styles.header} >
                <Image 
                    source={require('./../assets/logo.png')}
                    style={styles.image}
                />
                <TouchableOpacity>
                    <Image 
                        style={styles.menuIcon}
                        source={require('./../assets/menu.svg')}
                    />
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 46
    }

})