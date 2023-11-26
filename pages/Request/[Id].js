import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SubService = () => {
  const router = useRouter();
  const { id } = router.query;
console.log(id)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    DatedeNaissance: '01/01/1990',
    Adresse: '17 rue de la paix',
    Ville: 'Tunis',
    CodePostal: '1000',
    Telephone: '26406108',
    Gender: 'Male',
    Work : 'Software Engineer',
    
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fingerPrintDigitized, setFingerPrintDigitized] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [progress, setProgress] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');

  const handleContinue = () => {
    setIsSubmitted(true);
    // Simulating fingerprint digitization process (API call or any async operation)
    setTimeout(() => {
      setFingerPrintDigitized(true);
      generateOrderId(); // Generate order ID
      const est = Math.floor(Math.random() * 10) + 1;
      setEstimatedTime(`${est} minutes`); // Generate estimated time

    }, 2000); // Simulating a 2-second delay, replace with actual fingerprint digitization process
  };

  
  const generateOrderId = () => {
    const randomId = Math.floor(Math.random() * 1000000000);
    const randomString = Math.random().toString(36).substring(2, 15);
    const orderId = randomId + randomString;
    setOrderId(orderId);
    
  };

  useEffect(() => {
    // Update progress bar
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 1000); // Update progress every 1 second

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  useEffect(() => {
    // Determine progress status based on progress value
    if (progress >= 0 && progress < 60) {
      setProgressStatus('Almost there');
    } else if (progress >= 60 && progress < 100) {
      setProgressStatus('Maybe next week');
    } else if (progress === 100) {
      setProgressStatus('Done');
    }
  }, [progress]);

  return (
    <div className="container mx-auto mt-8 text-black">
      <h1 className="text-2xl font-bold mb-4 text-white">Service : CIN Request</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Information</h1>
        <div className="mb-4">
          <p className="text-lg">
            Name: <span className="font-semibold">{user.name}</span>
          </p>
          <p className="text-lg">
            Email: <span className="font-semibold">{user.email}</span>
          </p>
          <p className="text-lg">
            Date de Naissance: <span className="font-semibold">{user.DatedeNaissance}</span>
          </p>
          <p className="text-lg">
            Adresse: <span className="font-semibold">{user.Adresse}</span>
          </p>
          <p className="text-lg">
            Ville: <span className="font-semibold">{user.Ville}</span>
          </p>
          <p className="text-lg">
            Code Postal: <span className="font-semibold">{user.CodePostal}</span>
          </p>
          <p className="text-lg">
            Telephone: <span className="font-semibold">{user.Telephone}</span>
          </p>
          <p className="text-lg">
            Work: <span className="font-semibold">{user.Work}</span>
          </p>
          </div>
        {!fingerPrintDigitized && (
          
          <button
            onClick={handleContinue}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitted ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={isSubmitted}
          >
            Continue
          </button>
        )}
        {isSubmitted && !fingerPrintDigitized && (
          <p className="mt-4 text-purple-600 font-semibold">
            Your request has been submitted. Please proceed to the nearest police station to get your fingerprint digitized.
          </p>
        )  
        }
          {fingerPrintDigitized && (
          <div>
            <p className="mt-4 text-green-600 font-semibold">
              Your request has been submitted. Please proceed to the nearest police station to get your fingerprint digitized.
            </p>
            <div className="mt-4">
              <p>Order ID: {orderId}</p>
              <p>Estimated Time: {estimatedTime}</p>
            </div>
            <div className="mt-4">
              <p>Progress Status: {progressStatus}</p>
              <div className="bg-gray-200 w-full h-4 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gray-500 ${progressStatus === 'Almost there' ? 'w-1/3' : progressStatus === 'Maybe next week' ? 'w-2/3' : 'w-full'
                    }`}
                ></div>
              </div>
              {progressStatus === 'Done' && (
                <p className="mt-4 text-blue-600 font-semibold">Your Request is Done</p>
              )  
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubService;