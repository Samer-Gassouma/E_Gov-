import React, { useState } from 'react';

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');

      // Add logic to send user message and get chatbot response
      const botResponse = 'Bot response'; // Replace with actual chatbot response
      setTimeout(() => {
        setMessages([...messages, { text: botResponse, sender: 'bot' }]);
      }, 500); // Simulate delay before receiving bot response (replace with actual logic)
    }
  };

  return (
    <div className="fixed bottom-10 right-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md focus:outline-none"
        onClick={toggleChatbot}
      >
        Open Chatbot
      </button>
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-md border">
          <div className="h-60 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`my-2 py-2 px-4 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between p-2 border-t">
            <input
              type="text"
              className="flex-1 py-2 px-4 rounded-lg border focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md focus:outline-none"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleChatbot;
