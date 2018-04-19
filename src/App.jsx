import React, {Component} from 'react';

import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.state =
            {
              currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
              messages: [],
              numOnline: 0,
            };
  }

  addMessage(username, content, type, newname) {
    const newMessage = {id: Date.now(), username, content, type};
    const newMessageForServer = JSON.stringify(newMessage);
    this.socket.send(newMessageForServer);
  }

  componentDidMount(){
    this.socket = new WebSocket("ws://localhost:3001/");
    this.socket.addEventListener('message', (event) => {
      let msgObj = JSON.parse(event.data);
      let notifObj = {id:msgObj.id, oldUsername:this.state.currentUser.name, newUsername:msgObj.username}
      let peopleObj = {numOnline:msgObj.numOnline}
      if(msgObj.type === 'regPost'){
        this.setState({ currentUser:{ name:msgObj.username }, messages: this.state.messages.concat(msgObj) });
      } else if (msgObj.type === 'nameChange'){
        this.setState({ messages: this.state.messages.concat(notifObj)})
      } else if (msgObj.type === 'numOnline'){
        console.log('faihred')
        console.log(peopleObj.numOnline)
      }
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
