import React from "react";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.props.onPlayButton(!this.props.play);
  }

  render() {
    return (
      <div className="PlayButton">
        <button className="start__button" onClick={this.buttonClick}>
          start
        </button>
      </div>
    );
  }
}

export default PlayButton;
