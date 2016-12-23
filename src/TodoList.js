import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar
} from 'react-native';
import PageTitle from './component/PageTitle';
import Input from './component/Input'
import List from './component/List';

export default class TodoList extends Component {
  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  }

  handleAddList = (text) => {
    const { todos } = this.state;
    this.setState({
      todos: [text,...todos]
    });
    console.log(text);
  }
  
  render () {
    const { todos } = this.state;
    return (
      <View style={styles.todoListContainer}>
        <PageTitle style={styles.listTitle}>
          Todo List
        </PageTitle>
        <Input 
          style={styles.input}
          placeholder="Type a todo,then hit enter"
          onSubmitEditing= {this.handleAddList}
          />
        <List
          list={todos}
          style={styles.lists}>
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoListContainer: {
    paddingTop:20,
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  listTitle: {
    flex:1,
  },
  input: {
    flex:1
  },
  lists: {
    flex:1,
  },
  todoListText: {
    color: 'black'
  }
})