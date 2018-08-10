import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';

import Routes from './src/routes/Routes';

export default class App extends Component {
  render() {
    return(
      <Fragment>
        <Routes />
        <View style={styles.tabMenu}>
          
        </View>
      </Fragment>

    );
  }
}

const styles = StyleSheet.create({
  tabMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 35,
    borderTopColor: '#eee',
    borderTopWidth: 1
  }
})
