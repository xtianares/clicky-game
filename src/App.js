import React, { Component, Fragment } from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import GameArea from './components/GameArea';
import data from "./data";

class App extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    status: 'Click an image to begin!'
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  shuffleData = data => {
    let newData = data.sort(function(a, b){return 0.5 - Math.random()});
    return newData;
  };

  handleClick = event => {
    const id = event.target.dataset.id;
    this.checkGuess(id);
  }

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  checkGuess = id => {
    // if the clicked emoji hasn't been clicked set new state
    let correctGuess = false;
    const newData = this.state.data.map(item => {
      // console.log(item.id);
      if (item.id === parseInt(id)) {
        // console.log(item.id);
        // console.log(item.clicked);
        // console.log(id);
        if (!item.clicked) {
          item.clicked = true;
          correctGuess = true;
        }
      }
      return item;
    });
    if (correctGuess) {
      let newScore = this.state.score + 1;
      this.setState(
        {
          data: this.shuffleData(newData),
          score: newScore,
          topScore: Math.max(newScore, this.state.topScore),
          status: 'You clicked an emoji! ' + id
        }
      )
    }
    // if the clicked emoji has been clicked, reset game but retain highscore
    else {
      this.setState(
        {
          data: this.resetData(newData),
          score: 0,
          status: 'Click an image to begin!'
        }
      )
    }
  }

  render() {
    return (
      <Fragment>
        <Header
          status={this.state.status}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <GameArea
          emoji={this.state.data}
          handleClick={this.handleClick}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
