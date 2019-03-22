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
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        
        borderColor: '#5E5E5E',
        borderTopWidth: 2,
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
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});

export default grid;