import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Exercises from './Components/Exercises/Exercises';
import Users from './Components/User/User';
import Workouts from './Components/Workout/Workout';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/exercise" element={<Exercises />} />
      <Route path="/workout" element={<Workouts />} />
      <Route path="/user" element={<Users />} />
    </Routes>
  )
}

export default Routing;
