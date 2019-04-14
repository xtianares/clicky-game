import React, { Component } from 'react';

class GameArea extends Component {
  render() {
    const emojis = this.props.emoji.map((item) =>
      <img className="thumb img-thumbnail"
        data-id={item.id}
        onClick={this.props.handleClick}
        key={item.id}
        src={item.image}
        alt=""
      />
    );

    return (
      <main className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="h3 mt-4 mb-4 mb-md-5">Click as many emoji as you can without clicking the same one</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="image-container col-12 d-flex justify-content-center">
            {emojis}
          </div>
        </div>
      </main>
    );
  }
}

export default GameArea;
