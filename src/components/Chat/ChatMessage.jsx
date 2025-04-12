import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ text, isUser }) => {
    return (
        <div className={`message ${isUser ? 'user-message' : 'ai-message'}`}>
            <div className="message-avatar">
                <i className={`fas fa-${isUser ? 'user' : 'robot'}`}></i>
            </div>
            <div className="message-content">
                {text}
            </div>
        </div>
    );
};

export default ChatMessage; 