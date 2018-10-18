import React, { Component } from 'react'
import Chat from './Chat';
import Login from './Login';
import {
    Platform,
  } from 'react-native';
import {createStackNavigator} from 'react-navigation'


// class CloudChat extends Component {
//     render() {
//         return (
//             <Router>
//               <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}  hideNavBar={true} >
//                 <Scene key='login' title='Login' component={Login}/>
//                 <Scene key='chat' title='Chat' component={Chat}/>
//               </Scene>
//             </Router>
//           );
//     }

// }

//export default CloudChat 

export default createStackNavigator(
    {
        Login: {
            screen: Login,

        },
        Chat: {
            screen: Chat,
        }
    },{
        navigationOptions: {
            //header: null
            
        },
        
    }
)