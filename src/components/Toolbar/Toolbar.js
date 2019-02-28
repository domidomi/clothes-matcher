import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as classes from "./Toolbar.scss";

class Toolbar extends Component {
  render() {
    return (
      <div className={classes.Toolbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
  ł;
}

export default Toolbar;
