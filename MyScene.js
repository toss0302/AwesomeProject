import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={{fontSize:20}}>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={{fontSize:20}}>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
