// Message.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageCard from './MessageCard';
import './Message.css';

const Message = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('https://localhost:7197/Message');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="messages-container">
            <h2>Messages</h2>
            <div className="messages-grid">
                {messages.map(message => (
                    <MessageCard key={message.id} message={message} />
                ))}
            </div>
        </div>
    );
};

export default Message;
