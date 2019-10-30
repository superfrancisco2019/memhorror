import React, { Component } from "react";
import "./DisplayCards.css";

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.getRandomCards = this.getRandomCards.bind(this);
  }

  getRandomCards() {
    const { cards } = this.props;
    const newCards = [...cards];
    const result = [];
    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * newCards.length);
      result.push(
        <div key={newCards[index].id}>
          <p>{newCards[index].id}</p>
          <img src={newCards[index].posterUrl} alt="/" />
        </div>,
        <div key={newCards[index].id + 1}>
          <p>{newCards[index].id}</p>
          <img src={newCards[index].posterUrl} alt="/" />
        </div>
      );
      newCards.slice(index, 1);
    }
    console.log(result)
    return result.sort(function() { return 0.5 - Math.random() });
  }

  render() {
    return <div className="DisplayCards">{this.getRandomCards()}</div>;
  }
}

export default DisplayCards;
