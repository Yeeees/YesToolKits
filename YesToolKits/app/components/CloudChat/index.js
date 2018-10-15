import React, { Component } from 'react'
import { View,Text,TextInput } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content, Body, Right} from 'native-base'

class CloudChat extends Component {
    render() {
        const {text1,view1} = styles
        return (
            <Container>
            <Header transparent>
                <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} />
                </Left>
                <Body>
                    <Text>Cloud Chat</Text>
                </Body>
                <Right transparent>

                </Right>
                
            </Header>
            <Content contentContainerStyle={view1}>
                <TextInput placeholder={'Email Address'}> </TextInput>
                <TextInput placeholder={'Password'}></TextInput>
            </Content>
        </Container>
        )
    }
}

export default CloudChat