import React, { Component } from "react";
import './DisplayCards.css';

class DisplayCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null
    }
  }

  componentDidMount() {
    this.setState({
      cards: this.props.dataCards
    })
  }

  render() {
    console.log(this.state.cards)
    return (
      <div className="card">
        
      </div>

    );
  }
}

export default DisplayCards;
