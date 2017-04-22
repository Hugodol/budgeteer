import React from 'react';
import axios from 'axios';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';


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
                // TODO: check to see if user is in db
                props.setUsername(userName);
                e.target.value = '';
                props.signInHide();
                axios.get('/budget/' + userName)
                  .then(res => {
                    props.setAmount(res.data);
                  })
                  .catch(err => console.log(err));
              }
            }}
          />
        </FormGroup>
        <div>OR</div>
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
                  .catch(function(err) {
                    console.log(err);
                  });
                  props.signInHide();
              }
            }}
          />
        </FormGroup>
      </form>
    </div>
  )
}

export default SignIn;