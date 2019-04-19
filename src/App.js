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
    status: 'Click an emoji to start',
    message: "Click as many emoji as you can without clicking the same one"
  }

  messages = [
    "Good job keep it up!",
    "Great, now keep on clicking!",
    "Keep on clicking and set a new high score!",
    "Nice, click like there's no tomorrow!",
    "You're doing great, now click some more!"
  ]

  componentDidMount = () => {
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
          message: this.messages[Math.floor(Math.random()*this.messages.length)]
        }
      )
      this.animateCSS('.message', 'pulse')
    }
    // if the clicked emoji has been clicked, reset game but retain highscore
    else {
      this.animateCSS('main', 'shake')
      this.setState(
        {
          data: this.resetData(newData),
          score: 0,
          message: 'Oopsies, click an emoji to try again.'
        }
      )
    }
  }

  animateCSS = (element, animationName, callback) => {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    let handleAnimationEnd = () => {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)
      if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
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
          message={this.state.message}
          emoji={this.state.data}
          animate={this.animateCSS}
          handleClick={this.handleClick}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
