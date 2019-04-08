import React, { Component, Fragment } from 'react';
import './scss/App.scss';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Click an image to begin!'
    };
  }
  click = event => {
    const id = event.target.dataset.id;
    this.setState(
      {
        status: 'You clicked an image!' + id
      }
    );
  }


  render() {
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
              <div className="thumb img-thumbnail" data-id="1" onClick={this.click}></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
              <div className="thumb img-thumbnail"></div>
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
