import React, { Component } from 'react'
import { View,Text,TouchableOpacity,TextInput,Alert } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right,Button,Item, Input} from 'native-base'
import { Actions } from 'react-native-router-flux';
import {navigate,navigation} from 'react-navigation'
class Login extends Component {

    static navigationOptions = {
        header: null
      };
    state = {
        name: ""
    }
    render() {
        
            const {text1,view1,textInput,container,label} = styles
            

            return (
                
                <Container>
                <Header transparent>
                    <Left>
                        <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} />
                    </Left>
                    <Body>
                        <Text style={text1}>CloudChat</Text>
                    </Body>
                    <Right>
    
                    </Right>
                    
                </Header>
                <Content contentContainerStyle={view1}>
                    <View style = {textInput}>

                        <Item rounded>
                            <Input placeholder='Chat as...'
                                textAlign={'center'}
                                onChangeText={(text) => {
                                    this.setState({
                                      name: text,
                                    });
                                  }}
                                value = {this.state.name}
                            />
                        </Item>
                        
                    </View>
                    
                    <View style = {container} >
                        <Button rounded 
                            onPress={() => {
                                //Alert.alert(this.state.name)
                                this.props.navigation.navigate('Chat', { name: this.state.name })
                            }}
                        >
                            <Text style={styles.label}>
                                Next
                            </Text>
                        </Button>
                    </View>
                    

                    
                    
    
                </Content>
            </Container>
            )
    
    }
}

export default Login