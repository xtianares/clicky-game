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
    this.setState(
      {
        // data: this.shuffleData(this.state.data),
        status: 'You clicked an emoji! ' + id
      }
    );
  }

  render() {
    return (
      <Fragment>
        <Header status={this.state.status} />
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
