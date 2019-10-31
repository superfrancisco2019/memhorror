import React, { Component } from "react";
import "./DisplayCards.css";
import ItemCard from "../ItemCard/ItemCard";
import Counter from "../Counter/Counter";
import ResetButton from "../ResetButton/ResetButton"

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastClickId: null,
      matchingCards: [],
      countTry: 0,
      countWin: 0,
      cards: props.cards.map((c, i) => ({ ...c, key: `${c.id}-${i}`, hidden: true }))
    };
    this.getRandomCards = this.getRandomCards.bind(this);
    this.compareId = this.compareId.bind(this);
  }

  randomCardsCache = null;

  getRandomCards() {
    if (this.randomCardsCache) {
      return this.randomCardsCache;
    }
    const { cards } = this.state;
    const newCards = [...cards];
    const result = [];
    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * newCards.length);
      result.push(newCards[index].key, newCards[index].key);
      newCards.splice(index, 1);
    }
    this.randomCardsCache = result.sort(function() {
      return 0.5 - Math.random();
    });
    return result;
  }

  displayClickedCard(currentClickKey) {
    const { cards } = this.state;
    this.setState({
      cards: cards.map(card => card.key === currentClickKey
        ? {
          ...card,
          hidden: !card.hidden,
        }
        : card
      )
    })
  }

  hideClickedCards(currentClickId) {
    const { cards } = this.state;
    this.setState({
      lastClickId: null,
      cards: cards.map(card => card.id === currentClickId
        ? {
          ...card,
          hidden: true,
        }
        : card
      )
    })
  }

  compareId(currentClickId, currentClickKey) {
    const {
      lastClickId,
      countWin,
      countTry,
      matchingCards,
    } = this.state;

    this.displayClickedCard(currentClickKey);

    if (lastClickId === currentClickKey) {
      this.setState({
        lastClickId: null,
        countWin: countWin + 1,
        matchingCards: [...matchingCards, currentClickId],
      })
    } else if (lastClickId) {
      setTimeout(() => {
        this.hideClickedCards(currentClickId);
      }, 1500)
    } else {
      this.setState({
        lastClickId: currentClickKey
      })
    }

    this.setState({
      countTry: countTry + 1
    })
  }

  render() {
    const { countWin, countTry, matchingCards, cards } = this.state
    
    return (
      <div className="DisplayCards">
        <Counter try={countTry} win={countWin} />
        {this.getRandomCards().map(key => {
          const card = cards.find(c => c.key === key);
          return (
            <ItemCard
              id={card.id}
              uniqueKey={card.key}
              key={card.key}
              imageCard={card.posterUrl}
              compareId={this.compareId}
              tabMatching={matchingCards.includes(key)}
              hidden={card.hidden}
            />
          )
        })}
        {countWin === 8 && <ResetButton />}
      </div>
    );
  }
}

export default DisplayCards;
