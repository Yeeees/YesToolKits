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
 
class App extends Component {
    render() {
        return (
        
            <AppStack />
        
        );
    }
}

const AppStack = DrawerNavigator({
  home: {screen: Home},
  parkingspot: {screen: ParkingSpot}
})
export default App

