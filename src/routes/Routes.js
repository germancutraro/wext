import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import App from '../';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Settings from '../screens/Settings/Settings';

export default createMaterialBottomTabNavigator({
    Home: { 
        screen: Home, 
        navigationOptions: {
            labeled: false, 
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={23} name="home" style={{color: "#F3CBB6"}} />
              )
        }
    },
    Search: { 
        screen: Search, 
        navigationOptions: {
            labeled: false, 
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={23} name="search" style={{color: "#F3CBB6"}} />
              )
        }
    },
    Settings: { 
        screen: Settings,
        navigationOptions: {
            labeled: false, 
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={23} name="settings" style={{color: "#F3CBB6"}} />
              )
        }
     }
  }, {
    initialRouteName: 'Home',

    barStyle: { backgroundColor: '#fff' },
  });
