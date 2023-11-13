/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function UserDetails({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(()=>{

    async function startFetching() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const result = await response.json();
        setIsLoading(false);
        setUser(result);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    startFetching();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
