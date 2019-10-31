import React, { Component } from "react";
import "./DisplayCards.css";
import ItemCard from "../ItemCard/ItemCard";

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId : null,
      matchingCards : [] 
    }
    this.getRandomCards = this.getRandomCards.bind(this);
  }

  randomCardsCache = null;

  getRandomCards() {
    if (this.randomCardsCache) {
      return this.randomCardsCache
    }
    const { cards } = this.props;
    const newCards = [...cards];
    const result = [];
    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * newCards.length);
      result.push(newCards[index], newCards[index]);
      newCards.splice(index, 1);
    }
    this.randomCardsCache = result.sort(function() { return 0.5 - Math.random() })
    return result
  }

  render() {
    console.log(this.state)
    return (
      <div className="DisplayCards">
        {this.getRandomCards().map((x,index) => <ItemCard key={x.id + "-" + index} idCard={x.id} imageCard={x.posterUrl} compareId={(clickedId) => this.setState({clickedId})} />)}
      </div>
    )
  }
}

export default DisplayCards;
