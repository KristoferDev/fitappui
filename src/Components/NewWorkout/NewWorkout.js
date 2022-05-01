import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetExercise } from '../../Apis/Exercises';
import { postData } from '../../Apis/Workout';
import './NewWorkout.scss';

const NewWorkout = () => {
  const [workout, setWorkout] = useState([{
    id: '',
    date:  Date(),
    set: [
      {exercise: String},
      [{weight: Number}, {reps: Number}]
    ]
  }]);
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [addRepsFields, setAddRepsFields] = useState(['<input className="exercise-weight" placeholder="Weight" name="weight" /><input className="exercise-reps" placeholder="Reps" name="reps" />']);
  const [startDate, setStartDate] = useState(new Date());
  const { data, loading } = useGetExercise();

  useEffect(() => {
      setExercises(data);
  }, [data]);

  const handleChange = (e) => {
    console.log('e.target.name', e.target.name);
    console.log('e.target.value.trim()', e.target.value.trim());
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value.trim()
    });
    console.log('workout', workout);
    console.log('workout.set.exercise', workout[0].set.exercise)
  };

  const handleExercise = (e) => {
    e.preventDefault();
    setExercise([
      ...exercise,
      e.target.value
    ]);
  }

  useEffect(() => {
    console.log('exercise', exercise);
  }, [exercise]);

  const selectedWorkout = (event) => {
    event.preventDefault();
    console.log(event.target.elements.username.value) // from elements property
    console.log(event.target.username.value)
  }

  const addRep = () => {
    console.log('adding rep');
    setAddRepsFields(
      ...addRepsFields,
      '<input className="exercise-weight" placeholder="Weight" name="weight" /><input className="exercise-reps" placeholder="Reps" name="reps" />');
  }

  return (
    <div className='workout'>
      {loading && <div>Loading workout</div>}
      {!loading && (
        <>
          <div className='workout-wrapper'>
            <div className='workout-header'>
              <h2>New workout</h2>
            </div>
            <form className='workout-form'>
              <DatePicker name="date" selected={startDate} onChange={date => setStartDate(date)} />
              <select name="exercise" onChange={handleExercise}>
                {exercises.map((item) => (
                <option key={item.id} id={item.id}>{item.name}</option>
                ))}
              </select>
            </form>
          </div>

          { exercise ?
            <div className='workout-wrapper'>
              <div className='workout-header'>
                {startDate ? <h2>Date is set</h2> : <h2>Choose date</h2>}
              </div>
              <ul className="exercise-label">
                <li>Exercise</li>
                <li>Weight</li>
                <li>Reps</li>
              </ul>
              <ul>
                {exercise.map((item) => (
                  <li key={item}>
                    <span className="exercise-name">{item}</span>
                    {addRepsFields.map((item) => {
                      item
                    })}
                    <button onClick={addRep}>+</button>
                  </li>
                ))}
              </ul>
            </div>
          : null }
        </>
      )}
    </div>
  )
}

export default NewWorkout;
