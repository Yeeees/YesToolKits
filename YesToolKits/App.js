/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//import 'core-js/es6/symbol'; import 'core-js/fn/symbol/iterator';

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator, DrawerNavigator} from 'react-navigation';
import Home from './app/components/Home';
import ParkingSpot from './app/components/ParkingSpot'
import InstaDiary from './app/components/InstaDiary'
import Sidebar from './app/components/Sidebar'
import CloudChat from './app/components/CloudChat'

 
class App extends Component {
    render() {
        return (
        
            <AppStack />
        
        );
    }
}

const AppStack = DrawerNavigator({
  home: {screen: Home},
  parkingspot: {screen: ParkingSpot},
  instadiary: {screen: InstaDiary},
  cloudchat: {screen: CloudChat},

},{
  initialRouteName: 'home',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: Sidebar
})
export default App

