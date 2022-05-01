import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Exercises from './Components/Exercises/Exercises';
import Users from './Components/User/User';
import Workouts from './Components/Workout/Workout';
import Login from './Components/Login/Login';
import NewWorkout from './Components/NewWorkout/NewWorkout'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercises />} />
      <Route path="/workout" element={<Workouts />} />
      <Route path="/new-workout" element={<NewWorkout />} />
      <Route path="/user" element={<Users />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Routing;
