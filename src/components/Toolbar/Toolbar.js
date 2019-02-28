import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Toolbar.scss";

class Toolbar extends Component {
  render() {
    return (
      <div className={classes.Toolbar}>
        <ul>
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
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }
  ł;
}

export default Toolbar;
