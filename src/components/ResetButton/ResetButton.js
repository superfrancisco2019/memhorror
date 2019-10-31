import React, { Component } from "react";
import "./ResetButton.css";

class ResetButton extends Component {
  restartGame() {
    window.location.reload();
  }

  render() {
    return (
      <div className="ResetButton">
        <div className="content__restart">
          <button type="submit" onClick={this.restartGame}>
            REJOUER
          </button>
        </div>
      </div>
    );
  }
}

export default ResetButton;
