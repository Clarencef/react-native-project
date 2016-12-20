import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Timer from './Timer';
import MapView from './mapView';

const App = () => {
  return (
    <Router>
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
      </Scene>
    </Router>
  );
}

export default App;