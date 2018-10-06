import React, { Component } from 'react'
import { View,Text,ScrollView, Button, Image, ActivityIndicator, TouchableOpacity,Dimensions,TextInput } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker'
import * as firebase from 'firebase'

class UploadTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //Activity indicator
            loading: false,
            //Local Path of the image,
            imagePath: null,
            //URL of the image
            dp: null,
            //Image Desc
            imageDesc: null,
        }
        this.uploadImage = this.uploadImage.bind(this)
    }

    chooseImage() {
      this.setState({ loading: true })
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo'
      }).then(image => {
  
        this.setState({imagePath: image.path})
        console.log("imagePath: "+this.state.imagePath)
        
      })
      .catch((error) => {
        console.log(error)
      })
      this.setState({ loading: false })
    }

    uploadImage(){
      if(this.state.imagePath != null) {
        this.setState({ loading: true })
        const Blob = RNFetchBlob.polyfill.Blob
        const fs = RNFetchBlob.fs
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        //const { uid } = this.state.user
        const uid = "Images"
        //const uid = new Date().toLocaleString()
        const imagePath = this.state.imagePath
    
          let uploadBlob = null
          const imageName = new Date().toISOString() + ".jpg"
          console.log(imageName)
          const imageRef = firebase.storage().ref(uid).child(imageName)
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
              firebase.database().ref('instadiary/').push({
                  imageURL: url,
                  caption: this.state.imageDesc
              })
    
            })
            .catch((error) => {
              console.log(error)
            })
      }
      else {
        alert("Pick Image First Please")
      }
        
        
      }


    render() {
        const {text1,view1,imageShow,uploadBtn} = styles
        const dpr = this.state.dp ? (<TouchableOpacity onPress={ () => this.openPicker() }><Image
         style={{width: 100, height: 100, margin: 5}}
         source={{uri: this.state.dp}}
       /></TouchableOpacity>) : (<Button
      onPress={ () => this.openPicker() }
      title={ "Change Picture" }
    />)

    const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : 
    (<View style={styles.container}>
      <View style={{flexDirection: "row"}}>
        { dpr }
      </View>
    </View>)

    const picker = this.state.imagePath ? (<TouchableOpacity onPress={ () => this.chooseImage() }><Image
    style={{width: Dimensions.get("window").width , height: 450, margin: 5}}
    source={{uri: this.state.imagePath}}
    /></TouchableOpacity>) : (<Button
    onPress={ () => this.chooseImage() }
    title={ "Change Picture" }
    />)

    

    const selectImage =  this.state.loading ? <ActivityIndicator animating={this.state.loading} /> :
    (
      <View style={imageShow}>
        {/* <View style={{flexDirection: "row"}}>
          { picker }
        </View> */}
        { picker }
        
      </View>
    )
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
                {/* { dps } */}
                    
                {selectImage}
                <TextInput 
                  onChangeText={text => this.setState({imageDesc : text})}
                  placeholder={"Image Description"}
                  multiline = {true}
                />
                <Button title={"Upload"} style={uploadBtn} onPress={this.uploadImage}/>
                </Content>
            </Container>
        )
    }
}

export default UploadTab