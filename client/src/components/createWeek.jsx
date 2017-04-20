import React from 'react';
import createBudget from '../helpers/createBudget.js';

const CreateWeek = (props) => {
  return (
    <div>
      <buton className="create" onClick={() => {
        let gas = prompt('initial gas amount');
        let food = prompt('initial food amount');
        let other = prompt('initial other amount');
        let values = {
          gas: gas,
          food: food,
          other: other
        };
        createBudget(values, props.setAmount);
      }}>Create new budget</buton>
    </div>
  );
}

export default CreateWeek;