import React, { Component } from 'react'
import { View,StyleSheet,Text,Image,ScrollView,ListView,TouchableHighlight,Alert,AlertIOS } from 'react-native'
import styles from './styles'
import {Header,Left,Icon,Container,Content,Body,Right} from 'native-base'
import axios from 'axios'
import * as firebase from 'firebase'
//const styles = require('./styles')


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
            weatherIcon:"",
            //datasource for to-do list
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
              })
        }
        this.itemsRef = this.getRef().child('todoitems');

    }
    getRef() {
        return firebase.database().ref();
    }

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
    
          // get children as an array
          var items = [];
          snap.forEach((child) => {
            items.push({
              title: child.val().title,
              _key: child.key
            });
          });
    
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });
    
        });
    }
    
    componentDidMount() {
        this.listenForItems(this.itemsRef);
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
                this.setState({hours: forecast.slice(0,9)})
                
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
        const {text1,view1,weather_icon,weather_view,weather_each,listcontainer,listview,actionText,listTitle} = styles
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
                <View style={weather_view}>
                    <ScrollView  horizontal={true}>
                        {
                            this.state.hours.map((element,index)=> {
                                return (
                                    <View key={index} style={weather_each}>
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
                </View>
                

                <View style={listcontainer}>
                    <Text style={listTitle}>{"To-do List"}</Text>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderItem.bind(this)}
                        enableEmptySections={true}
                        style={listview}/>

                    <TouchableHighlight
                        underlayColor={"red"}
                        onPress={this._addItem.bind(this)}>
                        <Text style={actionText}>{"Add"}</Text>
                    </TouchableHighlight>
                </View>
                

            </Content>
        </Container>
        )
    }

    _addItem() {
        AlertIOS.prompt(
          'Add New Item',
          null,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {
              text: 'Add',
              onPress: (text) => {
                this.itemsRef.push({ title: text })
              }
            },
          ],
          'plain-text'
        );
    }
    
    _renderItem(item) {
        const {li,liText} = styles
        const onPress = () => {
          AlertIOS.alert(
            'Complete',
            null,
            [
              {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
              {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
            ]
          );
        };
    
        return (
            
          <TouchableHighlight onPress={onPress}>
                <View style={li}>
                    <Text style={liText}>{item.title}</Text>
                </View>
          </TouchableHighlight>
        );
      }
}

export default Home