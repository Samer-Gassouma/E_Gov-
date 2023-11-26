import { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal'; // Import react-modal

import UserProfileModal from '../Profile';
const services = [
  { id: 1, name: 'خدمات الإدارة العامة', logo: 'blogger.png', ava: true },
  { id: 3, name: 'تسجيل الضرائب وخدمات الدفع', logo: 'taxes.png', ava: false },
  { id: 4, name: 'خدمات الضمان الاجتماعي والرعاية الاجتماعية', logo: 'CNSS-01.png', ava: false },
  { id: 5, name: 'خدمات الأحوال الشخصية', logo: 'people.png', ava: false },
  { id: 6, name: 'خدمات الأحوال العقارية', logo: 'house.png', ava: false },
  { id: 7, name: 'خدمات الأحوال الإدارية', logo: 'manager.png', ava: false },
  { id: 8, name: 'خدمات الأحوال القضائية', logo: 'justice-scale.png', ava: false },
  { id: 9, name: 'تسجيل السيارات والتراخيص', logo: 'car.png', ava: false },
];

const Main = (props) => {

  // State to manage user data
  const [user, setUser] = useState(props.user);
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* User Profile Section */}
      <div className="absolute top-5 right-5 flex items-center text-gray-700">
        <UserProfileModal user={user} setUser={setUser} />
      </div>
      <div className="absolute top-5 left-5 flex items-center text-gray-700">
        <div className="bg-blue-100 text-black px-4 py-2  shadow-md focus:outline-none" >
          E-Government++
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-center mb-6 text-white">الخدمات الإلكترونية</h1>
      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {services.map((service) => (
          <Link key={service.id}  href={service.ava ? `/services/${service.id}` : ''}>
            <div className={`block rounded-lg overflow-hidden border border-gray-300 p-4 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${!service.ava ? 'opacity-60' : ''}`}>
              <div className="p-4 flex items-center justify-center bg-white">
                <img src={service.logo} alt={service.name} className="w-16 h-16 mr-3" />
                <span className="text-lg font-semibold text-black">{service.name}</span>
              </div>
              {!service.ava && (
                <div className="bg-gray-900 text-center text-M py-1">
                  Coming Soon
                </div>
              )}
            </div>
          </Link>
        ))}
        <button className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md flex items-center"  onClick={toggleChatbot}>
          
        Join Chatbot
        <img src="chatbot.png" alt="Chatbot" className="w-6 h-6" />
       
      </button>
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-md border text-black">
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
    </div>
  );
};

export default Main;
