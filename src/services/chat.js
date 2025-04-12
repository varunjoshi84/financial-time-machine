export const ChatService = {
    handleGreeting: async (message, setMessages) => {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || 
            lowerMessage.includes('hey') || lowerMessage.includes('greetings')) {
            setMessages(prev => [...prev, { 
                text: "Hello! I'm your AI financial advisor. How can I help you today?", 
                isUser: false 
            }]);
            return true;
        }
        return false;
    },

    processResponse: (data) => {
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        }
        throw new Error('Invalid response format');
    }
}; 