import React, { Component } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton/PlayButton";
import GetCards from "./components/GetCards/GetCards";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header"

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
      <div className={play ? "App App--active" : "App" }>
        {isLoading && <Loading stepIsLoading={(isLoading) => this.setState({ isLoading }) } />}
        <Header />
        <PlayButton play={play} onPlayButton={(play) => this.setState({ play })} play={play} />
        {play && <GetCards play={play} />}
      </div>
    );
  }
}

export default App;
