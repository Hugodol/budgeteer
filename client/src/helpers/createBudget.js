import axios from 'axios';

const createBudget = (values, cb, username) => {
  return axios.delete('/budget/' + username)
    .then(res => {
      return axios.post('/budget/' + username, values);
    })
    .then(cb(values))
    .catch(err => console.log(err));
}

export default createBudget;