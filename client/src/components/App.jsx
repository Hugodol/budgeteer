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
      signIn: false,
      username: null
    };
  }

  componentWillMount() {
    if (!this.state.username) {
      this.signInHide();
    }
    // axios.get('/budget/' + this.state.username)
    //   .then(res => {
    //     this.setAmount(res.data);
    //   })
    //   .catch(err => console.log(err));
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

  signInHide() {
    this.setState({hideMain: !this.state.hideMain});
    this.setState({signIn: !this.state.signIn});
  }

  render() {
    let hideMain = this.state.hideMain ? 'hidden' : null;
    let showCreate = this.state.showCreate ? null : 'hidden';
    let createClick = this.state.createClick ? 'create new Budget' : 'back to Budget';
    let hideSignIn = this.state.signIn ? null : 'hidden';
    return (
      <div>
        <NavBar
          username={this.state.username}
          setUsername={this.setUsername.bind(this)}
          signInHide={this.signInHide.bind(this)}
          setAmount={this.setAmount.bind(this)}
          hide={this.hide.bind(this)}
          name={createClick}
        />
        <div id="main" className={hideMain}>
          <UpdateGas
            amount={this.state.gas}
            username={this.state.username}
            setAmount={this.setAmount.bind(this)}
          />
          <UpdateFood
            amount={this.state.food}
            username={this.state.username}
            setAmount={this.setAmount.bind(this)}
          />
          <UpdateOther
            amount={this.state.other}
            username={this.state.username}
            setAmount={this.setAmount.bind(this)}
          />
        </div>
        <div className={showCreate}>
          <CreateBudget
            username={this.state.username}
            setAmount={this.setAmount.bind(this)}
            hide={this.hide.bind(this)}
          />
        </div>
        <div className={hideSignIn}>
          <SignIn
            setAmount={this.setAmount.bind(this)}
            setUsername={this.setUsername.bind(this)}
            signInHide={this.signInHide.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;