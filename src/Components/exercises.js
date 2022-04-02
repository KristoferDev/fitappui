import React, { useState, useEffect } from 'react';
import { useFetchData, postData, deleteData } from '../Apis/Exercises';
import './Exercises.scss';

const Exercises = () => {
  const [formData, setFormData] = useState();
  const [exercises, setExercises] = useState([]);
  const { data, loading } = useFetchData();

  useEffect(() => {
    setExercises(data);
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postData(formData);
    setExercises([
      ...exercises,
      response
    ]);
  };

  const deleteItem = (id) => {
    const response = deleteData(id);
    setExercises(exercises.filter(item => item.id !== id));
  }

  return (
    <div className='exercises'>
      {loading && <div>Loading Exercises</div>}
      {!loading && (
        <div className='exercises-wrapper'>
          <h2>Handle Exercises</h2>
          <form className='exercises-form'>
            <input placeholder="Name" type="text" name="name" onChange={handleChange} />
            <input placeholder="Description" type="message" name="description" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Save exercise</button>
          </form>
          <ul className='exercises-list'>
            {exercises.map((item) => (
              <li key={item.id} id={item.id}><span>{item.name}</span><button type="button" onClick={() => { deleteItem(item.id) }}>Delete</button></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Exercises;
