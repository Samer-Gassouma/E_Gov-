import Main from './components/Main';
import Login from './components/Login';
import { useState, useEffect } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);
  let id;

  useEffect(() => {
    // Will only be called once after the initial render
    if (typeof window !== 'undefined') {
      try {
        id = JSON.parse(localStorage.getItem('user'));
        setUser(id);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);

  console.log(user);

  if (user) {
    return <Main user={user} />;
  } else {
    return <Login />;
  }
}
