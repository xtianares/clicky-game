import React, { Component, Fragment } from 'react';
import './scss/App.scss';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <main className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="h3 mt-4 mb-5">Click as many images as you can without clicking the same one</h1>
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
