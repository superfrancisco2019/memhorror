import React, { Component } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton/PlayButton";
import GetCards from "./components/GetCards/GetCards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    }
  }
  
  render() {
    const { play } = this.state
    return (
      <div className="App">
        <PlayButton playOnClick={(play) => this.setState({ play })} />
        {play && <GetCards />}
      </div>
    );
  }
}

export default App;
