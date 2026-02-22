import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { api } from '../../utils/api';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm the KodBank Assistant. How can I help you today?", sender: 'assistant' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Exclude the very last user message from history, as it's sent as 'message'
            const history = messages.length > 1 ? messages.slice(1) : [];

            const response = await api.post('/chat', {
                message: userMessage.text,
                history: history
            });

            const assistantMessage = { text: response.data.reply, sender: 'assistant' };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage = { text: "Sorry, I'm having trouble connecting to the server. Please try again later.", sender: 'assistant', isError: true };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {/* Floating Action Button */}
            <button
                className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleChat}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <span className="close-icon">×</span>
                ) : (
                    <span className="chat-icon">💬</span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window glassmorphism">
                    <div className="chatbot-header">
                        <h3>KodBank Assistant</h3>
                        <span className="status-indicator online"></span>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message-wrapper ${msg.sender}`}>
                                {msg.sender === 'assistant' && <div className="avatar assistant-avatar">KB</div>}
                                <div className={`message bubble ${msg.sender} ${msg.isError ? 'error' : ''}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message-wrapper assistant">
                                <div className="avatar assistant-avatar">KB</div>
                                <div className="message bubble assistant typing">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-area" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about your finances..."
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()}>
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
