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

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} />
        <ViroAmbientLight color={"#aaaaaa"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        
        <ViroOrbitCamera position={[0, 0, -0]} focalPoint={[0, 0, -1.15]} />
        <ViroSpotLight position={[0, -0.25, 0]}
                      color="#777777"
                      direction={[0, 0, -1]}
                      attenuationStartDistance={5}
                      attenuationEndDistance={10}
                      innerAngle={5}
                      outerAngle={20}/>

        <ViroAmbientLight color="#FF0000" />

        <ViroARPlaneSelector>
          <Viro3DObject
            source={require('./res/woodChair/WoodChair.obj')}
            resources={[require('./res/woodChair/WoodChair.mtl')]}
            position={[0.0, 0.0, 1.0]}
            scale={[.2, .2, .2]}
            type="OBJ" />
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
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

module.exports = HelloWorldSceneAR;
