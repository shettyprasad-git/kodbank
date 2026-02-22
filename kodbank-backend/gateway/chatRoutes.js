```javascript
const express = require('express');
const { HfInference } = require('@huggingface/inference');

const router = express.Router();

// Initialize Hugging Face Inference client
// Ensure HF_TOKEN is set in your .env file
const hf = new HfInference(process.env.HF_TOKEN);

const SYSTEM_PROMPT = `
You are the official KodBank Customer Support AI Assistant.Your goal is to help users with their banking inquiries.
Always maintain a professional, helpful, and polite tone.
Do NOT hallucinate or guess any sensitive financial information.If a user asks for specific account details, ask them to verify their identity through the app or contact human support.
You can answer general queries about banking, loans, credit cards, saving, and our mobile app features.
Keep your responses short, concise, and easy to read.
`;

router.post('/', async (req, res) => {
    try {
        const { message, history } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        if (!process.env.HF_TOKEN) {
            console.warn('HF_TOKEN is missing in the backend environment variables!');
        }

        // Format history for Llama
        // Hugging Face inference API expects messages in the form of { role: 'user' | 'assistant' | 'system', content: string }
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
        ];

        if (history && Array.isArray(history)) {
            history.forEach(msg => {
                messages.push({ role: msg.sender === 'user' ? 'user' : 'assistant', content: msg.text });
            });
        }

        messages.push({ role: 'user', content: message });

        const response = await hf.chatCompletion({
            model: 'meta-llama/Llama-3.1-8B-Instruct',
            messages: messages,
            max_tokens: 500,
            temperature: 0.1,
        });

        const reply = response.choices[0].message.content;

        res.json({ reply });
    } catch (error) {
        console.error('Error communicating with Hugging Face:', error);
        res.status(500).json({ error: 'Failed to generate response. Please try again later.' });
    }
});

module.exports = router;
```
