import React from 'react';
import axios from 'axios';
import UpdateGas from './updateGas.jsx';
import UpdateFood from './updateFood.jsx';
import UpdateOther from './updateOther.jsx';
import NavBar from './navBar.jsx';
import CreateBudget from './createBudget.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gas: '0',
      food: '0',
      other: '0',
      hideMain: false,
      showCreate: false,
      createName: true
    };
  }

  componentWillMount() {
    axios.get('/budget')
      .then(res => {
        this.setAmount(res.data[0]);
      })
      .catch(err => console.log(err));
  }

  setAmount(datas) {
    this.setState({gas: datas.gas});
    this.setState({food: datas.food});
    this.setState({other: datas.other});
  }

  hide() {
    this.setState({hideMain: !this.state.hideMain});
    this.setState({showCreate: !this.state.showCreate});
    this.setState({createName: !this.state.createName});
  }

  render() {
    let hideMain = this.state.hideMain ? 'hidden' : null;
    let showCreate = this.state.showCreate ? null : 'hidden';
    let createName = this.state.createName ? 'create new Budget' : 'back to Budget';
    return (
      <div>
        <NavBar
          setAmount={this.setAmount.bind(this)}
          hide={this.hide.bind(this)}
          name={createName}
        />
        <div id="main" className={hideMain}>
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
        <div className={showCreate}>
          <CreateBudget
            setAmount={this.setAmount.bind(this)}
            hide={this.hide.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;