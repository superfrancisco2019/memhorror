import React from "react";
import axios from "axios";

class GetCards extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        play: false,
        cards: ""
    };
    this.getCards = this.getCards.bind(this);
  }

    componentDidMount() {
        this.setState({
          play: this.props.play
      })
    this.getCards();
  }

  getCards() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        this.setState({
          cards: data
        });
      });
  }

    render() {
        const { cards } = this.state;
        console.log(this.state)
        return (
            <div className="GetCards">
                <h1>HELLO</h1>
            </div>)
            ;
  }
}

export default GetCards;
