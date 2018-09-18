import React, { Component } from 'react'
import { View,TouchableOpacity,Text,Image } from 'react-native'
import {Drawer,Icon, Button,Container,Content,Header,Body} from 'native-base'
import {DrawerItems} from 'react-navigation'
import styles from './styles'
 
class Sidebar extends Component {
    navigate(route){
        this.props.navigation.navigate(route)
    }
    render() {
        const routes = [
            {title:"  Home",route:"home",icon:"home"},
            {title:"  ParkingSpot",route:"parkingspot",icon:"navigate"}
        ]
        return (
        <Container>
            <Header style={styles.header}>
            <Image
                style={styles.drawerImage}
                //source={require('./assets/DrawerIcons/Unsure-Programmer-Logo.png')} />
                source={{uri: 'https://avatars1.githubusercontent.com/u/11460762?s=460&v=4'}}
                />
            </Header>
            <Content style={styles.content}>
                    {
                        routes.map(e=>(
                            
                            <TouchableOpacity  style={styles.link} onPress = {_=>this.navigate(e.route)}>
                                <Icon name={e.icon} style={styles.icons}>
                                <Text>{e.title}</Text>
                                </Icon>
                            </TouchableOpacity>
                            
                        ))
                    }
            </Content>
        </Container>
        )
    }
}

export default Sidebar