import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import {Header,Left,Container,Content,Body,Right} from 'native-base'
import {createBottomTabNavigator} from 'react-navigation'
import ListTab from './tabs/ListTab/index'
import UploadTab from './tabs/UploadTab/index'
import Icon from 'react-native-vector-icons/Ionicons'


export default createBottomTabNavigator(
    {
        ListTab: {
            screen: ListTab,
            navigationOptions: {
                tabBarLabel: 'List',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name = "ios-home" size={24} color={tintColor} />
                )
            }
        },
        UploadTab: {
            screen: UploadTab,
            navigationOptions: {
                tabBarLabel: 'Upload',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name = "ios-settings" size={24} color={tintColor} />
                )
            }
        }
    },{
        intitalRouteName: 'ListTab',
        navigationOptions: {
            tabBarVisible: true
        },
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey'
        }
    }
)