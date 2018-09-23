import React, { Component } from 'react'
import { View,Text,Dimensions } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content, Body, Right} from 'native-base'
import MapView from 'react-native-maps'

const {width,height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class ParkingSpot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude1: null,
            longtitude1: null,
            iniitialPosition: {
                latitude:"",
                longitude:"",
                latitudeDelta: 0,
                longtitudeDelta: 0
            },
            // markerPosition: {
            //     latitude:0,
            //     longtitude:0
            // }
        }
    }
    //watchID: ?number=null
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position)=>{
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longtitudeDelta: LONGTITUDE_DELTA
            }

            this.setState({iniitialPosition: initialRegion})
            this.setState({markerPosition: initialRegion})
            this.setState({latitude1: position.coords.latitude})
            this.setState({longitude1: position.coords.longitude})
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout:20000, maximumAge:1000})
    }
    
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
                    <MapView 
                        style={styles.map}
                        region={{
                            latitude: -37.878236, 
                            longitude: 145.044651,
                            latitudeDelta: 0.1,
                            longtitudeDelta: 0.1
                        }}
                    />
                </Body>
                <Right transparent>

                </Right>
                
            </Header>
            <Content contentContainerStyle={view1}>
                <Text>{this.state.latitude1 + " " + this.state.longitude1}</Text>
                    
            </Content>
        </Container>
        )
    }
}
 
export default ParkingSpot