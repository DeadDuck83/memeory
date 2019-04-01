import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-light bg-light">
            <a className="navbar-brand" href="/">Fixed top</a>
            <div className=" ">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Correctly guessed {props.name} <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
