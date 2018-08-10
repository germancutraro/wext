import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';



import Routes from './src/routes/Routes';
import Icon from 'react-native-vector-icons/Feather';

export default class App extends Component {
  render() {
    return(
      <Fragment>
        <Routes />
        
        <View style={styles.tabMenu}>
          <View style={styles.tabIcons}>
            <TouchableOpacity>
            <Icon name="home" size={21} color="#F3CBB6" />
            </TouchableOpacity>
            <Icon name="search" size={21} color="#F3CBB6" />
            <Icon name="settings" size={21} color="#F3CBB6" />
          </View>
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
  },
  tabIcons: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
