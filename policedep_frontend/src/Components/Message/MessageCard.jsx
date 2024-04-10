// MessageCard.jsx
import React from 'react';
import './MessageCard.css';

const MessageCard = ({ message }) => {
    return (
        <div className="message-card">
            <h3>Message ID: {message.id}</h3>
            <p>Contents: {message.contents}</p>
        </div>
    );
};

export default MessageCard;
