import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text } from 'react-native';

export default class mapView extends Component {
  render () {
    return (
      <View style={styles.MapViewContainer}>
        <Text style={styles.welcomText}>
          MAPVIEW
        </Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  MapViewContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222'
  },
  welcomText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  }
})