import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 title">
              Clicky Emojis
            </div>
            <div className="col-md-6 text-center">
              {this.props.status}
            </div>
            <div className="col-md-3 score">
              Score: {this.props.score} | Top Score: {this.props.topScore}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
