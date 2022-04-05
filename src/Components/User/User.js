import React, { useState, useEffect } from 'react';
import { useFetchData, postData, deleteData } from '../../Apis/User';
import './User.scss';

const Users = () => {
  const [formData, setFormData] = useState();
  const [exercises, setExercises] = useState([]);
  const [val, setVal] = useState();
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
    setVal(() => "");
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
          <h2>Handle User</h2>
          <form className='exercises-form'>
            <input value={val} placeholder="Firstname" type="text" name="firstname" onChange={handleChange} />
            <input value={val} placeholder="Lastname" type="text" name="lastname" onChange={handleChange} />
            <select placeholder="Gender" name="gender" onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <button type="submit" onClick={handleSubmit}>Save user</button>
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

export default Users;
