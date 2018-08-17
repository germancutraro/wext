import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

import Routes from './src/routes/Routes';
import Icon from 'react-native-vector-icons/Feather';

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Fragment>
          <Routes />
        </Fragment>
      </Provider>
    );
  }
}

App.navigationOptions = { tabBarVisible: false };

const styles = StyleSheet.create({
  tabMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 35,
    borderTopColor: '#eee',
    borderTopWidth: 1
  },
  tabIcons: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
