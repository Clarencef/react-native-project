import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from './reducers';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Timer from './Timer';
import MapView from './mapView';
import TodoList from './TodoList';


const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const RouterWithRedux = connect()(Router);

const App = () => {
  return (
    <Provider store={store}>
      <RouterWithRedux hideNavBar={true}>
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
      </RouterWithRedux>
    </Provider>
  );
}

export default App;