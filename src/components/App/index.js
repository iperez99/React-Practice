import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';


class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    const series = ["Game of Thrones", "One Punch Man", "Brooklyn Nine Nine"];
    setTimeout(() => {
      this.setState({ series });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved TV series" />
        the length of series array is: {this.state.series.length}
      </div>
    );
  }
}

export default App;
