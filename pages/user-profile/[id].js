import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user?id=${id}`); // Replace with your API route URL
        if (response.ok) {
          const data = await response.json();
          setUser(data); // Set the user state with fetched data
        } else {
          throw new Error('Failed to fetch user');
        }
      } catch (error) {
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]); // Replace this with your logic to fetch user data by ID

  if (loading) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching fails
  }

  return (
    <div className="container mx-auto mt-8 p-6 bg-black-900 rounded-md shadow-md text-white">
      {user && (
        <>
          <h1 className="text-3xl font-bold mb-4">{user.Firstname} s Profile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {user.imageUrl && (
              <img src={user.imageUrl} alt={user.Firstname} className="w-40 h-40 md:w-48 md:h-48 ml-0 md:ml-8 rounded-full" />
            )}
            <div>
              <p className="text-lg font-semibold mb-2">Email:</p>
              <p>{user.email}</p>
              <p className="text-lg font-semibold mb-2">CIN:</p>
              <p>{user.cin}</p>
              <p className="text-lg font-semibold mb-2">Firstname:</p>
              <p>{user.Firstname}</p>
              <p className="text-lg font-semibold mb-2">Lastname:</p>
              <p>{user.Lastname}</p>
              <p className="text-lg font-semibold mb-2">Date of Birth:</p>
              <p>{user.DateNas.toString().slice(0, 10)}</p>
              <p className="text-lg font-semibold mb-2">Location:</p>
              <p>{user.location}</p>
              <p className="text-lg font-semibold mb-2">Work:</p>
              <p>{user.Work}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfilePage;
