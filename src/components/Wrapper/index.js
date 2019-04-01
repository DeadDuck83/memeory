import React from "react";
import "./style.css";

function Wrapper(props) {

  return (
    <div class="liquid-container">
      <div className="wrapper container">
        <div class="row">
          {props.children}
        </div>
      </div>
    </div>)
}

export default Wrapper;
