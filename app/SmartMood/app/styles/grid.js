import { StyleSheet } from 'react-native';

const grid = StyleSheet.create({
    animatedContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    container: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    },
});

export default grid;