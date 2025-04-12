import React, { useState, useRef, useEffect } from 'react';

const AIAdvisor = () => {
    const [messages, setMessages] = useState([
        {
            type: 'ai',
            content: `Hello! I'm your AI financial advisor. I'm here to help you with:
                <ul>
                    <li>Investment strategies</li>
                    <li>Budget planning</li>
                    <li>Retirement planning</li>
                    <li>Debt management</li>
                    <li>Financial goal setting</li>
                </ul>
                <p>Here are some questions you might want to ask:</p>
                <div class="suggested-questions">
                    <button class="suggestion-btn">How should I start investing?</button>
                    <button class="suggestion-btn">What's the best way to save for retirement?</button>
                    <button class="suggestion-btn">How can I reduce my monthly expenses?</button>
                    <button class="suggestion-btn">What's a good emergency fund amount?</button>
                    <button class="suggestion-btn">How do I create a budget?</button>
                    <button class="suggestion-btn">What are good investment options for beginners?</button>
                </div>`
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const formatResponse = (message) => {
        // Add mock responses for common questions
        const mockResponses = {
            'invest': `<strong>Starting Your Investment Journey:</strong>
                <ol>
                    <li><strong>Set Clear Goals:</strong> Define your investment objectives (retirement, house, education)</li>
                    <li><strong>Emergency Fund:</strong> Build 3-6 months of expenses before investing</li>
                    <li><strong>Start Small:</strong> Begin with SIPs in mutual funds (₹500-1000/month)</li>
                    <li><strong>Diversify:</strong> Spread investments across different asset classes
                        <ul>
                            <li>Equity Mutual Funds</li>
                            <li>Fixed Deposits</li>
                            <li>PPF/NPS</li>
                            <li>Gold</li>
                        </ul>
                    </li>
                    <li><strong>Regular Review:</strong> Monitor and rebalance portfolio quarterly</li>
                </ol>`,
            'retirement': `<strong>Retirement Planning Strategy:</strong>
                <ol>
                    <li><strong>Calculate Needs:</strong> Estimate 70-80% of current expenses</li>
                    <li><strong>Start Early:</strong> Begin in your 20s or 30s for maximum benefit</li>
                    <li><strong>Investment Options:</strong>
                        <ul>
                            <li>NPS (National Pension System)</li>
                            <li>PPF (Public Provident Fund)</li>
                            <li>Mutual Funds (Equity & Debt)</li>
                            <li>EPF (Employee Provident Fund)</li>
                        </ul>
                    </li>
                    <li><strong>Regular Contributions:</strong> Aim for 15-20% of income</li>
                    <li><strong>Tax Planning:</strong> Utilize Section 80C benefits</li>
                </ol>`,
            'budget': `<strong>Creating an Effective Budget:</strong>
                <ol>
                    <li><strong>Track Income:</strong> List all sources of monthly income</li>
                    <li><strong>Categorize Expenses:</strong>
                        <ul>
                            <li>Fixed (rent, EMI, utilities)</li>
                            <li>Variable (groceries, entertainment)</li>
                            <li>Savings & Investments</li>
                        </ul>
                    </li>
                    <li><strong>50/30/20 Rule:</strong>
                        <ul>
                            <li>50% for needs</li>
                            <li>30% for wants</li>
                            <li>20% for savings</li>
                        </ul>
                    </li>
                    <li><strong>Use Tools:</strong> Budgeting apps or spreadsheets</li>
                    <li><strong>Review Monthly:</strong> Adjust as needed</li>
                </ol>`,
            'emergency': `<strong>Emergency Fund Guidelines:</strong>
                <ol>
                    <li><strong>Amount:</strong> 3-6 months of living expenses</li>
                    <li><strong>Where to Keep:</strong>
                        <ul>
                            <li>Liquid Funds</li>
                            <li>Savings Account</li>
                            <li>Short-term FDs</li>
                        </ul>
                    </li>
                    <li><strong>Factors to Consider:</strong>
                        <ul>
                            <li>Job stability</li>
                            <li>Family size</li>
                            <li>Monthly expenses</li>
                            <li>Insurance coverage</li>
                        </ul>
                    </li>
                </ol>`,
            'expenses': `<strong>Reducing Monthly Expenses:</strong>
                <ol>
                    <li><strong>Track Spending:</strong> Use apps to monitor expenses</li>
                    <li><strong>Cut Unnecessary Costs:</strong>
                        <ul>
                            <li>Dining out less frequently</li>
                            <li>Review subscriptions</li>
                            <li>Use public transport</li>
                        </ul>
                    </li>
                    <li><strong>Smart Shopping:</strong>
                        <ul>
                            <li>Buy in bulk</li>
                            <li>Use coupons</li>
                            <li>Compare prices</li>
                        </ul>
                    </li>
                    <li><strong>Energy Savings:</strong> Reduce utility bills</li>
                </ol>`,
            'investment options': `<strong>Investment Options for Beginners:</strong>
                <ol>
                    <li><strong>Mutual Funds:</strong>
                        <ul>
                            <li>Index Funds</li>
                            <li>Large Cap Funds</li>
                            <li>Balanced Funds</li>
                        </ul>
                    </li>
                    <li><strong>Fixed Income:</strong>
                        <ul>
                            <li>PPF</li>
                            <li>FDs</li>
                            <li>Debt Funds</li>
                        </ul>
                    </li>
                    <li><strong>Equity:</strong>
                        <ul>
                            <li>Blue-chip stocks</li>
                            <li>ETF</li>
                        </ul>
                    </li>
                    <li><strong>Gold:</strong>
                        <ul>
                            <li>Sovereign Gold Bonds</li>
                            <li>Gold ETFs</li>
                        </ul>
                    </li>
                </ol>`
        };

        // Check for keywords in the message
        const lowerMessage = message.toLowerCase();
        for (const [keyword, response] of Object.entries(mockResponses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        // Default response if no keyword matches
        return `<strong>Financial Advice:</strong>
            <ol>
                <li>Review your current financial situation</li>
                <li>Set clear financial goals</li>
                <li>Create a budget and stick to it</li>
                <li>Build an emergency fund</li>
                <li>Start investing early</li>
                <li>Diversify your investments</li>
                <li>Regularly review and adjust your plan</li>
            </ol>`;
    };

    const handleSendMessage = async () => {
        const message = inputRef.current.value.trim();
        if (!message) return;

        // Add user message
        setMessages(prev => [...prev, { type: 'user', content: message }]);
        inputRef.current.value = '';

        // Show typing indicator
        setIsTyping(true);

        try {
            // Simulate API call with formatted response
            const response = await new Promise(resolve => 
                setTimeout(() => resolve(formatResponse(message)), 1000)
            );

            // Add AI response
            setMessages(prev => [...prev, { type: 'ai', content: response }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                type: 'ai', 
                content: 'Sorry, I encountered an error. Please try again.' 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleSuggestionClick = (suggestion) => {
        inputRef.current.value = suggestion;
        handleSendMessage();
    };

    const handleClearChat = () => {
        setMessages([
            {
                type: 'ai',
                content: `Hello! I'm your AI financial advisor. I'm here to help you with:
                    <ul>
                        <li>Investment strategies</li>
                        <li>Budget planning</li>
                        <li>Retirement planning</li>
                        <li>Debt management</li>
                        <li>Financial goal setting</li>
                    </ul>
                    <p>Here are some questions you might want to ask:</p>
                    <div class="suggested-questions">
                        <button class="suggestion-btn" onclick="handleSuggestionClick('How should I start investing?')">How should I start investing?</button>
                        <button class="suggestion-btn" onclick="handleSuggestionClick('What's the best way to save for retirement?')">What's the best way to save for retirement?</button>
                        <button class="suggestion-btn" onclick="handleSuggestionClick('How can I reduce my monthly expenses?')">How can I reduce my monthly expenses?</button>
                        <button class="suggestion-btn" onclick="handleSuggestionClick('What's a good emergency fund amount?')">What's a good emergency fund amount?</button>
                        <button class="suggestion-btn" onclick="handleSuggestionClick('How do I create a budget?')">How do I create a budget?</button>
                        <button class="suggestion-btn" onclick="handleSuggestionClick('What are good investment options for beginners?')">What are good investment options for beginners?</button>
                    </div>`
            }
        ]);
    };

    return (
        <section id="advisor" className="section">
            <div className="chat-interface">
                <div className="chat-header">
                    <div className="chat-title">
                        <i className="fas fa-robot"></i>
                        <h2>AI Financial Advisor</h2>
                    </div>
                    <div className="chat-actions">
                        <button className="btn btn-outline btn-sm" onClick={handleClearChat}>
                            <i className="fas fa-trash"></i> Clear Chat
                        </button>
                    </div>
                </div>
                <div className="chat-messages-container">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.type}-message`}>
                            <div className="message-avatar">
                                <i className={`fas fa-${message.type === 'user' ? 'user' : 'robot'}`}></i>
                            </div>
                            <div className="message-content" dangerouslySetInnerHTML={{ __html: message.content }} />
                        </div>
                    ))}
                    {isTyping && (
                        <div className="message ai-message">
                            <div className="message-avatar">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className="message-content">
                                <div className="typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="chat-input-container">
                    <div className="input-group">
                        <textarea
                            ref={inputRef}
                            className="form-control"
                            placeholder="Type your financial question here..."
                            rows="1"
                            onKeyPress={handleKeyPress}
                            autoFocus
                        />
                        <button className="btn btn-primary" onClick={handleSendMessage}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div className="input-footer">
                        <small>AI Financial Advisor may produce inaccurate information. Consider verifying important financial decisions.</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAdvisor; 