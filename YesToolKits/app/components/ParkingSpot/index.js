import React, { Component } from 'react'
import { View,Text } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content} from 'native-base'
class ParkingSpot extends Component {
    render() {
        console.log('222')
        const {text1,view1} = styles
        return (
            <Container>
            <Header>
                <Left>
                    <Icon name="ios-menu" onPress={()=>this.props.navigation.openDrawer()} />
                </Left>
                <Text>ParkingSpot</Text>
            </Header>
            <Content contentContainerStyle={view1}>
                <Text>1234123</Text>
            </Content>
        </Container>
        )
    }
}
 
export default ParkingSpot