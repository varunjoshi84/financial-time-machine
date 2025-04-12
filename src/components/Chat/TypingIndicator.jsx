import React from 'react';
import './TypingIndicator.css';

const TypingIndicator = () => {
    return (
        <div className="message ai-message">
            <div className="message-avatar">
                <i className="fas fa-robot"></i>
            </div>
            <div className="message-content">
                <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default TypingIndicator; 