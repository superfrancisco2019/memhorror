import React, { Component } from "react";
import "./DisplayCards.css";

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      compare: {
        card1: null,
        card2: null,
        isMatching: false
      }
    };
  }

  componentDidMount() {
    this.setState({
      cards: this.props.dataCards
    });
  }

  render() {
    let { cards } = this.state;
    return (
      <div className="DisplayCards">
        {cards &&
          cards
            .map(index => cards[Math.floor(Math.random(index) * cards.length)])
            .map(card => (
              <li key={card.id}>
                <p>{card.id}</p>
                <img  src={card.posterUrl} alt="" />
              </li>
            ))}
      </div>
    );
  }
}

export default DisplayCards;
