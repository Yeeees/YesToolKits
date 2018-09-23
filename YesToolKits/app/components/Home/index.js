import React, { Component } from 'react'
import { View,Text,Image } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
import axios from 'axios'

const DEFAULT_CITY = 'Melbourne'
const KEY = '36f469a5fcfe2aeb0f7eb0b0eea3c48d'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            city: DEFAULT_CITY,
            refreshFlag: true,
            max_temp: "",
            min_temp: "",
            current_temp: "",
            weather_desc: "",
            wind: "",
            weatherIcon:""
        }
    }

    getForcast(city) {
        const request_url = "http://api.openweathermap.org/data/2.5/weather?q="+DEFAULT_CITY+"&APPID="+KEY+"&units=metric"
        axios.get(request_url).then ( (response)=> {
            if(response.status == 200) {
                this.setState({refreshFlag: false})
                var weather = response.data.weather
                console.log(response)
                console.log(weather[0].main)
                console.log(response.data.main.temp_max)
                this.setState({max_temp: response.data.main.temp_max})
                this.setState({min_temp: response.data.main.temp_min})
                this.setState({current_temp: response.data.main.temp})
                this.setState({weather_desc: weather[0].description})
                this.setState({weatherIcon: weather[0].icon})
                this.setState({wind: response.data.wind.speed})
                
                
            }else {
                console.log("failed to request")
            }
            
        }).catch( (error) => {
            console.log(error)
        });
    }

    render() {
        if (this.state.refreshFlag) {
            this.getForcast(this.state.city)
        }
        const {text1,view1,weather_icon} = styles
        console.log('render refresh')
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
                <Image style={weather_icon} source={{uri: "http://openweathermap.org/img/w/" + this.state.weatherIcon + ".png"}} />
                <Text>Max: {this.state.max_temp} | Min: {this.state.min_temp} | Current: {this.state.current_temp}</Text>
                <Text>Weather: {this.state.weather_desc}</Text>
                <Text>Wind: {this.state.wind}</Text>

            </Content>
        </Container>
        )
    }
}

export default Home