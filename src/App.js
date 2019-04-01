import React, { Component } from "react";
import MemeCard from "./components/MemeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import memes from "./memes.json";
import Navbar from "./components/Navigation";

class App extends Component {
  state = {
    memes
  };

  changeMeme = (id) => {
    console.log(id + " clicked");
    if (memes[id].active) {
      console.log("already true");
    }
    else {
      console.log("before: " + memes[id].active);
      memes[id].active = true
      console.log("After: " + memes[id].active);
      this.setState({ memes });
    };
  };

  render() {
    return (

      <Wrapper>
        <Navbar />
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
