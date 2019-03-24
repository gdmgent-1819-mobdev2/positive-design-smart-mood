import { StyleSheet } from 'react-native';

const grid = StyleSheet.create({
    animatedContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    homeContainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainerLogin: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        
        borderColor: '#333',
        borderTopWidth: 2,
        marginBottom: '3%'
        //marginTop: 150,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        
        borderColor: '#333',
        borderTopWidth: 2,
        //marginBottom: '3%'
        //marginTop: 150,
    },

    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#DFF4F3',
    },
    container: {
        flex: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default grid;