import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Timer from './Timer';
import MapView from './mapView';
import TodoList from './TodoList';

const App = () => {
  return (
    <Router hideNavBar={true}>
      <Scene key="root">
        <Scene key="timer"
          component={Timer}
          title="Timer"
          initial
        />
        <Scene key="mapview"
          component={MapView}
          title="MapView"
        />
         <Scene key="TodoList"
          component={TodoList}
          title="TodoList"
        />
      </Scene>
    </Router>
  );
}

export default App;