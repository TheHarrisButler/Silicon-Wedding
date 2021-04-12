import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import {ViroARSceneNavigator} from 'react-viro';
import FurnitureList from './components/FurnitureList';
import Header from './components/Header';

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";

var defaultNavigatorType = UNSET;

export default class ViroSample extends React.Component{
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps,
      objectType: 0
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

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
  
  _getARNavigator() {
    var InitialARScene = require('./js/FurnitureScene');
    return (
        <View style={styles.flex}>
          <ViroARSceneNavigator {...this.state.sharedProps}
            viroAppProps={{
              objectType: this.state.objectType
            }}
            initialScene={{scene: InitialARScene}} />

            <View style={styles.topMenu}>
              <TouchableHighlight style={styles.buttons}
                underlayColor={'#68a0ff'}
                onPress={this._exitViro}
              >
                <Text style={styles.buttonText}>
                  Back
                </Text>
              </TouchableHighlight>
            </View>
        </View>
    );
  }

  _getExperienceButtonOnPress(navigatorType) {
    this.setState({
      navigatorType : navigatorType 
    })
  }

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

  flex: {
    flex: 1
  },

  topMenu: {
    width : '100%',
    position : 'absolute',
    top : 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },

  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'rgba(123,123,231,.4)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(123,087,231,.4)'
  },
});

module.exports = ViroSample;