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
        <div className="ItemCard" key={this.props.idCard}>
          <img onClick={this.clickCard} src={this.props.imageCard} alt="/" />
        </div>
    );
  }
}

export default ItemCard;
