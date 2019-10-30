import React, { Component } from "react";
import axios from "axios";
import DisplayCards from "../DisplayCards/DisplayCards";

class GetCards extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
      this.state = {
        play: false,
        cards: null
=======
    this.state = {
      play: false,
      cards: null
>>>>>>> 11af655bfc8ee4053dc73abecc580422fb2b17fd
    };
    this.getCards = this.getCards.bind(this);
  }

  componentDidMount() {
    this.setState({
      play: this.props.play
    });
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
            {cards && <DisplayCards dataCards={cards} />}
      </div>
    );
  }
}

export default GetCards;
