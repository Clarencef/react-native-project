// Create a react Main component,
// root comopnent name should same with project name
import React, { Component } from 'react';
import Moment from 'moment';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import DayItem from './src/day-item';

export default class resume extends Component {
  handlePress () {
    console.log('in');
  }
  renderButton (btnText) {
    return (
      <TouchableHighlight onPress={this.handlePress} underlayColor="skyblue">
        <Text>{btnText}</Text>
      </TouchableHighlight>
    );
  }
  border (color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.header,this.border('yellow')]}>
          <View style={[styles.timerWrapper,this.border('skyblue')]}>
            <Text>00:00.00</Text>
          </View>
          <View style={[styles.buttonWraper,this.border('black')]}>
            {this.renderButton("Start")}
            {this.renderButton("Lap")}
          </View>
        </View>
        <View style={[styles.footer,this.border('red')]}>
          <Text>list</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('resume',()=> resume)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWraper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 3
  }
})

// export default class resume extends Component {
//   renderDay () {
//     let daysItems = [];
//     for(let i =0;i<7;i++) {
//       let day = Moment().add(i,'days').format('dddd');
//       daysItems.push(
//         <DayItem whichDay={day} dayUntil={i}/>
//       );
//     }
//     return daysItems;
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {this.renderDay()}
//       </View>
//     );
//   }
// }

// // show react component
// AppRegistry.registerComponent('resume',() => resume);

// // style component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     color: 'skyblue',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('resume', () => resume);
