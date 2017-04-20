import React from 'react';
import axios from 'axios';
import UpdateGas from './updateGas.jsx';
import UpdateFood from './updateFood.jsx';
import UpdateOther from './updateOther.jsx';
import NavBar from './navBar.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gas: '0',
      food: '0',
      other: '0'
    };
  }

  componentWillMount() {
    axios.get('/budget')
      .then(res => {
        this.setAmount(res.data[0])
      })
      .catch(err => console.log(err));
  }

  setAmount(datas) {
    this.setState({gas: datas.gas});
    this.setState({food: datas.food});
    this.setState({other: datas.other});
  }

  render() {
    return (
      <div className="main">
        <NavBar
          setAmount={this.setAmount.bind(this)}
        />
        <UpdateGas
          amount={this.state.gas}
          setAmount={this.setAmount.bind(this)}
        />
        <UpdateFood
          amount={this.state.food}
          setAmount={this.setAmount.bind(this)}
        />
        <UpdateOther
          amount={this.state.other}
          setAmount={this.setAmount.bind(this)}
        />
      </div>
    );
  }
}

export default App;