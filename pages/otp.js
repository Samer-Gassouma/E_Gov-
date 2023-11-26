import React , {useState} from 'react';

const Login = () => {
    const [showOTP, setShowOTP] = useState(false); // State to toggle OTP screen
    const [cin, setCin] = useState(""); // State to toggle OTP screen
    const [password, setPassword] = useState(""); // State to toggle OTP screen\

    const userData = {
       
        };
    const handleLogin = (e) => {
      e.preventDefault();
      setCin(e.target.cin.value);
      setPassword(e.target.password.value);
      
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({cin,password}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status == 200) {
            // Update user state with user's information
            setUser(userData);
            // Redirect user to the main page
            setShowOTP(true);
          }
        });

        console.log(userData);
       // Set showOTP state to true on login button click
      // Add logic here for authentication, API calls, etc.
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black"> Enter OTP </h2>
        
            <div>
            {/* OTP screen */}
            {/* Add the OTP form or UI here */}
            <p className="text-center text-lg font-semibold mb-4 text-black">we send the otp to : <span className='text-bold'>+21626406108</span></p>
            {/* Add the OTP input and related elements */}
            {/* For demonstration purposes, let's display a simple input */}
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {/* Add Submit button for OTP verification */}
            {/* For example: */}
            <button
              type="button" // Change to submit if handling OTP verification
              className="w-full bg-blue-500 text-white mt-4 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => 
                {
                    window.location.href = "/";
                    }
                }
                
                >
              Verify OTP
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default Login;
