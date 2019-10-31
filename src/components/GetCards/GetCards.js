import React, { Component } from "react";
import axios from "axios";
import DisplayCards from "../DisplayCards/DisplayCards";

class GetCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null
    };
    this.getCards = this.getCards.bind(this);
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        this.setState({
          cards: data.movies
        });
      });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="GetCards">
            {cards && <DisplayCards cards={cards} />}
      </div>
    );
  }
}

export default GetCards;
