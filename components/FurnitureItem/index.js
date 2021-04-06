import React, { Component }from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton'; 
import styles from './styles.js'; 
//import ViroSample from '../../App.js'; 


class FurnitureItem extends Component{
  constructor(props) {
    super(props);
  }

  startExperience() {
    this.props.startExperience("AR"); 
  }

  render() {
    return (
      <View style={styles.furnitureContainer}>
  
          <ImageBackground
            source={this.props.furniture.image}
            style={styles.image}
          />
  
          <View style={styles.titles}>
            <Text style={styles.title}>{this.props.furniture.name}</Text>
            <Text style={styles.subtitle}>Check availibility in your area.</Text>
          </View>
  
          <View style={styles.buttonContainer}>
            <StyledButton 
              type="primary" 
              content={"View in AR"}
              onPress={() => {
                this.startExperience(); 
              }}
            />
  
            <StyledButton 
              type="secondary" 
              content={"Learn More"}
              onPress={() => {
                console.warn("learn more was pressed.");
              }}
            />
          </View>
  
      </View>
    ); 
  }
} 

export default FurnitureItem;