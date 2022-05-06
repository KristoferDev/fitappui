import React, {useEffect, useState} from 'react';

import './Exercise.scss';

const Exercise = ({name}) => {
  const [amount, setAmount] = useState(0);
  const [sets, setSets] = useState([{
    set: 1,
    rep: 0,
    weight: 0
  }]);

  useEffect(() => {
    console.log('sets', sets);
    console.log('amount', amount);
  });

  const handleAddSet = () => {
    setAmount(amount + 1);
    setSets([
      ...sets,
      {
        set: amount,
        rep: 0,
        weight: 0
      }
    ])
  }

  const onChangeHandler = (index) => (e) => {
    let Arr = [...sets];
    Arr[index] = {[e.target.name]: e.target.value.trim()}
    setSets(Arr);
  }

  return (
    <div className='exercise-wrapper'>
      <div className='name'>{name}</div>
      <div className='sets-wrapper'>
        <div className='sets'>
          {sets.map((item, index) => 
            <div key={item.set} className='set'>
              <input type='number' min='0' placeholder='0' name='rep' value={item.rep} onChange={onChangeHandler(index)} />
              <input type='number' min='0' placeholder='0' name='weight' value={item.weight} onChange={onChangeHandler(index)} />
            </div>
          )}
        </div>
        <button onClick={handleAddSet}>+</button>
      </div>

    </div>
  )
}

export default Exercise;
