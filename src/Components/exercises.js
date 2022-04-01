import React, { useState, useEffect } from 'react';
import useFetchData from '../Apis/Exercises';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [input, setInput] = useState([]);
  const { data, loading } = useFetchData();

  useEffect(() => {
    setExercises(data)
  }, [data]);

  useEffect(() => {
    console.log('Exercises', exercises);
    console.log('Input', input);
  }, [exercises, input])

  const addItem = () => {
    setExercises(prevState => [...prevState, {name: input}]);
    setInput('');
  };

  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>Doing stuff with data</h2>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={addItem}>Save</button>
        <ul>
          {exercises.map((item) => (<li key={item.name}><span>{item.name}</span></li>))}
        </ul>
      </div>
    )}
    </div>
  )
}

export default Exercises;
