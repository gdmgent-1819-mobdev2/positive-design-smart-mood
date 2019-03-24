import { StyleSheet } from 'react-native';

const components = StyleSheet.create({
    buttonLogin: {
        //marginTop: 15,
        padding: 15,
        paddingBottom: 0,
        width: '45%',
        // borderColor: '#5E5E5E',
        // borderTopWidth: 2,
        alignItems: 'center',
        marginBottom: '5%'
    },

    button: {
        //marginTop: 15,
        padding: 15,
       // paddingBottom: 0,
        width: '45%',
        // borderColor: '#5E5E5E',
        // borderTopWidth: 2,
        alignItems: 'center',
        //marginBottom: '5%'
    },

    buttonLabel: {
        color: '#333',
        fontWeight: '700',
        fontSize: 18
    },

    containerInput: {
        paddingBottom: '3%',
        paddingTop: '10%',
        //marginTop: '5%',
        width: '90%',
        borderColor: '#333',
        borderBottomWidth: 2,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //height: '33.33%',
      },
      
      inputbox: {
        flex: 2,
        paddingRight: '2%',
        paddingLeft: '2%',
        color: '#333',
        fontSize: 18,
        fontWeight: '700',
        width: '90%',
      },

      text: {
        fontSize: 17,
        fontWeight: '700',
        paddingRight: 20,
      },

      imageLogo: {
        flex: 3,
        width: '100%',
        //height: undefined,
        marginTop: '30%',
        //alignSelf: 'stretch',
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end'
    },
    // logoContainer: {
    //     flex: 2,
    //     flexDirection: 'row',
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     alignItems: 'flex-end',
    //     width: '80%',
    //     marginTop: '50%',
        
    //     //borderColor: '#5E5E5E',
    //     //borderTopWidth: 2,
    //     //marginTop: 150,
    // },
});

export default components;