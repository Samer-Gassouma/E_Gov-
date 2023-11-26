import { useState } from 'react';
import Modal from 'react-modal';

const ChatbotContent = ({ closeModal }) => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleQuestionSubmit = () => {
    const foundQuestion = data.questions.find(
      (q) => q.question.toLowerCase() === input.toLowerCase()
    );
    if (foundQuestion) {
      setAnswer(foundQuestion.answer);
    } else {
      setAnswer("Sorry, I don't have an answer to that question.");
    }
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your question here..."
        className="w-full p-2 mb-4 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleQuestionSubmit}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Ask
      </button>
      {answer && (
        <div className="mt-4 p-3 bg-white rounded-lg shadow-md">
          <p className="text-gray-800">{answer}</p>
        </div>
      )}
    </div>
  );
};

const ChatbotWidget = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md flex items-center cursor-pointer" onClick={openModal}>
      <span className="mr-2">Chatbot</span>
      <img src="chatbot.png" alt="Chatbot" className="w-6 h-6" />

      {/* Chatbot Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Chatbot Modal"
        className="Modal"
        overlayClassName="Overlay"
        style={{
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '400px',
            margin: '0 auto',
          },
        }}
      >
        <h2>Chatbot</h2>
        <ChatbotContent closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ChatbotWidget;
