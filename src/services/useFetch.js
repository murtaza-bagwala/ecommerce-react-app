/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import { getData } from './productService';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await getData(url);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, isLoading };
}
