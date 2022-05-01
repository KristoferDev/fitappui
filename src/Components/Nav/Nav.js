import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

const Nav = () => {
  return (
    <div className='topbar'>
      <div className='brand'>
        <Link to="/">Brand</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="workout">Workout</Link>
        <Link to="exercise">Exercises</Link>
        <Link to="user">User</Link>
      </nav>
      <Link to="/login">Login/out</Link>
    </div>
  )
}

export default Nav;
