import React, {Component} from 'react';

//import Message from './Message.jsx';
function Message(props){
    const message = props.message;
    console.log(message)
    return (
        <div className="message">
            <span className="message-username">{message.username}</span>
            <span className="message-content">{message.content}</span>
        </div>
    );
}

function Notification(props){
    const notification = props.notification
    console.log(notification)
    return (
            <div className="notification">
              <span className="notification-content">{notification.oldUsername} changed their username to {notification.newUsername}</span>
            </div>
        );
}

function MessageList(props) {
    const messageArray = props.messages

    let messageItems = []

    messageArray.forEach(function(element) {
        if(element.type === 'regPost'){
            messageItems.push(<Message key={element.id} message={element}/>)
            //const messageItems = messageArray.map((message) => <Message key={message.id} message={message}/>)
        } else {
            messageItems.push(<Notification key={element.id} notification={element}/>)
        }
    })

    return (
      <main className="messages">
        {messageItems}
      </main>
    )
}

export default MessageList

