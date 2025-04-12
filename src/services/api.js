const CONFIG = {
    GEMINI_API_KEY: 'AIzaSyBkMW9C9F0wsg5Q6h8THbdv7Po3wtaOPqA',
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    MAX_RESPONSE_WORDS: 500
};

export const APIService = {
    generatePrompt: (message) => ({
        contents: [{
            parts: [{
                text: `You are a financial advisor. Keep responses under ${CONFIG.MAX_RESPONSE_WORDS} words. 
                Focus on Indian markets. Use bullet points. Be concise.
                Question: ${message}`
            }]
        }]
    }),

    callGeminiAPI: async (prompt) => {
        const response = await fetch(`${CONFIG.GEMINI_API_URL}?key=${CONFIG.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prompt)
        });

        if (!response.ok) throw new Error(`API request failed: ${response.status}`);
        return response.json();
    }
}; 