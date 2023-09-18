import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    url: `https://${process.env.EXPO_PUBLIC_API_HOST}/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_KEY,
      'X-RapidAPI-Host': process.env.EXPO_PUBLIC_API_HOST,
    },
    params: {...query}
  }

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    (() => getData())();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
}

export default useFetch;
