import React from 'react';
import createBudget from '../helpers/createBudget.js';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const CreateBudget = (props) => {
  let gas = '0';
  let food = '0';
  let other = '0';
  return (
    <div>
      <h4>Set Initial Values</h4>
      <form>
        <FormGroup controlId ="formControlsGas">
          <ControlLabel>Gas</ControlLabel>
          <FormControl onChange={e => {
            gas = e.target.value;
          }}/>
        </FormGroup>
        <FormGroup controlId ="formControlsFood">
          <ControlLabel>Food</ControlLabel>
          <FormControl onChange={e => {
            food = e.target.value;
          }}/>
        </FormGroup>
        <FormGroup controlId ="formControlsOther">
          <ControlLabel>Other</ControlLabel>
          <FormControl onChange={e => {
            other = e.target.value;
          }}/>
        </FormGroup>
      </form>
      <button onClick={() => {
        let values = {
          gas: gas,
          food: food,
          other: other
        };
        createBudget(values, props.setAmount);
        props.hide();
      }}>Create</button>
    </div>
  );
}

export default CreateBudget;