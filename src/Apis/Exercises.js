import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    const fetchData = async () => {
      console.log('fetchdata');
      try {
        console.log('try');
        const { data: response } = await axios.get('http://localhost:8000/exercises');
        console.log('response', response);
        setData(response);
        console.log('data', data);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;
