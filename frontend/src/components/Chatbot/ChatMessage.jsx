import React from 'react';

const ChatMessage = ({ text, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      <div className="message-content">
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;