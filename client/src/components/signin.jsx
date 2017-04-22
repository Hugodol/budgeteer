import React from 'react';
import axios from 'axios';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import createBudget from '../helpers/createBudget.js';


const SignIn = (props) => {
  let userName = '';
  let createName = '';
  return (
    <div className="create">
      <form>
        <FormGroup controlId ="formControlsSignIn">
          <ControlLabel>Sign In:</ControlLabel>
          <FormControl
            onChange={e => {
              userName = e.target.value;
            }}
            onKeyUp={e => {
              if (e.keyCode === 13) {
                axios.get('/budget/user/get/' + userName)
                  .then(result => {
                    if (result.data) {
                      return axios.get('/budget/' + userName)
                    } else {
                      console.log('username does not exists');
                    }
                  })
                  .then( res => {
                    if (res) {
                      props.setAmount(res.data);
                      props.setUsername(userName);
                      props.signInHide();
                    }
                  })
                  .catch(err => console.log(err));
                  e.target.value = '';
              }
            }}
          />
        </FormGroup>
        <br/>
        <div>OR</div>
        <br/>
        <FormGroup controlId ="formControlsCreateUser">
          <ControlLabel>Create New User:</ControlLabel>
          <FormControl
            onChange={e => {
              createName = e.target.value;
            }}
            onKeyUp={e => {
              if (e.keyCode === 13) {
                axios.post('budget/user/new', {user: createName})
                  .then(props.setUsername(createName))
                  .then(() => {
                    axios.post('/budget/' + createName, {gas: '0', food: '0', other: '0'})
                  })
                  .catch(function(err) {
                    console.log(err);
                  });
                  props.signInHide();
                  e.target.value = '';
              }
            }}
          />
        </FormGroup>
      </form>
    </div>
  )
}

export default SignIn;