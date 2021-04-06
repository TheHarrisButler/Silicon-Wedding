import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import {ViroARSceneNavigator} from 'react-viro';
import FurnitureList from './components/FurnitureList';
import Header from './components/Header';

// import Amplify from 'aws-amplify'; 
// import config from './src/aws-exports'; 
// Amplify.configure(config);

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

var InitialARScene = require('./js/HelloWorldSceneAR');
var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";

var defaultNavigatorType = UNSET;

export default class ViroSample extends React.Component{
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  _getExperienceSelector() {
    return (
      <View style={styles.container}>
        <Header />

        <FurnitureList start={this._getExperienceButtonOnPress}/>
      </View>
    );
  }
  
  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    var InitialARScene = require('./js/HelloWorldSceneAR');
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    this.setState({
      navigatorType : navigatorType
    })
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

module.exports = ViroSample;