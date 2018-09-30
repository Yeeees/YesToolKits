import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
 
class ListTab extends Component {
    render() {
        const {text1,view1,weather_icon,weather_view,weather_each} = styles

        return (
            
            <Container>
            <Header transparent>
                <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} />
                </Left>
                <Body>
                    <Text style={text1}>InstaDiary</Text>
                </Body>
                <Right>

                </Right>
                
            </Header>
            <Content contentContainerStyle={view1}>
                <Text>1111</Text>
                
                

            </Content>
        </Container>
        )
    }
}

export default ListTab