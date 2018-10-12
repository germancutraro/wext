import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Routes from './src/routes/Routes';

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
          <Fragment>
            <Routes />
            <StatusBar barStyle="dark-content" backgroundColor="white"/>
          </Fragment>
        </Provider>
    );
  }
}

App.navigationOptions = { tabBarVisible: false };


