import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('http://localhost:8000/user');
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

export const getOneData = async () => {
  const res = await axios.get('http://localhost:8000/user');
  return res.data;
}

export const updateOneData = async (exercise) => {
  const res = await axios.post('http://localhost:8000/user', exercise);
  return res.data;
}

export const postData = async (exercise) => {
  const res = await axios.post('http://localhost:8000/user', exercise);
  return res.data;
}

export const deleteData = async (id) => {
  const res = await axios.delete(`http://localhost:8000/user/${id}`);
  return res.data;
}
