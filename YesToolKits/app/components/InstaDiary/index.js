import React, { Component } from 'react'
import { View,Text,ScrollView, Button, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker'
import * as firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBtHCE5y0HZ-eB7uLleX-cgS8-oS_sjUF4",
    authDomain: "yestoolkits.firebaseapp.com",
    databaseURL: "https://yestoolkits.firebaseio.com",
    projectId: "yestoolkits",
    storageBucket: "yestoolkits.appspot.com",
    messagingSenderId: "304847695731"
  };
  firebase.initializeApp(config);
class InstaDiary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            dp: null
        }
    }

    openPicker(){
        this.setState({ loading: true })
        const Blob = RNFetchBlob.polyfill.Blob
        const fs = RNFetchBlob.fs
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        //const { uid } = this.state.user
        const uid = "12345"
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          mediaType: 'photo'
        }).then(image => {
    
          const imagePath = image.path
    
          let uploadBlob = null
    
          const imageRef = firebase.storage().ref(uid).child("dp.jpg")
          let mime = 'image/jpg'
          fs.readFile(imagePath, 'base64')
            .then((data) => {
              //console.log(data);
              return Blob.build(data, { type: `${mime};BASE64` })
          })
          .then((blob) => {
              uploadBlob = blob
              return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
              uploadBlob.close()
              return imageRef.getDownloadURL()
            })
            .then((url) => {
    
              let userData = {}
              //userData[dpNo] = url
              //firebase.database().ref('users').child(uid).update({ ...userData})
    
              let obj = {}
              obj["loading"] = false
              obj["dp"] = url
              this.setState(obj)
    
            })
            .catch((error) => {
              console.log(error)
            })
        })
        .catch((error) => {
          console.log(error)
        })
      }


    render() {
        const {text1,view1,weather_icon,weather_view,weather_each} = styles
        const dpr = this.state.dp ? (<TouchableOpacity onPress={ () => this.openPicker() }><Image
         style={{width: 100, height: 100, margin: 5}}
         source={{uri: this.state.dp}}
       /></TouchableOpacity>) : (<Button
      onPress={ () => this.openPicker() }
      title={ "Change Picture" }
    />)

    const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (<View style={styles.container}>
      <View style={{flexDirection: "row"}}>
        { dpr }
      </View>
    </View>)
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
                { dps }
                    

                </Content>
            </Container>
        )
    }
}

export default InstaDiary