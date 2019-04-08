import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 title">
              Clicky Game
            </div>
            <div className="col-md-6 text-center">
              {this.props.status}
            </div>
            <div className="col-md-3 score">
              Score: 0 | Top Score: 0
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
