import React, { Component } from "react";
import "./DisplayCards.css";

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardId: null,
      matchingCards : []
      
    }
    this.getRandomCards = this.getRandomCards.bind(this);
  }
  getRandomCards() {
    const { cards } = this.props;
    const newCards = [...cards];
    const result = [];
    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * newCards.length);
      result.push(
        <li className="card__items" key={newCards[index].id}>
          <img src={newCards[index].posterUrl} alt="/" />
        </li>,
        <li className="card__items" key={newCards[index].id + 1}>
          <img src={newCards[index].posterUrl} alt="/" />
        </li>
      );
      newCards.slice(index, 1);
    }
    return result.sort(function() { return 0.5 - Math.random() });
  }

  render() {
    return <ul className="DisplayCards">{this.getRandomCards()}</ul>;
  }
}

export default DisplayCards;
