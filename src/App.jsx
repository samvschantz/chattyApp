import React, {Component} from 'react';

import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =
            {
              currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
              messages: []
            };
  }

  addMessage(username, content) {
    const newMessage = {id: Date.now(), username, content};
    const newMessageForServer = JSON.stringify(newMessage)
    const messages = this.state.messages.concat(newMessage);
    this.socket.send(newMessageForServer);
    //this.setState({messages: messages});
  }

  componentDidMount(){
    this.socket = new WebSocket("ws://localhost:3001/");
    this.socket.addEventListener('message', (event) => {
      let msgObj = JSON.parse(event.data);
      console.log(msgObj)
      this.setState({ messages: this.state.messages.concat(msgObj) });
    });
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <Chatbar currentUser={this.state.currentUser.name} addMessage={this.addMessage.bind(this)}/>
      </div>
    );
  }
}
export default App;
