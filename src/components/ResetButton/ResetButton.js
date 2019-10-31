import React, {Component} from "react";

class ResetButton extends Component {

  restartGame() {
    window.location.reload()
  }

  render() {
    return(
      <div className="ResetButton">
        <button type="submit" onClick={this.restartGame}>
          RE JOUERS
        </button>
      </div>
    )
  }
}

export default ResetButton;
