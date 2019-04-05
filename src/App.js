import React, { Component } from "react";
import MemeCard from "./components/MemeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import memes from "./memes.json";
import Navbar from "./components/Navigation";

class App extends Component {
  state = {
    memes,
    counter: 0
  };

  changeMeme = (propName) => {
// find the object using the id.
console.log(propName);
console.log(memes.propName);
const result = memes.filter(meme => meme.name === propName);
console.log(result);

    if (result.active) {
      this.setState({ memes, counter: 0 });
    }
    else {
      this.scoreCounter(result);
    };
  };

  scoreCounter = (propName) => {
    this.setState({ memes });
  }

  shuffle = memes => {
    let newmemes = memes.sort(() => Math.random() - 0.5);
    return newmemes;
  };

  render() {
    return (

      <Wrapper>
        <Navbar
          counter={this.state.counter}
        />
        <Title>Don't forget the meme</Title>
        {this.state.memes.map(meme => (
          <MemeCard
            id={meme.id}
            key={meme.id}
            name={meme.name}
            image={meme.image}
            active={meme.active}
            changeMeme={this.changeMeme}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;