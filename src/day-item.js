import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

export default class DayItem extends Component {
  style () {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }
  fontWeight () {
    const weight = 7 - this.props.dayUntil;
    return String(weight * 100);
  }
  fontSize () {
    return 60 - 6 * this.props.dayUntil;
  }
  lineHeight () {
    return 70 - 4 * this.props.dayUntil;
  }
  color () {
    const opacity = 1 / (this.props.dayUntil + 1);
    return `rgba(255,0,0,${opacity})`;
  }
  render () {
    return (
      <Text style={this.style()}>
        {this.props.whichDay}
      </Text>
    );
  }
}


