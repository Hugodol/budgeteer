import axios from 'axios';

const createBudget = (values, cb) => {
  return axios.delete('/budget')
    .then(res => {
      return axios.post('/budget', values);
    })
    .then(cb(values))
    .catch(err => console.log(err));
}

export default createBudget;