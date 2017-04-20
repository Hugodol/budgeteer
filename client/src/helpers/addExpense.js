import axios from 'axios';

const addExpense = (value, cb) => {
  return axios.put('/budget', value)
    .then(res => {
      return axios.get('/budget');
    })
    .then(res => {
      cb(res.data[0]);
    })
    .catch(err => console.log(err));
}

export default addExpense;