/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
 
class App extends Component {
    render() {
        return (
        <View>
            <AppStack />
        </View>
        )
    }
}

const AppStack = DrawerNavigator({
  home: {screen: Home},
  parkingspot: {screen: ParkingSpot}
})
export default App


