import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your shopping assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Add this function to handle message display with HTML formatting
const formatMessage = (text) => {
  if (!text) return '';
  
  // Remove all HTML tags
  let cleanText = text.replace(/<[^>]*>?/gm, '');
  
  // Convert bullets to new lines and ensure proper spacing
  cleanText = cleanText
    .replace(/•/g, '\n-')  // Convert bullets to dashes with new lines
    .replace(/\n/g, '\n\n') // Double new lines for paragraph spacing
    .replace(/-/g, '\n-');  // Ensure dashes start on new lines

  return cleanText;
};

// In your message rendering:
{messages.map((message, index) => (
  <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
    <div className="message-content" style={{whiteSpace: 'pre-line'}}>
      {formatMessage(message.text)}
    </div>
  </div>
))}

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    try {
      // Call backend API
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          history: messages.map(msg => ({ role: msg.isUser ? 'user' : 'assistant', content: msg.text }))
        }),
      });

      const data = await response.json();
      if (data.success) {
        setMessages(prev => [...prev, { text: data.response, isUser: false }]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble connecting. Please try again later.", 
        isUser: false 
      }]);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header">
        <h3>ShopGenius Assistant</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chatbot-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;