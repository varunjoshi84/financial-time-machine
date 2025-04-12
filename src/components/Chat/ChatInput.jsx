import React, { useState, useRef } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSendMessage }) => {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        // Auto-resize textarea
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
            // Reset textarea height
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };

    return (
        <div className="chat-input-container">
            <div className="input-group">
                <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your financial question here..."
                    rows="1"
                />
                <button onClick={handleSend}>
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
            <div className="input-footer">
                <small>AI Financial Advisor may produce inaccurate information. Consider verifying important financial decisions.</small>
            </div>
        </div>
    );
};

export default ChatInput; 