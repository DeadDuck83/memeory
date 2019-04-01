import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Don't forget to Meme</h1>
      <p className="lead">A simple game to see how good your memory is by testing how well you remember which meme you click on. Click on all 12 without clicking on any one meme two times, you win!</p>
      <hr className="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    </div>

  )
};

export default Title;
