import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    view1: {
        //justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    weather_icon: {
        height: 100,
        width: 100
    },
    weather_view: {
        flex: 1,
        flexDirection: 'row',
        //height: 20
    },
    weather_each: {
        marginLeft: 10,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180
    }
})