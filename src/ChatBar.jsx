import React, {Component} from 'react';

class Chatbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: 'Anonymous',
      content: '',
      type: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    if(e.target.className === "chatbar-username"){
      this.setState({ username: e.target.value, type: 'nameChange' })
      if(e.key === 'Enter'){
        this.props.addMessage(this.state.username, this.state.content, this.state.type)
      }
    } else if(e.target.className === "chatbar-message"){
      this.setState({ content: e.target.value, type: 'regPost' })
      if(e.key === 'Enter'){
        e.target.value = ''
        this.props.addMessage(this.state.username, this.state.content, this.state.type)
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