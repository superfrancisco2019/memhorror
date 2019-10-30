import React, { Component } from "react";
import "./Loading.css";
import loader from './images/loader.gif'; 

class Loading extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoading: true
      }
  }
    
componentDidMount() {
    setTimeout(this.props.stepIsLoading(false), 2000)
  }

  render() {
    return (
      <div className="Loading">
            <img src={loader} alt="Loading..." />
      </div>
    );
  }
}

export default Loading;
