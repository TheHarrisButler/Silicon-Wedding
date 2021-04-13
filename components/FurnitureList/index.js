import React, { Component } from 'react'; 
import {View, Text, FlatList, Dimensions, Button} from 'react-native';
import FurnitureItem from '../FurnitureItem';
import styles from './styles.js';
import furniture from './furniture.js';

class FurnitureList extends React.Component{

    constructor() {
        super();
        this.startExperience = this.startExperience.bind(this);
    }

    startExperience(navtype, objectType) {
        this.props.start(navtype, objectType)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={furniture}
                    renderItem={({item}) => <FurnitureItem furniture={item} startExperience={this.startExperience}/>}
                    showsVerticalScrollIndicator={false}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get('window').height}
                />
            </View>
        ); 
    }
}

export default FurnitureList;