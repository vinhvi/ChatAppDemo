import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        height: 50,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:20,
        right:20,
    },
})

export default styles;