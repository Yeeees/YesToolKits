import React from 'react';
import {Alert} from 'react-native';
import {navigation} from 'react-navigation'
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../../../Backend';

export default class Chat extends React.Component {
//   constructor(prpos) {
//     super(props)
    
//   }
static navigationOptions = {
    title: 'Chat Room',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    messages: [],
    //name: this.props.name
  };
  
  componentWillMount() {
    this.setState({name: this.props.navigation.getParam('name')})
    this.props.name = this.state.name
  }
  render() {
    return (
        
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          //_id: Backend.getUid(),
          _id: this.state.name,
          name: this.state.name,
        }}
      />
    );
    
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
    Alert.alert(this.props.navigation.getParam('name')+" "+this.state.name+" "+this.props.name)
    // this.props.name = this.state.name
    // console.log("state " + this.state.name)
    // console.log("props " + this.props.name)
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
  
}

Chat.defaultProps = {
  name: 'Someone',
};

// Chat.propTypes = {
//   name: React.PropTypes.string,
// };
