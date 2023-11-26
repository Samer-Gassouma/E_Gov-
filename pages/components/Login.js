import React , {useState} from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { data } from 'autoprefixer';

const Login = () => {
    const [showOTP, setShowOTP] = useState(false); // State to toggle OTP screen
    const [cin, setCin] = useState(""); // State to toggle OTP screen
    const [password, setPassword] = useState(""); // State to toggle OTP screen\
    const router = useRouter();
    const [userData, setUser] = useState({}); // State to toggle OTP screen\
    const handleLogin = (e) => {
      e.preventDefault();
      setCin(e.target.cin.value);
      setPassword(e.target.password.value);

      const data = {
        FatherName: 'khalid',
        Lastname: 'khalid',
        email: 'kali@gmail.com',
        PosNas: 'Monastir',
        DatedeNaissance: '2003-09-17',
        E_id: 
        "8EE3BDA",
        Adresse: '', // There is no specific address field in the given data
        Ville: 'Monastir',
        CodePostal: '', // There is no postal code in the given data
        Telephone: '26406108',
        Gender: 'Male',
        Work: 'Software Engineer',
        cin: '12345678',
        imageUrl:"data:image/png;base64,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"
      };
      
      
          if (data.E_id != null ) {
              setUser(data);
              localStorage.setItem('user', JSON.stringify(data));
              localStorage.setItem('E_id', JSON.stringify(data.E_id));
              setCookie('user', JSON.stringify(data))
            //Redirect user to the main page
            setShowOTP(true);
            //router.push('/otp');
          }

          console.log(data.status) 

          console.log(userData);
        };

       // Set showOTP state to true on login button click
      // Add logic here for authentication, API calls, etc.
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">{!showOTP ? "Login" : "Enter OTP" } </h2>
        {!showOTP ? ( 
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="cin" className="block text-gray-600 mb-1">CIN</label>
            <input
              type="text"
              id="cin"
              name="cin"
              placeholder="Enter your CIN"
              className="w-full border text-black border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
         ) : (
            <div>
            {/* OTP screen */}
            {/* Add the OTP form or UI here */}
            <p className="text-center text-lg font-semibold mb-4 text-black">we send the otp to : <span className='text-bold'>+216{userData.phone}</span></p>
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
        )}
      </div>
    </div>
  );
};

export default Login;
