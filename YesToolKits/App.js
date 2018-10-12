/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

