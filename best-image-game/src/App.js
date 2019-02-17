import React, { Component } from 'react';
import './App.css';

import TwoImages from './components/TwoImages';
import LeaderBoard from './components/LeaderBoard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roundNum: 1,  
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Best Of Two Images</h2>
          <p>Round {this.state.roundNum}</p>
        <TwoImages />
        <LeaderBoard />
        </header>
      </div>
    );
  }
}

export default App;
