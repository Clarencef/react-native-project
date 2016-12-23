import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Input extends Component {
  state={
    text:"",
  }

  onSubmitEditing = () => {
    const { text } = this.state;
    const { onSubmitEditing } = this.props;
    if (!text) {
      return;
    }
    onSubmitEditing(text);
    this.setState({text:''});
  }

  render () {
    const {
      placeholder
    } = this.props;
    const { text } = this.state;
    return (
      <TextInput 
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText = {(text) => this.setState({text})}
        onSubmitEditing = {this.onSubmitEditing}
        />
    ); 
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    height:45 // need to add height to TextInput element or add height to a View Element wrap this TextInput, otherwise the word can't be visible when we typing
  }
}); 