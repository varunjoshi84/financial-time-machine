import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import { APIService } from '../../services/api';
import { ChatService } from '../../services/chat';
import './ChatInterface.css';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (message) => {
        if (!message.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: message, isUser: true }]);

        // Check for greeting
        if (await ChatService.handleGreeting(message, setMessages)) return;

        setIsTyping(true);
        try {
            const prompt = APIService.generatePrompt(message);
            const data = await APIService.callGeminiAPI(prompt);
            const response = ChatService.processResponse(data);
            
            setMessages(prev => [...prev, { text: response, isUser: false }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                text: 'Sorry, I encountered an error. Please try again.', 
                isUser: false 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div className="chat-interface">
            <div className="chat-header">
                <div className="chat-title">
                    <i className="fas fa-robot"></i>
                    <h2>AI Financial Advisor</h2>
                </div>
                <button className="btn btn-outline btn-sm" onClick={handleClearChat}>
                    <i className="fas fa-trash"></i> Clear Chat
                </button>
            </div>

            <div className="chat-messages-container">
                {messages.map((msg, index) => (
                    <ChatMessage 
                        key={index} 
                        text={msg.text} 
                        isUser={msg.isUser} 
                    />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatInterface; 