import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    menu: {
        top: 40,
        width: 25,
        height: 25, 
        resizeMode: 'contain',
    }
});

export default styles;