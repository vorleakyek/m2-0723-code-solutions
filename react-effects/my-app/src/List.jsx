/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  useEffect(()=>{
    async function startFetching() {
      try {
        const result = await readItems();
        setItems(result);
        setIsLoading(false)
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    startFetching();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
