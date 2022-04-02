import React, { useState, useEffect } from 'react';
import {useFetchData, postData, deleteData} from '../Apis/Exercises';

const Exercises = () => {
  const [formData, setFormData] = useState();
  const [exercises, setExercises] = useState([]);
  const { data, loading } = useFetchData();
  //const [input, setInput] = useState([]);

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
    e.preventDefault()
    console.log(formData);
    //console.log('postData(formData);', await postData(formData));
    const response = await postData(formData);
    console.log('GET response', response);
    setExercises({
      ...exercises,
      response
    });
    console.log('exercises', exercises);
  };
/*
  const addItem = () => {
    const response = postData(input);
    response.then(value => setExercises(prevState => [...prevState, {value}]));
    setInput('');
  };
*/
  const deleteItem = (id) => {
    const response = deleteData(id);
    console.log('response', response);
  }

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
          <form>
            <input type="name" name="name" onChange={handleChange} />
            <input type="description" name="description" onChange={handleChange} />
            <button onClick={handleSubmit}>Add</button>
          </form>
          <ul>
            {exercises.map((item) => (
              <li key={item.id} id={item.id}><span>{item.name}</span><button type="button" onClick={() => {deleteItem(item.id)}}>Delete</button></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Exercises;
