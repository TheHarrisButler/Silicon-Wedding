import React from 'react'; 
import {View, Text, FlatList, Dimensions} from 'react-native';
import FurnitureItem from '../FurnitureItem';
import styles from './styles.js';
import furniture from './furniture.js';

const FurnitureList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={furniture}
                renderItem={({item}) => <FurnitureItem furniture={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    ); 
};

export default FurnitureList;