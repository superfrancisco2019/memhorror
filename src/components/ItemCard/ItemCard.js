import React, { Component } from "react";
import "./ItemCard.css";

class ItemCard extends Component {
  clickCard = () => {
    if (this.props.tabMatching) {
      return;
    }
    this.props.compareId(this.props.id, this.props.uniqueKey)
  }
    
  render() {
    return (
        <div className={this.props.tabMatching ? "ItemCard ItemCard--checked" : "ItemCard"}>
          <div className={this.props.hidden ? "image-container hidden" : "image-container visible"}>
            <img onClick={this.clickCard} src={this.props.imageCard} alt="Card" />     
          </div>
        </div>
    );
  }
}

export default ItemCard;
