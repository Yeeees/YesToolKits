import React, { Component } from 'react'
import { View,Text } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content, Body, Right} from 'native-base'
class ParkingSpot extends Component {
    render() {
        console.log('222')
        const {text1,view1} = styles
        return (
            <Container>
            <Header transparent>
                <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} />
                </Left>
                <Body>
                    <Text>Parking Spot</Text>
                </Body>
                <Right transparent>

                </Right>
                
            </Header>
            <Content contentContainerStyle={view1}>
                <Text>1234123</Text>
            </Content>
        </Container>
        )
    }
}
 
export default ParkingSpot