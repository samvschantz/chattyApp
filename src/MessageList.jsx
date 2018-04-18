import React, {Component} from 'react';

import Message from './Message.jsx';

function MessageList(props) {
    const messageArray = props.messages

    const messageItems = messageArray.map((message) =>
        <div className="message" key={message.id}>
            <span className="message-username">{message.username}</span>
            <span className="message-content">{message.content}</span>
        </div>
    )

    return (
      <main className="messages">
        {messageItems}
      </main>
    )
}

export default MessageList

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );