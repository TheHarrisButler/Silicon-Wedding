'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight, 
  ViroARPlaneSelector, 
  ViroOrbitCamera
} from 'react-viro';

export default class FurnitureScene extends Component {

  state = {
    initialized: false, 
    isTracking: false,
    planeWidth: 0, 
    planeLength: 0,
    objectType: this.props.arSceneNavigator.viroAppProps.objectType
  }

  getUIText(uiText){
    return (
      <ViroText 
        text={uiText} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} transformBehaviors={["billboardX", "billboardY"]}
      />
    )
  }

  getARScene() {
    console.warn(this.state.objectType);

    switch(this.state.objectType) {
      case 0:
        return(
          <Viro3DObject 
            source={require('./res/chair_high/chair_high.obj')}
            resources={[require('./res/chair_high/chair_high.mtl')]}
            position={[0, -30, -50]}
            scale={[0.3, 0.3, 0.3]}
            type="OBJ"
            dragType="FixedDistance"
            onDrag={() => {}}
          />
        )
        break;
      case 1:
        return (
          <Viro3DObject 
            source={require('./res/kitchenChair/kitchenChair.obj')}
            resources={[require('./res/kitchenChair/kitchenChair.obj')]}
            position={[0, -30, -50]}
            scale={[0.3, 0.3, 0.3]}
            type="OBJ"
            dragType="FixedDistance"
            onDrag={() => {}}
          />
        )
        break;
      case 2:
        return (
          <Viro3DObject 
            source={require('./res/chair_high/chair_high.obj')}
            resources={[require('./res/chair_high/chair_high.mtl')]}
            position={[0, -30, -50]}
            scale={[0.3, 0.3, 0.3]}
            type="OBJ"
            dragType="FixedDistance"
            onDrag={() => {}}
          />
        )
        break;
    }
  }

  render() {
    return (
      <ViroARScene  onTrackingUpdated={this._onInitialized}>

        <ViroAmbientLight color="#ffffff" />
        {
          this.state.isTracking ? this.getARScene() : this.getUIText(
            this.state.initialized ? 'initializing' : 'no tracking'
          )
        }
        </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        isTracking : true,
        initialized: true
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      this.setState({
        isTracking: false
      })
    }
  }
}


var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

module.exports = FurnitureScene;
