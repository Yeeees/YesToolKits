import React, { Component } from 'react'
import { View,Text,Image,ScrollView } from 'react-native'
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
            hours: [],
            max_temp: "",
            min_temp: "",
            current_temp: "",
            weather_desc: "",
            wind: "",
            weatherIcon:""
        }
    }

    getForcast(city) {
        var forecast = []

        const request_url = "http://api.openweathermap.org/data/2.5/weather?q="+DEFAULT_CITY+"&APPID="+KEY+"&units=metric"
        
        axios.get(request_url).then ( (response)=> {
            if(response.status == 200) {
                this.setState({refreshFlag: false})
                var weather = response.data.weather
                console.log(response)
                console.log(weather[0].main)
                console.log(response.data.main.temp_max)
                forecast = forecast.concat([
                    {
                        
                        temp: response.data.main.temp,
                        weatherDesc: weather[0].description,
                        wind: response.data.wind.speed,
                        weatherIcon: weather[0].icon
                    }
                ])
                
            }else {
                console.log("failed to request")
            }
            
            
        }).catch( (error) => {
            console.log(error)
        });
        const request_url2 = "http://api.openweathermap.org/data/2.5/forecast?q="+DEFAULT_CITY+"&APPID="+KEY+"&units=metric"
        axios.get(request_url2).then ( (response)=> {
            if(response.status == 200) {
                this.setState({refreshFlag: false})
                var hourList = response.data.list
                console.log(response)
                console.log(hourList[0].main.temp)
                

                hourList.forEach( (element,index) => {
                    weatherList = element.weather
                    forecast = forecast.concat([
                        {
                            
                            temp: element.main.temp,
                            
                            weatherDesc: weatherList[0].description,
                            wind: element.wind.speed,
                            weatherIcon: weatherList[0].icon
                        }
                    ])
                })
                console.log('forecast')
                console.log(forecast)
                this.setState({hours: forecast})
                
            }else {
                console.log("failed to request")
            }
            
            
        }).catch( (error) => {
            console.log(error)
        }); 
        console.log('forecast')
        console.log(forecast)
        
    }

    render() {
        if (this.state.refreshFlag) {
            this.getForcast(this.state.city)
        }
        const {text1,view1,weather_icon,weather_view} = styles
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
                <ScrollView style={weather_view} horizontal={true}>
                    {
                        this.state.hours.map((element,index)=> {
                            return (
                                <View key={index}>
                                    <Image style={weather_icon} source={{uri: "http://openweathermap.org/img/w/" + element.weatherIcon + ".png"}} />
                                    <Text>{index*3} hours</Text>
                                    <Text>Temp: {element.temp}</Text>
                                    <Text>{element.weatherDesc}</Text>
                                    <Text>Wind: {element.wind}</Text>
                                </View>
                            )
                        })
                    }
                    
                    
                </ScrollView>
                

            </Content>
        </Container>
        )
    }
}

export default Home