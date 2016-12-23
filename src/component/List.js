import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

export default class List extends Component {

  renderList = (item,i) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => this.props.onPressItem(i)}
        >
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  }
  render () {
    const { list } = this.props;
    return (
      <View style={styles.lists}>
          {list.map(this.renderList)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lists: {
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: 'whitesmoke',
    padding: 15
  },
  listItem: {
    marginBottom: 5,
    padding:15,
    backgroundColor: 'whitesmoke'
  }
});