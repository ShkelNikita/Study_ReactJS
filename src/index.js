import React from 'react';
import ReactDom from 'react-dom';

const message = 'You pressed me!';
const messages = [];

const Message = (props) => <span>{props.text}</span>

document.getElementById('button').addEventListener('click', ()=>{    
    messages.push(message),
    ReactDom.render(
        <Message text={messages} />,
        document.getElementById('result')
    )
})



