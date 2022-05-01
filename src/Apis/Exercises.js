import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetExercise = () => {
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

export const getOneExercise = async () => {
  const res = await axios.get('http://localhost:8000/exercises');
  return res.data;
}

export const updateOneExercise = async (exercise) => {
  const res = await axios.post('http://localhost:8000/exercises', exercise);
  return res.data;
}

export const postExercise = async (exercise) => {
  const res = await axios.post('http://localhost:8000/exercises', exercise);
  return res.data;
}

export const deleteExercise = async (id) => {
  const res = await axios.delete(`http://localhost:8000/exercises/${id}`);
  return res.data;
}
