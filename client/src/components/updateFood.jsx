import React from 'react';
import addExpense from '../helpers/addExpense.js';
import getNewAmount from '../helpers/getNewAmount.js';

const UpdateFood = (props) => (
  <div>
    <h2>Food: ${props.amount} left</h2>
    <input onKeyUp={event => {
        if (event.keyCode === 13) {
          let amount = props.amount;
          let newExpense = event.target.value;
          let value = getNewAmount('food', amount, newExpense);
          addExpense(value, props.setAmount);
          event.target.value = '';
        }
      }
    }/>
  </div>
);

export default UpdateFood;