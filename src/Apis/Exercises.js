import { useEffect, useState} from 'react';
import axios from 'axios';

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('http://localhost:8000/exercises');
        setData(response);
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

export const postData = async (exercise) => {
  await axios.post('http://localhost:8000/exercises', exercise)
  .then((response) => {
    console.log('response in api', response)
    return {
      name: response.data.name,
      description: response.data.description,
      id: response.data.id
    }
  })
  .catch(error => { console.error(error); return Promise.reject(error); });
}

export const deleteData = async (id) => {
  const response = await axios.delete(`http://localhost:8000/exercises/${id}`);
  return response.data;
}
