import React from "react";
import "./style.css";

function MemeCard(props) {
  return (
<div class=" col-sm-6 col-md-4 memeCardContainer">
<img src={props.image} class="memeCard" alt={props.name} />
</div>

    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Occupation:</strong> {props.occupation}
    //       </li>
    //       <li>
    //         <strong>Location:</strong> {props.location}
    //       </li>
    //     </ul>
    //   </div>
    //   <span onClick={() => props.removeFriend(props.id)} className="remove">
    //     𝘅
    //   </span>
    // </div>
  );
}

export default MemeCard;
