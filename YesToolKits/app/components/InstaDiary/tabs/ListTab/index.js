import React, { Component } from 'react'
import { View,Text,ScrollView, Button, Image, ActivityIndicator, TouchableOpacity,Dimensions,TextInput } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
import * as firebase from 'firebase'
import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'

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
        }
        this.downloadImages = this.downloadImages.bind(this)

    }

    downloadImages() {
        if(this.state.imageList.length == 0) {
            this.setState({ loading: true })
            const Blob = RNFetchBlob.polyfill.Blob
            const fs = RNFetchBlob.fs
            window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
            window.Blob = Blob
            //const { uid } = this.state.user
            const uid = "Images"
            const imageRef = firebase.storage().ref(uid)
            var bucket = imageRef.bucket
            var firebaseUrl = "https://firebasestorage.googleapis.com/v0/b/" + bucket + "/o/";
            console.log("Ref: "+imageRef.toString())
            console.log("getURL: "+imageRef.getDownloadURL)
            console.log("getMETA: "+imageRef.getMetadata)
            var gsReference = firebase.storage().refFromURL(imageRef.toString())
            console.log("gs: "+gsReference) 
            console.log("Firebase URL " + firebaseUrl)

            var bucket = firebase.storage().ref().bucket;
            var firebaseUrl = "https://firebasestorage.googleapis.com/v0/b/" + bucket + "/o/";
            var finalUrl = firebaseUrl + 'path%2Fto%2Fresource';
            firebase.auth().signInAnonymously()
            firebase.auth().currentUser.getToken()
            .then((token) => {
            fetch(finalUrl, {headers: {'Authorization' : 'Firebase ' + token}})
            .then((response) => response.json())
            .then((responseJson) => {
                var downloadURL = finalUrl + "?alt=media&token=" + responseJson.downloadTokens})
                console.log("downloadURL " + downloadURL)
            })

        }
    }

    render() {
        const {text1,view1} = styles

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
                <Button title={"get"} onPress={this.downloadImages}/>
                
                

            </Content>
        </Container>
        )
    }
}

export default ListTab