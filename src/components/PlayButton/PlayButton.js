import React from "react";
import './PlayButton.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.props.onPlayButton(!this.props.play);
  }

  render() {
    const { play } = this.props
    return (
      <div className={play ? "PlayButton PlayButton--active" : "PlayButton" }>
        <button className="start__button" onClick={this.buttonClick}>
          start
        </button>
      </div>
    );
  }
}

export default PlayButton;
