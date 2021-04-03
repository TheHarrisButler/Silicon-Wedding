import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton'; 
import styles from './styles.js';  


const FurnitureItem = (props) => {

    const { name, image } = props.furniture; 

    return (
    <View style={styles.furnitureContainer}>

        <ImageBackground
          source={image}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>Check availibility in your area.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyledButton 
            type="primary" 
            content={"View in AR"}
            onPress={() => {
              console.warn('View AR was Pressed');
            }}
          />

          <StyledButton 
            type="secondary" 
            content={"Learn More"}
            onPress={() => {
              console.warn('Learn More was Pressed');
            }}
          />
        </View>

    </View>
    ); 
}; 

export default FurnitureItem;