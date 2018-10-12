import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Routes from './src/routes/Routes';

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


