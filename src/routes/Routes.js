import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Settings from '../screens/Settings/Settings';

export default createMaterialBottomTabNavigator({
    Search: { 
        screen: Search, 
        navigationOptions: {
            labeled: true, 
            shifting: true,
            title: "Búsqueda",
            tabBarIcon: ({ tintColor, focused }) => (
              <Icon size={23} name="search" style={{ color: tintColor }} />
            )
        }
    },
    Home: { 
        screen: Home, 
        navigationOptions: {
            labeled: true, 
            title: "Inicio", 
            shifting: true,
            tabBarIcon: ({ tintColor, focused }) => (
              <Icon size={23} name="home" style={{ color: tintColor }} />
            )
        }
    },
    Settings: { 
        screen: Settings,
        navigationOptions: {
            labeled: true, 
            title: "Ajustes",
            shifting: true,
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={23} name="settings" style={{ color: tintColor }}/>
              )
        }
     }
  }, {
    initialRouteName: 'Home',
    activeTintColor: '#000',
    inactiveTintColor: '#bbb',
    barStyle: { backgroundColor: '#fff' },
  });

