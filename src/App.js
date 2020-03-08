import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import UserOutput from './userOutput/userOutput';

class App extends Component {
  state = {
    userName: 'Aron123'
  }

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput 
        changed={this.changeUserNameHandler}
        currentName={this.state.userName}/>
        <UserOutput 
        userName={this.state.userName}
        click={this.changeUserNameHandler}/>
        <UserOutput 
        userName={this.state.userName}
        click={this.changeUserNameHandler}/>
      </div>
    );
  };
};

export default App;
