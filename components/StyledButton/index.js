import React from 'react'; 
import { View, Text, Pressable } from 'react-native';
import styles from './styles.js';

const StyledButton = (props) => {

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    //const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    //const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: '#171A20CC'}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: '#FFFFFF'}]}>{content}</Text>
            </Pressable>
        </View>
    );
}; 

export default StyledButton;