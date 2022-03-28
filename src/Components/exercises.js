import React from 'react';
import useFetchData from '../Apis/Exercises';

const Exercises = () => {
   const { data, loading } = useFetchData();
   console.log('loading', loading);
   console.log('data', data);

   return (
      <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
          {data.map(item => (<span>{item.name}</span>))}
        </div>
      )}
      </div>
    )
}

export default Exercises;
