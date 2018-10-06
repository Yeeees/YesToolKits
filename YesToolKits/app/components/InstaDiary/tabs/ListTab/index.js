import React, { Component } from 'react'
import { View,Text,ScrollView, Button, Image, ActivityIndicator, TouchableOpacity,Dimensions,TextInput,ListView } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
import * as firebase from 'firebase'
import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'
const config = {
    apiKey: "AIzaSyBtHCE5y0HZ-eB7uLleX-cgS8-oS_sjUF4",
    authDomain: "yestoolkits.firebaseapp.com",
    databaseURL: "https://yestoolkits.firebaseio.com",
    projectId: "yestoolkits",
    storageBucket: "yestoolkits.appspot.com",
    messagingSenderId: "304847695731"
  };
  firebase.initializeApp(config);
// const config = {
//     apiKey: "AIzaSyBtHCE5y0HZ-eB7uLleX-cgS8-oS_sjUF4",
//     authDomain: "yestoolkits.firebaseapp.com",
//     databaseURL: "https://yestoolkits.firebaseio.com",
//     projectId: "yestoolkits",
//     storageBucket: "yestoolkits.appspot.com",
//     messagingSenderId: "304847695731"
//   };
//firebase.initializeApp(config);

class ListTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageList: [],
            loading: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
              })
        }
        this.downloadImages = this.downloadImages.bind(this)

    }
    componentDidMount() {
        this.downloadImages()
    }
    downloadImages() {
       

        firebase.database().ref('instadiary/').on('value', (snap) => {

            // get children as an array
            var items = [];
            snap.forEach((child) => {
              items.push({
                caption: child.val().caption,
                imageURL: child.val().imageURL,
                _key: child.key
              });
            });
      
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(items.reverse())
            });
      
          });

        
    }

    render() {
        const {text1,view1,listview} = styles

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
                {/* <Button title={"get"} onPress={this.downloadImages}/> */}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => 
                        <View style = {{justifyContent: "center", alignContent: "center"}}>
                            <Image source={{uri: rowData.imageURL}} style = {{width: Dimensions.get("window").width-10 , height: 450, margin: 5}} />
                            <Text>{rowData.caption}</Text>
                        </View>
                    }
                    enableEmptySections={true}
                    style={listview}/>
                

            </Content>
        </Container>
        )
    }
}

export default ListTab