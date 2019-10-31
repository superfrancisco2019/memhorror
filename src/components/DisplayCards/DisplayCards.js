import React, { Component } from "react";
import "./DisplayCards.css";
import ItemCard from "../ItemCard/ItemCard";

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clickedId: null,
        currentId: null,
        matchingCards: [],
        countTry: 0,
        countWin: 0
    }
    this.getRandomCards = this.getRandomCards.bind(this);
    this.compareId = this.compareId.bind(this)
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

  compareId(id) {
    this.setState({
      clickedId : id
    })
      const { clickedId } = this.state
      const { currentId } = this.state
      const { countWin } = this.state
      const { countTry } = this.state
      const {matchingCards} = this.state
      if (clickedId) {
          this.setState({ currentId: clickedId })
      }
      
      if (clickedId) {
          if (currentId === clickedId) {
              this.setState({ currentId: null, clickedId: null, countWin: countWin + 1 })
              alert('bien joué!!')
          } else {
              this.setState({ currentId: null, clickedId: null, countTry: countTry+1 })
          }
      }
  }

  render() {
    console.log(this.state)
    return (
      <div className="DisplayCards">
        {this.getRandomCards().map((x,index) => <ItemCard key={x.id + "-" + index} idCard={x.id} imageCard={x.posterUrl} compareId={this.compareId} />)}
      </div>
    )
  }
}

export default DisplayCards;