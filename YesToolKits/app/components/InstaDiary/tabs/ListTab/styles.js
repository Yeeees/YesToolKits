import {StyleSheet, Dimensions} from 'react-native'


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
    listview: {
        flex:1
    },
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        paddingTop: 20
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderColor: '#d8d8d8',
    },
    infoText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    comment: {
        flexDirection: 'row',
        padding:10,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderColor: '#d8d8d8'
    },
    commentText: {
        paddingRight: 15,
        fontWeight: 'bold'
    }
})