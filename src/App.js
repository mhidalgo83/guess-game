import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import parks from "./parks.json";

class App extends Component {
  state = {
    parks,
    score: 0,
    topScore: 0,
    clicked: [],
    answer: ""
  };

  shuffleParks = array => {
    let i = array.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.setState({answer: "You guessed correctly!"});
      this.shuffleParks(this.state.parks);
    } else {
      this.setState({ score: 0, clicked: [] });
      this.setState({answer: "You guessed incorrectly! Try again!"});
      this.shuffleParks(this.state.parks);
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
  };

  renderParks() {
    return this.state.parks.map(emp => (
      <ImageCard
        key={emp.id}
        handleClick={this.handleClick}
        handleIncrement={this.handleIncrement}
        id={emp.id}
        image={emp.image}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <NavBar
          score={this.state.score}
          topScore={this.state.topScore}
          answer={this.state.answer}
        />
        <Jumbotron />
        <Wrapper>{this.renderParks()}</Wrapper>
      </div>
    );
  }
}

export default App;
