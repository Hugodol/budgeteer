import axios from 'axios';

const addExpense = (value, cb, username) => {
  return axios.put('/budget/' + username, value)
    .then(res => {
      return axios.get('/budget/' + username);
    })
    .then(res => {
      cb(res.data);
    })
    .catch(err => console.log(err));
}

export default addExpense;