import React, { Component } from "react";
import "./DisplayCards.css";
import ItemCard from "../ItemCard/ItemCard";
import Counter from "../Counter/Counter";

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: null,
      currentId: null,
      matchingCards: [],
      countTry: 0,
      countWin: 0
    };
    this.getRandomCards = this.getRandomCards.bind(this);
    this.compareId = this.compareId.bind(this);
  }

  randomCardsCache = null;

  getRandomCards() {
    if (this.randomCardsCache) {
      return this.randomCardsCache;
    }
    const { cards } = this.props;
    const newCards = [...cards];
    const result = [];
    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * newCards.length);
      result.push(newCards[index], newCards[index]);
      newCards.splice(index, 1);
    }
    this.randomCardsCache = result.sort(function() {
      return 0.5 - Math.random();
    });
    return result;
  }

  compareId(id) {
    this.setState({
      clickedId: id
    });
    const { currentId, countWin, countTry, matchingCards } = this.state;
    if (id) {
      this.setState({ currentId: id });
    }
    if (currentId) {
      if (currentId === id) {
        matchingCards.push(currentId)
        this.setState({
          currentId: null,
          clickedId: null,
          countWin: countWin + 1,
          countTry: countTry + 1
        });
      } else {
        this.setState({
          currentId: null,
          clickedId: null,
          countTry: countTry + 1
        });
      }
    }
  }

  render() {
    const { countWin } = this.state
    const { countTry } = this.state
    
    console.log(this.state);
    return (
      <div className="DisplayCards">
        <Counter try={countTry} win={countWin} />
        {this.getRandomCards().map((x, index) => (
          <ItemCard
            key={x.id + "-" + index}
            idCard={x.id}
            imageCard={x.posterUrl}
            compareId={this.compareId}
          />
        ))}
      </div>
    );
  }
}

export default DisplayCards;
