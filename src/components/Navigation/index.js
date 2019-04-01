import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand" href="/">Fixed top</a>
            <div class=" ">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
