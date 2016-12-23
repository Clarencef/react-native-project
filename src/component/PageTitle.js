import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class PageTitle extends Component {

  render () {
    const { children } = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          { children }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
  }
});