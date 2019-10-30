import React from "react";

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    const statePlay = !this.state.play;
    this.setState({
      play: statePlay
    });
      this.props.onPlayButton(this.state.play);
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
