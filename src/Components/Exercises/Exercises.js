import React, { useState, useEffect } from 'react';
import { useGetExercise, postExercise, deleteExercise } from '../../Apis/Exercises';
import './Exercises.scss';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [errors, setError] = useState({
    name: false,
    description: false,
    success: false
  });
  const [val, setVal] = useState({
    name: '',
    description: ''
  });
  const { data, loading } = useGetExercise();

  useEffect(() => {
    setExercises(data);
  }, [data]);

  useEffect(() => {
    setVal({
      name: '',
      description: ''
    })
  }, [exercises]);

  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!val.name && !val.description) {
      console.log('None');
    } else if (!val.name) {
      console.log('No name');
    } else if (!val.description) {
      console.log('No description');
    } else {
      const response = await postExercise(val);
      setExercises([
        ...exercises,
        response
      ]);
    }
  };

  const deleteItem = (id) => {
    const response = deleteExercise(id);
    setExercises(exercises.filter(item => item.id !== id));
  }

  return (
    <div className='exercises'>
      {loading && <div>Loading Exercises</div>}
      {!loading && (
        <div className='exercises-wrapper'>
          <h2>Handle Exercises</h2>
          <form className='exercises-form'>
            {errors.name && errors.name.type === "required" && <span>This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
            <input value={val.name} style={{ border: !errors.name ? '1px solid red' : '' }} placeholder="Name" type="text" name="name" onChange={handleChange} />
            <textarea value={val.description} placeholder="Description" type="message" name="description" onChange={handleChange} />
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
