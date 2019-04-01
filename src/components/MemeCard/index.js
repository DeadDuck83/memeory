import React from "react";
import "./style.css";

function MemeCard(props) {
  return (
<div onClick={() => props.changeMeme(props.id)} className=" col-sm-6 col-md-4 memeCardContainer">
<img src={props.image} className="memeCard" alt={props.name} data-active={props.active} />
</div>
  );
}

export default MemeCard;
