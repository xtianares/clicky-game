import React, { Component, Fragment } from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      score: 0,
      topScore: 0,
      status: 'Click an image to begin!'
    };
  }
  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }
  shuffleData = data => {
    let newData = data.sort(function(a, b){return 0.5 - Math.random()});
    return newData;
  };


  click = event => {
    const id = event.target.dataset.id;
    this.setState(
      {
        status: 'You clicked an image! ' + id
      }
    );
  }


  render() {
    const images = this.state.data.map((item) =>
      <img className="thumb img-thumbnail" data-id={item.id} onClick={this.click} key={item.id} src={item.image}></img>
    );

    return (
      <Fragment>
        <Header status={this.state.status} />
        <main className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="h3 mt-4 mb-4 mb-md-5">Click as many images as you can without clicking the same one</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="image-container col-12 d-flex justify-content-center">
              {images}
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
