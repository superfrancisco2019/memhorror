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
                <img src={newCards[index].posterUrl} alt={newCards[index].title} />
            </div>,
            <div key={newCards[index].id}>
                <img src={newCards[index].posterUrl} alt={newCards[index].title} />
            </div>
        ); 
        newCards.slice(index, 1);
        result.sort();
    }
    return result;
  }

  render() {
    return (
        <div className="DisplayCards">
            {this.getRandomCards()}
        </div>
    );
  }
}

export default DisplayCards;
