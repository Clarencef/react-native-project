import React, { Component } from 'react';
import Moment from 'moment';
import formatTime from 'minutes-seconds-milliseconds';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import DayItem from './day-item';

export default class resume extends Component {
  constructor () {
    super();
    this.state = {
      startTime: null,
      laps: [],
      timeElapsed: null,
      running: false
    };
    this.handleStartPress = this.handleStartPress.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
  }
  handleStartPress () {
    if(this.state.running) {
      clearInterval(this.interval);
      this.setState({running:false});
      return;
    }

    this.setState({startTime: new Date()});

    this.interval = setInterval(
      () => {
          this.setState({
          timeElapsed: new Date() - this.state.startTime,
          running: true
        });
      },30); 
  }
  handleLapPress () {
    let lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
    console.log('lap')
  }
  renderButton (btnText) {
    const isStartBtn = btnText === 'Start';
    const isRunningAndStartBtn = isStartBtn && this.state.running;
    console.log(this.state.running);
    return (
      <TouchableHighlight 
        style={[styles.button,isRunningAndStartBtn ? styles.buttonBorder : null]} 
        onPress={ isStartBtn ? this.handleStartPress : this.handleLapPress} 
        underlayColor="skyblue"
        >
        <Text style={isRunningAndStartBtn ? styles.buttonTxtWhite : styles.buttonTxt}>
          {isRunningAndStartBtn ? 'Stop' : btnText}
        </Text>
      </TouchableHighlight>
    );
  }
  renderLaps () {
    return this.state.laps.map((time,index) => {
      return (
        <View style={styles.listTxtBlock} key={index}>
          <Text style={styles.listTxt}>
            Lap #{index+1} {formatTime(time)}
          </Text>
        </View>
      )
    });
  }
  // border (color) {
  //   return {
  //     borderColor: color,
  //     borderWidth: 4
  //   }
  // }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timerTxt} >{formatTime(this.state.timeElapsed)}</Text>
          </View>
          <View style={styles.buttonWraper}>
            {this.renderButton("Start")}
            {this.renderButton("Lap")}
          </View>
        </View>
        <View style={styles.footer}>
          {this.renderLaps()}
        </View>
         <Text
          style={styles.buttonTxtWhite}
          onPress={() => Actions.mapview()} // New Code
        >
          Map View
        </Text>
         <Text
          style={styles.buttonTxtWhite}
          onPress={() => Actions.TodoList()} // New Code
        >
          Todo List
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#222222'
  },
  header: {
    flex: 1
  },
  footer: {
    paddingTop: 20,
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerTxt: {
    fontSize: 60,
    color: '#ffffff'
  },
  buttonWraper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 3
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffffff',
    width: 100,
    height: 100,
    borderRadius: 100/2
  },
  buttonTxt: {
    fontSize: 20,
    color: '#222222'
  },
  buttonTxtWhite: {
    fontSize: 20,
    color: 'white'
  },
  buttonBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#32cd32",
    borderRadius: 100/2,
    backgroundColor: "#90ee90"
  },
  listTxtBlock: {
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#ffffff",
  },
  listTxt: {
    color: 'white'
  }
})