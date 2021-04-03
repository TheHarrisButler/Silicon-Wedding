/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Amplify from 'aws-amplify'; 
import config from './src/aws-exports'; 
Amplify.configure(config);


const App = () => {
  return(
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default withAuthenticator(App);