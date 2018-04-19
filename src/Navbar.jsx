import React, {Component} from 'react';

class Navbar extends Component {

  render(){
    return(
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span>{this.props.numOnline} users online!</span>
      </nav>
    )
  }
}

export default Navbar;