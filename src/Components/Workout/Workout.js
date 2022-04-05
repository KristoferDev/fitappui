import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFetchData, postData, deleteData } from '../../Apis/Workout';
import './Workout.scss';

/*
  Date and time
  Chosable list of exercises
  Each exer should have 
*/

const Workouts = () => {
  const [formData, setFormData] = useState();
  const [workout, setWorkout] = useState([]);
  const [val, setVal] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const { data, loading } = useFetchData();

  useEffect(() => {
    setWorkout(data);
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
    setWorkout([
      ...workout,
      response
    ]);
    setVal(() => "");
  };

  const newWorkout = () => {
    console.log('Create new workout!');
  }

  const deleteItem = (id) => {
    const response = deleteData(id);
    setWorkout(workout.filter(item => item.id !== id));
  }

  return (
    <div className='workout'>
      {loading && <div>Loading Exercises</div>}
      {!loading && (
        <div className='workout-wrapper'>
          <div className='workout-header'>
            <h2>Handle Workouts</h2>
            <button type="button" onClick={newWorkout}>New workout</button>
          </div>
          <form className='workout-form'>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <input value={val} placeholder="Name" type="text" name="name" onChange={handleChange} />
            <textarea value={val} placeholder="Description" type="message" name="description" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Save workout</button>
          </form>
          <ul className='workout-list'>
            {workout.map((item) => (
              <li key={item.id} id={item.id}><span>{item.name}</span><button type="button" onClick={() => { deleteItem(item.id) }}>Delete</button></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Workouts;
