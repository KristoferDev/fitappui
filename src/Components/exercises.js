import React from 'react';
import useFetchData from '../Apis/Exercises';

const Exercises = () => {

   const { data } = useFetchData();

   return (
      <p>Exercises</p>
   );
}

export default Exercises;
