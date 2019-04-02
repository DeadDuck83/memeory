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

  changeMeme = (id) => {
    console.log((id - 1) + " id clicked");
    if (this.state.memes[id - 1].active) {
      console.log("already true, start over");
      this.setState({ memes, counter: 0 });

    }
    else {
      console.log("id: " + id);
      this.scoreCounter(id);
      
    };
  };

  scoreCounter = (id) => {
    let newCounter = 0;
    console.log("scoreCounter: " + id)
    let tempMeme = this.state.memes;
    console.log("tempMeme : ", tempMeme);
    var x = memes.id(id).active

    // use the json id to find update the value
    tempMeme[id - 1].active = true;
    console.log(
      tempMeme[id - 1].active, 
      tempMeme[id - 1]);
    for (var i = 0; i < tempMeme.length; i++) {
      if (tempMeme[i].active === true) {
        newCounter++
      } 
    }
    console.log("test: " + newCounter)
    tempMeme = this.shuffle(tempMeme);
    console.log("tempMeme", tempMeme);
    this.setState({ memes: tempMeme, counter: newCounter });
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