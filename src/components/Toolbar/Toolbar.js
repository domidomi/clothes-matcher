import React, { Component } from "react";
import { Link } from "react-router-dom";

// import classes from "./Toolbar.scss";
import "./Toolbar.scss";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <ul>
          <div className="toolbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/items/my">My items</Link>
            </li>
            <li>
              <Link to="/sets/my">My sets</Link>
            </li>
          </div>
          <div className="toolbar__links">
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Toolbar;
