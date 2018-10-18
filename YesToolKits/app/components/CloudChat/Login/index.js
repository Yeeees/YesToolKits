import React, { Component } from 'react'
import { View,Text,TouchableOpacity,TextInput,Alert } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
import { Actions } from 'react-native-router-flux';
import {navigate,navigation} from 'react-navigation'
class Login extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: "",
    //     }
    // } 
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
                    <View style = {container}>
                        <TextInput 
                            style = {textInput}
                            placeholder={'Username'} 
                            onChangeText={(text) => {
                                this.setState({
                                  name: text,
                                });
                              }}
                            value = {this.state.name}
                        />
                    </View>
                    
                    <TouchableOpacity
                        onPress={() => {
                            //Alert.alert(this.state.name)
                            this.props.navigation.navigate('Chat', { name: this.state.name })
                        }}
                    >
                        <Text style={styles.label}>
                            Next
                        </Text>
                    </TouchableOpacity>

                    
                    
    
                </Content>
            </Container>
            )
    
    }
}

export default Login