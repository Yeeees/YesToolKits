import {StyleSheet,Dimensions} from 'react-native'

export default StyleSheet.create({
    view1: {
        //justifyContent: 'center',
        alignItems: 'center',
        //flex: 1
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
    },
    listcontainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,

    },
    listTitle: {
        fontSize: 25,
        marginTop: 5
    },
    listview: {
        flex: 1,
        backgroundColor: '#ea2c2c'
    },
    li: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
        width: Dimensions.get('window').width,

    },
    liContainer: {
        flex: 1,
    },
    liText: {
        color: '#333',
        fontSize: 16,
    },
    navbar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row'
    },
    navbarTitle: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500"
    },
    statusbar: {
        backgroundColor: '#fff',
        height: 22,
    },
    center: {
        textAlign: 'center',
    },
    actionText: {
        backgroundColor: '#2ceae0',//'#fff',
        fontSize: 25,
        textAlign: 'center',
    },
    action: {
        backgroundColor: 'red',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
})