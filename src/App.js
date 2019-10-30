import React, { Component } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton/PlayButton";
import GetCards from "./components/GetCards/GetCards";
import Loading from "./components/Loading/Loading"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      isLoading: false
    }
  }
  
  render() {
    const { play } = this.state
    const { isLoading } = this.state
    return (
      <div className="App">
        {isLoading && <Loading stepIsLoading={(isLoading) => this.setState({ isLoading }) } />}
        <PlayButton onPlayButton={(play) => this.setState({ play })} />
        {play && <GetCards />}
      </div>
    );
  }
}

export default App;
