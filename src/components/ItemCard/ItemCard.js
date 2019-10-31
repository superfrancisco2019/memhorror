import React, { Component } from "react";
import "./ItemCard.css";

class ItemCard extends Component {
  constructor(props) {
      super(props);
      this.clickCard = this.clickCard.bind(this)
      this.state = { hidden : true}
  }
  
  clickCard() {
      this.props.compareId(this.props.idCard)
      this.setState({ hidden: false })
  }
    
  render() {
    return (
        <div className="ItemCard" key={this.props.idCard}>
          <div className={this.state.hidden ? "image-container hidden" : "image-container visible"}>
            <img onClick={this.clickCard} src={this.props.imageCard} alt="/"/>     
          </div>
        </div>
    );
  }
}

export default ItemCard;
