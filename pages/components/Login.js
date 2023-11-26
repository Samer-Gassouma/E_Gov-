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
        imageUrl:"item.jpeg"
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
