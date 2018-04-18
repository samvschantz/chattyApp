import React, {Component} from 'react';

class Chatbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      content: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    console.log(e.target.className)
    if(e.target.className === "chatbar-username"){
      this.setState({ username: e.target.value })
    } else if(e.target.className === "chatbar-message"){
      this.setState({ content: e.target.value })
      if(e.key === 'Enter'){
        //somehow send state info to app.jsx
        e.target.value = ''
        this.props.addMessage(this.state.username, this.state.content)
      }
    }
  }

  render(){
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.currentUser} onKeyUp={this.handleChange} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={this.handleChange} />
      </footer>
    );
  }
}
export default Chatbar;