import React from "react";
import './DisplayCards.css';


class DisplayCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cards : null
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
