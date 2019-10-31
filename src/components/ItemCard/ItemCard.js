import React, { Component } from "react";
import "./ItemCard.css";

class ItemCard extends Component {
  constructor(props) {
      super(props);
      this.clickCard = this.clickCard.bind(this)
  }
  
  clickCard() {
      this.props.compareId(this.props.idCard)
  }
    
  render() {
    return (
      <div className={this.props.tabMatching ? "ItemCard ItemCard--checked" : "ItemCard"} key={this.props.idCard}>

          <img onClick={!this.props.tabMatching && this.clickCard} src={this.props.imageCard} alt="/" />
        </div>
    );
  }
}

export default ItemCard;
