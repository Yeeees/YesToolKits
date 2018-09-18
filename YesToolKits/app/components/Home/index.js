import React, { Component } from 'react'
import { View,Text } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
 
class Home extends Component {
    render() {
        const {text1,view1} = styles
        console.log('1111')
        return (
        <Container>
            <Header transparent>
                <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} />
                </Left>
                <Body>
                    <Text style={text1}>Home</Text>
                </Body>
                <Right>

                </Right>
                
            </Header>
            <Content contentContainerStyle={view1}>
                <Text>1234123</Text>
            </Content>
        </Container>
        )
    }
}

export default Home