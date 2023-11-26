import { useState } from 'react';
import Link from 'next/link';
const UserProfileModal = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [changeRequest, setChangeRequest] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setChangeRequest('');
  };

  const handleInputChange = (e) => {
    setChangeRequest(e.target.value);
  };

  const handleSubmitRequest = () => {
    // Logic to handle change request submission
    console.log('Change Request:', changeRequest);
    // Add functionality to submit change request to backend or perform necessary actions
    // For example, call an API to update user information based on changeRequest
    // Reset changeRequest state
    setChangeRequest('');
    // Close the modal after submitting the request
    setIsModalOpen(false);
  };

  const handleLogout = () => {  
    
    localStorage.removeItem('user');
    localStorage.removeItem('E_id');
    window.location.reload();
  }

  return (
    <div>
      <img
        src={user.imageUrl}
        alt="User"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={handleModalOpen}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">User Information</h1>
            <div className="mb-4">
              
              <p>Name: {user.Firstname +  + user.Lastname}</p>
              <p>Email: {user.email}</p>
            </div>
            <Link href={`/user-profile/${user.E_id}`}>
        <div className="text-blue-500 hover:underline ml-2">View Full Profile</div>
      </Link>
            <div className="mb-4">
              <label htmlFor="changeRequest" className="block mb-2 font-semibold">
                Request Change:
              </label>
              <textarea
                id="changeRequest"
                className="w-full p-2 border rounded"
                rows="3"
                value={changeRequest}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex justify-end">
            
              <button
                onClick={handleSubmitRequest}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Submit
              </button>
              <button
                onClick={handleModalClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
             
            </div>
            <div className="flex justify-end">
            
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Logout
              </button>
             
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileModal;
