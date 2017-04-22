import React from 'react';
import axios from 'axios';
import UpdateGas from './updateGas.jsx';
import UpdateFood from './updateFood.jsx';
import UpdateOther from './updateOther.jsx';
import NavBar from './navBar.jsx';
import CreateBudget from './createBudget.jsx';
import SignIn from './signin.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gas: '0',
      food: '0',
      other: '0',
      hideMain: false,
      showCreate: false,
      createClick: true,
      username: null
    };
  }

  componentWillMount() {
    axios.get('/budget/' + this.state.username)
      .then(res => {
        this.setAmount(res.data);
      })
      .catch(err => console.log(err));
  }

  setAmount(datas) {
    this.setState({gas: datas.gas});
    this.setState({food: datas.food});
    this.setState({other: datas.other});
  }

  setUsername(name) {
    this.setState({username: name});
  }

  hide() {
    this.setState({hideMain: !this.state.hideMain});
    this.setState({showCreate: !this.state.showCreate});
    this.setState({createClick: !this.state.createClick});
  }

  render() {
    let hideMain = this.state.hideMain ? 'hidden' : null;
    let showCreate = this.state.showCreate ? null : 'hidden';
    let createClick = this.state.createClick ? 'create new Budget' : 'back to Budget';
    return (
      <div>
        <NavBar
          setAmount={this.setAmount.bind(this)}
          hide={this.hide.bind(this)}
          name={createClick}
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
        <div>
          <SignIn
            setUsername={this.setUsername}
          />
        </div>
      </div>
    );
  }
}

export default App;